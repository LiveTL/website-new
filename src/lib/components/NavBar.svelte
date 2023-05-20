<script lang="ts">
  import LiveTLLogo from '$lib/assets/livetl/logo.png';
  import { DISCORD_SERVER_URL, GITHUB_ORG_URL } from '../../const';

  import { Discord, Github } from '@steeze-ui/simple-icons';
  import { Icon } from '@steeze-ui/svelte-icon';
</script>

<div class="navbar bg-neutral text-secondary-content">
  <div class="navbar-start space-x-4">
    <a href="/" class="min-w-fit hover:opacity-90 hover:scale-105 transition duration-300 ease-in-out"
      ><img
        src={LiveTLLogo}
        class="btn btn-square rounded-sm m-1"
        alt="LiveTL logo"
      /></a
    >
    <a href="/livetl" class="hover:text-slate-100 transition duration-300 ease-in-out">LiveTL</a>
    <a href="/hyperchat" class="hover:text-slate-100 transition duration-300 ease-in-out">HyperChat</a>
  </div>
  <div class="navbar-end">
    <a type="button" href={GITHUB_ORG_URL} class="btn btn-ghost btn-circle">
      <Icon src={Github} size="24px" theme="mini" class="h-5 w-5" />
    </a>
    <a type="button" href={DISCORD_SERVER_URL} class="btn btn-ghost btn-circle">
      <Icon src={Discord} size="24px" theme="mini" class="h-5 w-5" />
    </a>
  </div>
</div>
