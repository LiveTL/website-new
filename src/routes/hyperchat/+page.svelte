<script lang="ts">
  import type { PageData } from './$types';
  import hyperChatBrowserDemo from '$lib/assets/hyperchat/browser-demo-peko-kiara.png';
  import hyperChatLogo from '$lib/assets/hyperchat/logo.png';
  import CustomisablesHero from '$lib/components/CustomisablesHero.svelte';

  const HyperChatDemoVideo = '/HyperChat_Improved_YouTube_Chat.mp4';

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
        <h1>Hyper<span class="text-base-100">Chat</span></h1>
      </div>

      <p class="font-bold text-info">By LiveTL</p>

      <p class="py-6 text-xl text-base-300">Optimized YouTube Chat.</p>
      <a
        class="btn-primary btn rounded-xl transition-all hover:scale-105"
        href="/hyperchat/install">Install</a
      >
    </div>
  </div>
</div>

<div class="hero min-h-screen bg-base-100">
  <div class="hero-content flex flex-col text-center">
    <div class="max-w-md">
      <h1 class="text-5xl font-bold text-secondary">
        Elevate your YouTube livestream experience
      </h1>
      <p class="py-6 text-lg">
        Performance optimizations. Customization options. Cutting-edge features!
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

<CustomisablesHero />
