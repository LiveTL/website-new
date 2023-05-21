<script lang="ts">
  import LiveTLLogo from '$lib/assets/livetl/logo.png';
  import { DISCORD_SERVER_URL, GITHUB_ORG_URL } from '../../const';

  import { Discord, Github } from '@steeze-ui/simple-icons';
  import { Icon } from '@steeze-ui/svelte-icon';
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
    <a
      href="/livetl"
      class="transition duration-300 ease-in-out hover:text-slate-100">LiveTL</a
    >
    <a
      href="/hyperchat"
      class="transition duration-300 ease-in-out hover:text-slate-100"
      >HyperChat</a
    >
  </div>
  <div class="navbar-end">
    <a type="button" href={GITHUB_ORG_URL} class="btn-ghost btn-circle btn">
      <Icon src={Github} size="24px" theme="mini" class="h-5 w-5" />
    </a>
    <a type="button" href={DISCORD_SERVER_URL} class="btn-ghost btn-circle btn">
      <Icon src={Discord} size="24px" theme="mini" class="h-5 w-5" />
    </a>
  </div>
</div>
