<script lang="ts">
  import LivetlChatDemo from '$lib/assets/livetl-chat-demo.png';

  import TwitterTestimonials from '$lib/components/TwitterTestimonials.svelte';
  import Reviews from '$lib/components/Reviews.svelte';

  import { Funnel } from '@steeze-ui/heroicons';
  import { Icon } from '@steeze-ui/svelte-icon';
  import { LetterCaseCapitalize } from '@steeze-ui/radix-icons';

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
      <h1
        class="text-6xl font-bold text-gradient text-transparent bg-clip-text bg-gradient-to-r from-info to-accent"
      >
        LiveTL
      </h1>

      <p class="text-xl py-6">Get live translations for YouTube and Twitch.</p>
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

<div class="bg-base-100 py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:text-center">
      <h1 class="mt-2 text-5xl font-bold tracking-tight">
        Customisable
      </h1>
      <p class="mt-6 text-lg leading-8 text-gray-600">
        Make LiveTL look and behave exactly the way you want.
      </p>
    </div>
    <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
      <dl
        class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
      >
        <div class="relative pl-16">
          <dt class="text-base font-semibold leading-7 text-gray-900">
            <div
              class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary"
            >
              <Icon
                src={LetterCaseCapitalize}
                size="24px"
                class="h-5 w-5 stroke-slate-100"
              />
            </div>
            Custom Font Sizing
          </dt>
          <dd class="mt-2 text-base leading-7 text-gray-600">
            Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse
            semper morbi. Odio urna massa nunc massa.
          </dd>
        </div>
        <div class="relative pl-16">
          <dt class="text-base font-semibold leading-7 text-gray-900">
            <div
              class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-white"
            >
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 2H6V13H9V2ZM10 2V13H12.5C12.7761 13 13 12.7761 13 12.5V2.5C13 2.22386 12.7761 2 12.5 2H10ZM2.5 2H5V13H2.5C2.22386 13 2 12.7761 2 12.5V2.5C2 2.22386 2.22386 2 2.5 2ZM2.5 1C1.67157 1 1 1.67157 1 2.5V12.5C1 13.3284 1.67157 14 2.5 14H12.5C13.3284 14 14 13.3284 14 12.5V2.5C14 1.67157 13.3284 1 12.5 1H2.5Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
            </svg>
            </div>
            Layouts
          </dt>
          <dd class="mt-2 text-base leading-7 text-gray-600">
            Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget.
            Sem sodales gravida quam turpis enim lacus amet.
          </dd>
        </div>
        <div class="relative pl-16">
          <dt class="text-base font-semibold leading-7 text-gray-900">
            <div
              class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary"
            >
              <Icon src={Funnel} size="24px" class="h-5 w-5 stroke-slate-100" />
            </div>
            Filters
          </dt>
          <dd class="mt-2 text-base leading-7 text-gray-600">
            Quisque est vel vulputate cursus. Risus proin diam nunc commodo.
            Lobortis auctor congue commodo diam neque.
          </dd>
        </div>
        <div class="relative pl-16">
          <dt class="text-base font-semibold leading-7 text-gray-900">
            <div
              class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-white"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                ><path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.5 4H1.5C1.22386 4 1 4.22386 1 4.5V10.5C1 10.7761 1.22386 11 1.5 11H13.5C13.7761 11 14 10.7761 14 10.5V4.5C14 4.22386 13.7761 4 13.5 4ZM1.5 3C0.671573 3 0 3.67157 0 4.5V10.5C0 11.3284 0.671573 12 1.5 12H13.5C14.3284 12 15 11.3284 15 10.5V4.5C15 3.67157 14.3284 3 13.5 3H1.5ZM2 5H3V6H2V5ZM5 5H4V6H5V5ZM6 5H7V6H6V5ZM9 5H8V6H9V5ZM10 5H11V6H10V5ZM13 5H12V6H13V5ZM11 7H12V8H11V7ZM13 9H12V10H13V9ZM9 7H10V8H9V7ZM8 7H7V8H8V7ZM5 7H6V8H5V7ZM4 7H3V8H4V7ZM2 9H3V10H2V9ZM11 9H4V10H11V9Z"
                  fill="currentColor"
                /></svg
              >
            </div>
            Shortcuts
          </dt>
          <dd class="mt-2 text-base leading-7 text-gray-600">
            Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis
            aliquet hac quis. Id hac maecenas ac donec pharetra eget.
          </dd>
        </div>
      </dl>
    </div>
  </div>
</div>

<div class="hero min-h-screen bg-base-200 snap-start">
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

<div class="hero min-h-screen bg-base-100 snap-start">
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
