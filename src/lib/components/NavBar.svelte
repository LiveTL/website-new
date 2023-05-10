<script lang="ts">
  import LiveTLLogo from '$lib/assets/livetl-logo.png';

  const liveTLGithub = 'https://github.com/LiveTL';
  const liveTLDiscord = 'https://discord.com/invite/uJrV3tmthg';

  import { Discord, Github } from '@steeze-ui/simple-icons';
  import { Icon } from '@steeze-ui/svelte-icon';
</script>

<div class="navbar bg-neutral text-secondary-content">
  <div class="navbar-start space-x-4">
    <a href="/" class="min-w-fit"
      ><img
        src={LiveTLLogo}
        class="btn btn-square rounded-sm m-1"
        alt="LiveTL logo"
      /></a
    >
    <a href="/install" class="hover:text-slate-100">LiveTL</a>
    <a href="/hyperchat" class="hover:text-slate-100">HyperChat</a>
  </div>
  <div class="navbar-end">
    <a type="button" href={liveTLGithub} class="btn btn-ghost btn-circle">
      <Icon src={Github} size="24px" theme="mini" class="h-5 w-5" />
    </a>
    <a type="button" href={liveTLDiscord} class="btn btn-ghost btn-circle">
      <Icon src={Discord} size="24px" theme="mini" class="h-5 w-5" />
    </a>
  </div>
</div>
