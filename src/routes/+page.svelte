<script lang="ts">
  import LiveTLLogo from '$lib/assets/livetl/logo-big.png?enhanced';
  import HyperChatLogo from '$lib/assets/hyperchat/logo.png?enhanced';
  import YTCFilterLogo from '$lib/assets/ytcfilter/logo-small.png?enhanced';
  import { Icon } from '@steeze-ui/svelte-icon';
  import { Github } from '@steeze-ui/simple-icons';
  import { GITHUB_ORG_URL } from '../const';

  import { t } from '$lib/translation';
</script>

<svelte:head>
  <title>Extensions by LiveTL</title>
  <meta
    name="description"
    content="Free and open source extensions, used and loved by thousands of users around the world."
  />
</svelte:head>

<div class="hero min-h-screen bg-gradient-to-b from-base-100 to-base-200">
  <div class="hero-content text-center">
    <div class="max-w-4xl space-y-8 py-8">
      <h1 class="text-6xl font-bold text-secondary">{$t('home.title')}</h1>
      <p class="py-6 text-2xl text-info">
        {$t('home.subtitle')}
      </p>

      <div
        class="flex flex-col justify-center gap-x-12 gap-y-8 pb-10 md:flex-row"
      >
        <a href="/livetl">
          <div
            class="card pointer-events-none min-h-[26em] rounded-3xl bg-base-100 shadow-lg transition-all hover:scale-105 hover:shadow-2xl hover:shadow-[#05aac9] md:pointer-events-auto md:max-w-xs"
          >
            <figure class="h-60 px-10 pt-10">
              <enhanced:img
                src={LiveTLLogo}
                alt="LiveTL Logo"
                class="h-3/4 rounded-2xl"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title mx-auto text-4xl">LiveTL</h2>
              <p>{$t('home.livetl_desc')}</p>
            </div>
          </div>
        </a>

        <a href="/hyperchat">
          <div
            class="card pointer-events-none min-h-[26em] rounded-3xl bg-base-100 shadow-lg transition-all hover:scale-105 hover:shadow-2xl hover:shadow-primary md:pointer-events-auto md:max-w-xs"
          >
            <figure class="h-60 px-10 pt-10">
              <enhanced:img src={HyperChatLogo} alt="HyperChat Logo" />
            </figure>
            <div class="card-body">
              <h2 class="card-title mx-auto text-4xl">HyperChat</h2>
              <p>{$t('home.hyperchat_desc')}</p>
            </div>
          </div>
        </a>

        <a href="/ytcfilter">
          <div
            class="card pointer-events-none min-h-[26em] rounded-3xl bg-base-100 shadow-lg transition-all hover:scale-105 hover:shadow-2xl hover:shadow-info md:pointer-events-auto md:max-w-xs"
          >
            <figure class="h-60 px-10 pt-10">
              <enhanced:img
                src={YTCFilterLogo}
                alt="YTCFilter Logo"
                class="h-3/4 rounded-2xl"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title mx-auto text-4xl">ytcFilter</h2>
              <p>{$t('home.ytcfilter_desc')}</p>
            </div>
          </div>
        </a>
      </div>

      <a
        href={GITHUB_ORG_URL}
        class="btn btn-lg pointer-events-none gap-2 rounded-full text-base-100 shadow-md transition-all hover:scale-105 hover:text-base-200 hover:shadow-sm md:pointer-events-auto"
      >
        <Icon name="github" src={Github} size="28" />
        {$t('home.github_follow_btn')}
      </a>
    </div>
  </div>
</div>
