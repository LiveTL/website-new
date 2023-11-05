<script lang="ts">
  import { onMount } from 'svelte';
  import LiveTLLogo from '$lib/assets/livetl/logo.png';

  import { Icon } from '@steeze-ui/svelte-icon';
  import { Language } from '@steeze-ui/heroicons';

  const navigationLinks = [
    { href: '/livetl', text: 'LiveTL' },
    { href: '/hyperchat', text: 'HyperChat' },
    { href: '/ytcfilter', text: 'YtcFilter' },
  ];

  let selectedLanguage = localStorage.getItem('lang') || 'en';

  $: localStorage.setItem('lang', selectedLanguage);

  onMount(() => {
    const handleStorage = (event: StorageEvent) => {
      if (event.key === 'lang') {
        selectedLanguage = event.newValue;
      }
    };
    window.addEventListener('storage', handleStorage);
    return () => {
      window.removeEventListener('storage', handleStorage);
    };
  });
</script>

<div class="navbar bg-neutral text-secondary-content">
  <div class="navbar-start space-x-4">
    <a
      href="/"
      class="min-w-fit transition duration-300 ease-in-out hover:scale-105 hover:opacity-90"
      ><img
        src={LiveTLLogo}
        class="btn-square btn m-1 rounded-sm"
        alt="LiveTL logo"
      /></a
    >
    {#each navigationLinks as { href, text }}
      <a {href} class="transition duration-300 ease-in-out hover:text-slate-100"
        >{text}</a
      >
    {/each}
  </div>
  <div class="navbar-end gap-2">
    <Icon src={Language} size="24" theme="solid" class="text-primary" />
    <select
      class="select-bordered select-primary select max-w-xs text-primary"
      bind:value={selectedLanguage}
      on:change={() => location.reload()}
    >
      <option value="en">EN</option>
      <option value="ja">JP</option>
    </select>
  </div>
</div>
