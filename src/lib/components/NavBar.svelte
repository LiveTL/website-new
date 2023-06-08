<script lang="ts">
  import LiveTLLogo from '$lib/assets/livetl/logo.png';

  const navigationLinks = [
    { href: '/livetl', text: 'LiveTL' },
    { href: '/hyperchat', text: 'HyperChat' },
    { href: '/ytcfilter', text: 'YtcFilter' },
  ];
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
  <div class="navbar-end" />
</div>
