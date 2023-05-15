<script lang="ts">
  import LivetlChatDemo from '$lib/assets/livetl-chat-demo.png';

  import TwitterTestimonials from '$lib/components/TwitterTestimonials.svelte';
  import Reviews from '$lib/components/Reviews.svelte';

  import { writable } from 'svelte/store';

  let activeTab = writable(1); // Set the default active tab

  const tabsContent = [
    { id: 1, content: TwitterTestimonials, title: 'Twitter' },
    { id: 2, content: Reviews, title: 'Reviews' },
  ];

  const customisables = [
    {
      title: 'Custom Font Sizing',
      description: 'Change the chat zoom and font size.',
      icon: `<svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-5"><path d="M3.68979 2.75C3.89667 2.74979 4.08232 2.87701 4.15679 3.07003L7.36662 11.39C7.46602 11.6477 7.33774 11.9371 7.0801 12.0365C6.82247 12.1359 6.53304 12.0076 6.43365 11.75L5.3825 9.02537H2.01133L0.966992 11.749C0.868128 12.0068 0.578964 12.1357 0.321126 12.0369C0.0632878 11.938 -0.0655864 11.6488 0.0332774 11.391L3.22344 3.07099C3.29751 2.87782 3.4829 2.75021 3.68979 2.75ZM3.69174 4.64284L5.05458 8.17537H2.33724L3.69174 4.64284ZM10.8989 5.20703C9.25818 5.20703 8.00915 6.68569 8.00915 8.60972C8.00915 10.6337 9.35818 12.0124 10.8989 12.0124C11.7214 12.0124 12.5744 11.6692 13.1543 11.0219V11.53C13.1543 11.7785 13.3557 11.98 13.6043 11.98C13.8528 11.98 14.0543 11.7785 14.0543 11.53V5.72C14.0543 5.47147 13.8528 5.27 13.6043 5.27C13.3557 5.27 13.1543 5.47147 13.1543 5.72V6.22317C12.6054 5.60095 11.7924 5.20703 10.8989 5.20703ZM13.1543 9.79823V7.30195C12.7639 6.58101 11.9414 6.05757 11.0868 6.05757C10.1088 6.05757 9.03503 6.96581 9.03503 8.60955C9.03503 10.1533 10.0088 11.1615 11.0868 11.1615C11.9701 11.1615 12.7719 10.4952 13.1543 9.79823Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>`,
    },
    {
      title: 'Layouts',
      description: 'Change chat direction, position. Create your own presets.',
      icon: `<svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-5">
              <path d="M9 2H6V13H9V2ZM10 2V13H12.5C12.7761 13 13 12.7761 13 12.5V2.5C13 2.22386 12.7761 2 12.5 2H10ZM2.5 2H5V13H2.5C2.22386 13 2 12.7761 2 12.5V2.5C2 2.22386 2.22386 2 2.5 2ZM2.5 1C1.67157 1 1 1.67157 1 2.5V12.5C1 13.3284 1.67157 14 2.5 14H12.5C13.3284 14 14 13.3284 14 12.5V2.5C14 1.67157 13.3284 1 12.5 1H2.5Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
            </svg>`,
    },
    {
      title: 'Filters',
      description:
        'Filter by language, user types. Block and whitelist chatters. Optional spam protection',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
</svg>`,
    },
    {
      title: 'Shortcuts',
      description: 'Use default shortcuts or create your own.',
      icon: `<svg
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="h-5"
                ><path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.5 4H1.5C1.22386 4 1 4.22386 1 4.5V10.5C1 10.7761 1.22386 11 1.5 11H13.5C13.7761 11 14 10.7761 14 10.5V4.5C14 4.22386 13.7761 4 13.5 4ZM1.5 3C0.671573 3 0 3.67157 0 4.5V10.5C0 11.3284 0.671573 12 1.5 12H13.5C14.3284 12 15 11.3284 15 10.5V4.5C15 3.67157 14.3284 3 13.5 3H1.5ZM2 5H3V6H2V5ZM5 5H4V6H5V5ZM6 5H7V6H6V5ZM9 5H8V6H9V5ZM10 5H11V6H10V5ZM13 5H12V6H13V5ZM11 7H12V8H11V7ZM13 9H12V10H13V9ZM9 7H10V8H9V7ZM8 7H7V8H8V7ZM5 7H6V8H5V7ZM4 7H3V8H4V7ZM2 9H3V10H2V9ZM11 9H4V10H11V9Z"
                  fill="currentColor"
                /></svg
              >`,
    },
  ];

  function changeActiveTab(tabId: number) {
    activeTab.set(tabId);
  }
</script>

<div
  class="hero min-h-screen snap-start bg-gradient-to-tr from-info to-accent bg-scroll"
>
  <div class="hero-content text-center">
    <div class="max-w-md">
      <h1 class="text-6xl font-bold text-base-200">LiveTL</h1>

      <p class="text-xl py-6 text-base-300">
        Get live translations for YouTube and Twitch.
      </p>
      <a
        class="btn btn-primary rounded-xl transition-all hover:scale-105"
        href="/install">Install</a
      >
    </div>
  </div>
</div>

<div class="hero min-h-screen bg-base-100 snap-start">
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

<div class="bg-slate-900 py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:text-center">
      <h1
        class="mt-2 text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-tr from-secondary to-accent"
      >
        Customisable
      </h1>
      <p class="mt-6 text-lg leading-8 text-slate-100">
        Make LiveTL look and behave exactly the way you want.
      </p>
    </div>
    <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
      <dl
        class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
      >
        {#each customisables as customisable}
          <div class="relative pl-16">
            <dt class="font-semibold leading-7 text-base-200">
              <div
                class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-white"
              >
                {@html customisable.icon}
              </div>
              {customisable.title}
            </dt>
            <dd class="mt-2 leading-7 text-base-300">
              {customisable.description}
            </dd>
          </div>
        {/each}
      </dl>
    </div>
  </div>
</div>

<div class="hero min-h-screen bg-base-100 snap-start">
  <div class="hero-content">
    <div class="space-y-8">
      <h1 class="text-5xl font-bold text-center">What do people say?</h1>
      <div class="tabs mx-auto w-max decoration-secondary">
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
          {#each ['Install the LiveTL extension', 'Select preffered language and translators', 'Start watching!'] as step}
            <li>{step}</li>
          {/each}
        </ol>
      </div>
    </div>
  </div>
</div>
