<script lang="ts">
  import { locale, locales, translations } from '$lib/translation';
  import LiveTLLogo from '$lib/assets/livetl/logo-big.png?enhanced';

  import { Icon } from '@steeze-ui/svelte-icon';
  import { Language } from '@steeze-ui/heroicons';

  const navigationLinks = [
    { href: '/livetl', text: 'LiveTL' },
    { href: '/hyperchat', text: 'HyperChat' },
    { href: '/ytcfilter', text: 'YtcFilter' },
  ];

  const handleChange = ({ currentTarget }) => {
    const { value } = currentTarget;

    document.cookie = `lang=${value} ;`;
    location ? location.reload() : '';
  };

  let transl = translations.get() as any;
</script>

<div class="navbar bg-neutral text-secondary-content">
  <div class="navbar-start space-x-4">
    <a
      href="/"
      class="min-w-fit transition duration-300 ease-in-out hover:scale-105 hover:opacity-90"
      ><enhanced:img
        src={LiveTLLogo}
        class="btn btn-square m-1 rounded-sm"
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
      class="select select-bordered select-primary max-w-xs text-primary"
      bind:value={$locale}
      on:change={handleChange}
    >
      <!-- A bit ugly for now, FIXME: use $t instead -->
      {#each $locales as value}
        <option {value} selected={$locale === value}
          >{transl[value]['name']}</option
        >
      {/each}
    </select>
  </div>
</div>
