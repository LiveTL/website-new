<script lang="ts">
  import type { PageData } from './$types';
  import hyperChatBrowserDemo from '$lib/assets/hyperchat/browser-demo-peko-kiara.png';
  import hyperChatLogo from '$lib/assets/hyperchat/logo.png';

  const HyperChatDemoVideo = '/HyperChat_Improved_YouTube_Chat.mp4';

  export let data: PageData;
</script>

<div class="hero min-h-screen bg-slate-900 relative">
  <video
    autoplay
    loop
    muted
    playsinline
    class="absolute w-full h-full object-cover opacity-30"
    preload="metadata"
  >
    <source src={HyperChatDemoVideo} type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  <div class="hero-content text-center relative">
    <div class="max-w-md">
      <img
        src={hyperChatLogo}
        alt="HyperChat Logo"
        class="mx-auto w-48">
      <div class="font-bold text-primary text-7xl my-2 tracking-wide">
        <h1>Hyper<span class="text-base-100">Chat</span></h1>
      </div>

      <p class="text-info font-bold">By LiveTL</p>

      <p class="text-xl py-6 text-base-300">Optimized YouTube Chat.</p>
      <a
        class="btn btn-primary rounded-xl transition-all hover:scale-105"
        href="/hyperchat/install">Install</a
      >
    </div>
  </div>
</div>

<div class="hero min-h-screen bg-base-100">
  <div class="hero-content text-center flex flex-col">
    <div class="max-w-md">
      <h1 class="text-5xl font-bold text-secondary">Elevate your YouTube livestream experience</h1>
      <p class="py-6 text-lg">
        Performance optimizations. Customization options. Cutting-edge features!
      </p>
    </div>
    <div class="max-w-5xl">
        <img
        src={hyperChatBrowserDemo}
        alt="HyperChat demo in browser."
        class="shadow-2xl shadow-primary rounded-md"
      />
    </div>
  </div>
</div>
