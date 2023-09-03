<script lang="ts">
  import type { PageData } from './$types';
  import hyperChatBrowserDemo from '$lib/assets/hyperchat/browser-demo-peko-kiara.png';
  import hyperChatLogo from '$lib/assets/hyperchat/logo.png';
  import CustomisablesHero from '$lib/components/CustomisablesHero.svelte';

  import { t } from '$lib/translation';

  const HyperChatDemoVideo = '/HyperChat_Improved_YouTube_Chat.mp4';

  const customisables = [
    {
      title: $t('hyperchat.customisables.theme.title'),
      description: $t('hyperchat.customisables.theme.description'),
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
</svg>`,
    },
    {
      title: $t('hyperchat.customisables.rendering.title'),
      description: $t('hyperchat.customisables.rendering.description'),
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
</svg>`,
    },
    {
      title: $t('hyperchat.customisables.emojis.title'),
      description: $t('hyperchat.customisables.emojis.description'),
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
</svg>`,
    },
    {
      title: $t('hyperchat.customisables.filters.title'),
      description: $t('hyperchat.customisables.filters.description'),
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
</svg>`,
    },
  ];

  export let data: PageData;
</script>

<div class="hero relative min-h-screen bg-slate-900">
  <video
    autoplay
    loop
    muted
    playsinline
    class="absolute h-full w-full object-cover opacity-30"
    preload="metadata"
  >
    <source src={HyperChatDemoVideo} type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  <div class="hero-content relative text-center">
    <div class="max-w-md">
      <img src={hyperChatLogo} alt="HyperChat Logo" class="mx-auto w-48" />
      <div class="my-2 text-7xl font-bold tracking-wide text-primary">
        {@html $t('hyperchat.title')}
      </div>

      <p class="text-lg font-bold text-primary">
        {@html $t('hyperchat.by_livetl')}
      </p>

      <p class="py-6 text-xl text-base-300">{$t('hyperchat.tagline')}</p>
      <div class="space-x-1">
        <a
          class="btn btn-primary rounded-xl text-base-100"
          href="/hyperchat/install">{$t('common.install')}</a
        >
        <a
          class="btn btn-outline btn-accent rounded-xl font-semibold"
          href="/hyperchat/about">{$t('common.learn_more')}</a
        >
      </div>
    </div>
  </div>
</div>

<div class="hero min-h-screen bg-base-100">
  <div class="hero-content my-8 flex flex-col text-center">
    <div class="max-w-md">
      <h1 class="text-5xl font-bold text-secondary">
        {$t('hyperchat.showcase.title')}
      </h1>
      <p class="py-6 text-lg">
        {$t('hyperchat.showcase.text')}
      </p>
    </div>
    <div class="max-w-5xl">
      <img
        src={hyperChatBrowserDemo}
        alt="HyperChat demo in browser."
        class="rounded-md shadow-2xl shadow-primary"
      />
    </div>
  </div>
</div>

<CustomisablesHero
  titleText={$t('common.customisable')}
  subtitleText={$t('hyperchat.customisables.subtitle')}
  headingStyle="mt-2 text-5xl font-bold tracking-tight text-primary"
  {customisables}
/>
