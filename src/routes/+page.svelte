<script lang="ts">
  import LivetlChatDemo from '$lib/assets/livetl-chat-demo.png';

  import TwitterTestimonials from '$lib/components/TwitterTestimonials.svelte';
  import Reviews from '$lib/components/Reviews.svelte';

  import { writable } from 'svelte/store';

  let activeTab = writable(1); // Set the default active tab

  let tabsContent = [
    { id: 1, content: TwitterTestimonials, title: 'Twitter' },
    { id: 2, content: Reviews, title: 'Reviews' },
  ];

  function changeActiveTab(tabId: number) {
    activeTab.set(tabId);
  }
</script>

<div class="hero min-h-screen bg-base-100 snap-start">
  <div class="hero-content text-center">
    <div class="max-w-md">
      <h1 class="text-5xl font-bold">LiveTL</h1>
      <p class="py-6">Get live translations for YouTube and Twitch.</p>
      <a
        class="btn btn-primary rounded-xl transition-all hover:scale-105"
        href="/install">Install</a
      >
    </div>
  </div>
</div>

<div class="hero min-h-screen bg-base-200 snap-start">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <div class="mockup-window border bg-base-300">
      <div class="flex justify-center bg-base-200">
        <img src={LivetlChatDemo} alt="LiveTL Chat demo in dedicated window." />
      </div>
    </div>
    <div>
      <h1 class="text-5xl font-bold">Separate chat</h1>
      <p class="py-6">
        <span class="text-info font-semibold">Filter</span> translations by your
        native language. Select your
        <span class="text-info font-semibold">favorite translators</span>. Block
        <span class="text-info font-semibold">spammers</span>. VOD support.
        Custom <span class="text-info font-semibold">filters</span>.
      </p>
    </div>
  </div>
</div>

<div class="hero min-h-screen bg-base-100 snap-start">
  <div class="hero-content">
    <div class="space-y-8">
      <h1 class="text-5xl font-bold text-center">What do people say?</h1>
      <div class="tabs mx-auto w-max">
        {#each tabsContent as tab}
          <a
            class="tab tab-bordered"
            class:tab-active={$activeTab === tab.id}
            on:click={() => changeActiveTab(tab.id)}
            href="#{tab.title}"
          >
            {@html tab.title}
          </a>
        {/each}
      </div>

      <div>
        <!-- Tab Content -->
        {#each tabsContent as tab}
          {#if $activeTab === tab.id}
            <svelte:component this={tab.content} />
          {/if}
        {/each}
      </div>
    </div>
  </div>
</div>

<div class="hero min-h-screen bg-base-200 snap-start">
  <div class="hero-content">
    <div class="max-w-md space-y-8">
      <h1 class="text-5xl font-bold text-center">How to use?</h1>
      <div class="mx-8">
        <ol class="list-decimal text-xl font-medium space-y-2">
          <li>Install the LiveTL extension</li>
          <li>Select preferred language and translators</li>
          <li>Start watching!</li>
        </ol>
      </div>
    </div>
  </div>
</div>
