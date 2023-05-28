<script lang="ts">
  import LivetlChatDemo from '$lib/assets/livetl/livetl-chat-demo.png';

  import TwitterTestimonials from '$lib/components/TwitterTestimonials.svelte';
  import Reviews from '$lib/components/Reviews.svelte';
  import CustomisablesHero from '$lib/components/CustomisablesHero.svelte';

  import { Icon } from '@steeze-ui/svelte-icon';
  import { Github } from '@steeze-ui/simple-icons';

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
    {
      title: 'Read Aloud',
      description:
        'Reads the translation messages out loud. Perfect for multitasking or accessibility.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5">
  <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z" />
  <path d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z" />
</svg>
`,
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

      <p class="py-6 text-xl text-base-300">
        Get live translations for YouTube and Twitch.
      </p>
      <a
        class="btn-primary btn rounded-xl transition-all hover:scale-105"
        href="/livetl/install">Install</a
      >
    </div>
  </div>
</div>

<div class="hero min-h-screen snap-start bg-base-100">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <div class="mockup-window border bg-base-300">
      <div class="flex justify-center bg-base-200">
        <img src={LivetlChatDemo} alt="LiveTL Chat demo in dedicated window." />
      </div>
    </div>
    <div>
      <h1 class="text-5xl font-bold">Separate chat</h1>
      <p class="py-6">
        <span class="font-semibold text-info">Filter</span> translations by your
        native language. Select your
        <span class="font-semibold text-info">favorite translators</span>. Block
        <span class="font-semibold text-info">spammers</span>. VOD support.
        Custom <span class="font-semibold text-info">filters</span>.
      </p>
    </div>
  </div>
</div>

<CustomisablesHero {customisables} />

<div class="hero min-h-screen snap-start bg-base-100">
  <div class="hero-content">
    <div class="space-y-8">
      <h1 class="text-center text-5xl font-bold">What do people say?</h1>
      <div class="tabs mx-auto w-max decoration-secondary">
        {#each tabsContent as tab}
          <a
            class="tab-bordered tab transition duration-500 ease-in-out"
            class:tab-active={$activeTab === tab.id}
            on:click={() => changeActiveTab(tab.id)}
            href="#{tab.title}"
          >
            {@html tab.title}
          </a>
        {/each}
      </div>

      <div class="transition duration-500 ease-in-out">
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

<div class="hero min-h-screen snap-start bg-slate-900">
  <div class="hero-content">
    <div class="max-w-md space-y-8">
      <h1
        class="bg-gradient-to-tr from-secondary to-accent bg-clip-text text-center text-5xl font-bold text-transparent"
      >
        How to use?
      </h1>
      <div class="mx-8 text-slate-100">
        <ol class="list-decimal space-y-2 text-xl font-medium">
          {#each ['Install the LiveTL extension', 'Select preffered language and translators', 'Start watching!'] as step}
            <li>{step}</li>
          {/each}
        </ol>
      </div>
    </div>
  </div>
</div>

<div class="hero min-h-screen snap-start bg-base-100">
  <div class="hero-content">
    <div class="flex max-w-md flex-col space-y-8">
      <h1 class="text-center text-5xl font-bold" id="donations">
        <span class="text-info">Support</span> the devs!
      </h1>
      <p class="text-center">
        Donations are welcome through <a
          href="https://opencollective.com/livetl"
          class="link-secondary link">Open Collective</a
        >
        or
        <a href="https://github.com/sponsors/LiveTL" class="link-secondary link"
          >Github Sponsors</a
        >.
      </p>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 457 60"
        version="1.1"
      >
        <defs />
        <g
          id="Page-1"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g id="opencollective-logo">
            <g id="icon" transform="translate(0.000000, 10.000000)">
              <path
                d="M34.6194245,8.17880011 C36.7508489,11.2495266 38,14.9788859 38,19 C38,23.0211141 36.7508489,26.7504734 34.6194245,29.8211999 L29.6976779,24.8994533 C30.6641742,23.1506053 31.2142857,21.1395454 31.2142857,19 C31.2142857,16.8604546 30.6641742,14.8493947 29.6976779,13.1005467 L34.6194245,8.17880011 Z M29.8211999,3.38057552 L24.8994533,8.30232215 C23.1506053,7.33582578 21.1395454,6.78571429 19,6.78571429 C12.2542363,6.78571429 6.78571429,12.2542363 6.78571429,19 C6.78571429,25.7457637 12.2542363,31.2142857 19,31.2142857 C21.1395454,31.2142857 23.1506053,30.6641742 24.8994533,29.6976779 L29.8211999,34.6194245 C26.7504734,36.7508489 23.0211141,38 19,38 C8.50658975,38 0,29.4934102 0,19 C0,8.50658975 8.50658975,0 19,0 C23.0211141,0 26.7504734,1.24915112 29.8211999,3.38057552 Z"
                id="Combined-Shape-Copy-2"
                fill="#7FADF2"
              />
              <path
                d="M34.6194245,8.17880011 C36.7508489,11.2495266 38,14.9788859 38,19 C38,23.0211141 36.7508489,26.7504734 34.6194245,29.8211999 L29.6976779,24.8994533 C30.6641742,23.1506053 31.2142857,21.1395454 31.2142857,19 C31.2142857,16.8604546 30.6641742,14.8493947 29.6976779,13.1005467 L34.6194245,8.17880011 Z"
                id="closing-o"
                fill="#B8D3F4"
              />
            </g>
            <g
              id="logotype"
              transform="translate(62.000000, 0.000000)"
              fill="#515F71"
            >
              <path
                d="M48.7,13.6 C45,13.6 41.5,15 38.9,17.2 L38.9,14.9 C38.9,14.3 38.4,13.9 37.9,13.9 L34.5,13.9 C33.9,13.9 33.5,14.4 33.5,14.9 L33.5,58.6 C33.5,59.1 33.9,59.6 34.5,59.6 L38,59.6 C38.5,59.6 39,59.2 39,58.6 L39,40.3 C41.6,42.5 45.1,43.9 48.8,43.9 C57.2,43.9 64,37.1 64,28.7 C63.8,20.3 57,13.6 48.7,13.6 L48.7,13.6 Z M48.7,38.4 C43.3,38.4 39,34 39,28.7 C39,23.3 43.4,19 48.7,19 C54.1,19 58.4,23.4 58.4,28.7 C58.4,34.1 54,38.4 48.7,38.4 L48.7,38.4 Z"
                id="Shape"
              />
              <path
                d="M114.6,13.6 C110.9,13.6 107.5,14.9 104.9,17.1 L104.9,15.8 C104.9,14.7 104,13.8 102.9,13.8 L101.4,13.8 C100.3,13.8 99.4,14.7 99.4,15.8 L99.4,42.1 C99.4,42.9 100.1,43.6 100.9,43.6 L103.4,43.6 C104.2,43.6 104.9,42.9 104.9,42.1 L104.9,29.6 C104.9,24.2 109.3,19 114.6,19 C118.1,19 124.3,20.9 124.3,29.6 L124.3,42.1 C124.3,42.9 125,43.6 125.8,43.6 L128.3,43.6 C129.1,43.6 129.8,42.9 129.8,42.1 L129.8,29.5 C129.8,16.3 119.4,13.6 114.6,13.6 L114.6,13.6 Z"
                id="Shape"
              />
              <path
                d="M96.2,25.5 L96.2,25.5 C94.7,18.4 88.2,13.2 80.6,13.6 C73,14 66.8,20 66.3,27.6 C65.7,36.5 72.7,43.9 81.4,43.9 C87.3,43.9 92.4,40.6 94.9,35.7 C95.3,35 94.8,34.1 94,33.9 L91,33.3 C90.5,33.2 90,33.4 89.7,33.9 C88,36.6 84.9,38.5 81.5,38.5 C78.5,38.5 75.8,37.1 74,35 L91.2,27.8 L96.2,25.5 L96.2,25.5 Z M71.8,29.9 C71.8,29.5 71.7,29.1 71.7,28.7 C71.7,23.3 76.1,19 81.4,19 C84.4,19 87.2,20.4 88.9,22.6 L71.8,29.9 L71.8,29.9 Z"
                id="Shape"
              />
              <path
                d="M15.3,13.4 C6.9,13.4 0.1,20.2 0.1,28.6 C0.1,37 6.9,43.8 15.3,43.8 C23.7,43.8 30.5,37 30.5,28.6 C30.5,20.2 23.7,13.4 15.3,13.4 L15.3,13.4 Z M15.3,38.3 C9.9,38.3 5.6,33.9 5.6,28.6 C5.6,23.2 10,18.9 15.3,18.9 C20.7,18.9 25,23.3 25,28.6 C25.1,33.9 20.7,38.3 15.3,38.3 L15.3,38.3 Z"
                id="Shape"
              />
              <path
                d="M196.7,13.3 C188.3,13.3 181.5,20.1 181.5,28.5 C181.5,36.9 188.3,43.7 196.7,43.7 C205.1,43.7 211.9,36.9 211.9,28.5 C211.9,20.1 205.1,13.3 196.7,13.3 L196.7,13.3 Z M196.7,38.2 C191.3,38.2 187,33.8 187,28.5 C187,23.1 191.4,18.8 196.7,18.8 C202.1,18.8 206.4,23.2 206.4,28.5 C206.4,33.8 202.1,38.2 196.7,38.2 L196.7,38.2 Z"
                id="Shape"
              />
              <path
                d="M328.6,4.3 L325.5,4.3 C324.8,4.3 324.3,4.8 324.3,5.5 L324.3,8.6 C324.3,9.3 324.8,9.8 325.5,9.8 L328.6,9.8 C329.3,9.8 329.8,9.3 329.8,8.6 L329.8,5.5 C329.8,4.8 329.2,4.3 328.6,4.3 L328.6,4.3 Z"
                id="Shape"
              />
              <path
                d="M392.5,33.7 L388.9,33 C388.5,32.9 388.1,33.1 387.9,33.5 C386.2,36.3 383.1,38.2 379.6,38.2 C376.6,38.2 373.9,36.8 372.1,34.7 L389.3,27.5 L394.5,25.3 L394.5,25.3 C393,18.2 386.5,13 378.9,13.4 C371.3,13.8 365.1,19.9 364.6,27.5 C364,36.4 371,43.8 379.7,43.8 C385.7,43.8 390.9,40.3 393.3,35.3 C393.5,34.5 393.1,33.8 392.5,33.7 L392.5,33.7 Z M369.8,28.4 C369.8,23 374.2,18.7 379.5,18.7 C382.5,18.7 385.3,20.1 387,22.3 L369.8,29.6 L369.8,28.4 L369.8,28.4 Z"
                id="Shape"
              />
              <path
                d="M270,25.2 L270,25.2 C268.5,18.1 262,12.9 254.4,13.3 C246.8,13.7 240.6,19.8 240.1,27.4 C239.5,36.3 246.5,43.7 255.2,43.7 C261.2,43.7 266.4,40.2 268.9,35.1 C269.2,34.5 268.8,33.8 268.2,33.7 L264.6,33 C264.2,32.9 263.8,33.1 263.6,33.5 C261.9,36.3 258.8,38.2 255.3,38.2 C252.3,38.2 249.6,36.8 247.8,34.7 L265,27.5 L270,25.2 L270,25.2 Z M245.5,29.6 C245.5,29.2 245.4,28.8 245.4,28.4 C245.4,23 249.8,18.7 255.1,18.7 C258.1,18.7 260.9,20.1 262.6,22.3 L245.5,29.6 L245.5,29.6 Z"
                id="Shape"
              />
              <path
                d="M221.2,0.7 L217.6,0.7 C217.1,0.7 216.7,1.1 216.7,1.6 L216.7,42.3 C216.7,42.8 217.1,43.3 217.7,43.3 L221.2,43.3 C221.7,43.3 222.2,42.9 222.2,42.3 L222.2,1.6 C222.2,1.1 221.7,0.7 221.2,0.7 L221.2,0.7 Z"
                id="Shape"
              />
              <path
                d="M233.5,0.7 L229.9,0.7 C229.4,0.7 229,1.1 229,1.6 L229,42.3 C229,42.8 229.4,43.3 230,43.3 L233.5,43.3 C234,43.3 234.5,42.9 234.5,42.3 L234.5,1.6 C234.4,1.1 234,0.7 233.5,0.7 L233.5,0.7 Z"
                id="Shape"
              />
              <path
                d="M328.6,13.4 L325.5,13.4 C324.8,13.4 324.3,13.9 324.3,14.6 L324.3,42.2 C324.3,42.9 324.8,43.4 325.5,43.4 L328.6,43.4 C329.3,43.4 329.8,42.9 329.8,42.2 L329.8,14.5 C329.8,13.9 329.2,13.4 328.6,13.4 L328.6,13.4 Z"
                id="Shape"
              />
              <path
                d="M318.4,13.4 L314.5,13.4 C314.1,13.4 313.7,13 313.7,12.6 L313.7,1.5 C313.7,1.1 313.3,0.7 312.9,0.7 L309,0.7 C308.6,0.7 308.2,1.1 308.2,1.5 L308.2,12.6 C308.2,13 307.8,13.4 307.4,13.4 L303.5,13.4 C303.1,13.4 302.7,13.8 302.7,14.2 L302.7,18 C302.7,18.4 303.1,18.8 303.5,18.8 L307.4,18.8 C307.8,18.8 308.2,19.2 308.2,19.6 L308.2,42.3 C308.2,42.9 308.7,43.3 309.2,43.3 L312.6,43.3 C313.2,43.3 313.6,42.8 313.6,42.3 L313.6,19.6 C313.6,19.2 314,18.8 314.4,18.8 L318.3,18.8 C318.7,18.8 319.1,18.4 319.1,18 L319.1,14.1 C319.2,13.7 318.9,13.4 318.4,13.4 L318.4,13.4 Z"
                id="Shape"
              />
              <path
                d="M296.8,35.5 C296.4,35.1 295.7,35.1 295.3,35.5 C293.5,37.2 291.2,38.2 288.5,38.2 C282.8,38.2 278.2,33.2 278.8,27.4 C279.3,22.9 283,19.3 287.5,18.8 C290.3,18.5 293,19.5 294.9,21.2 C295.5,21.7 296.4,21.7 297,21.1 L298.7,19.4 C299.3,18.8 299.3,17.8 298.7,17.2 C295.8,14.5 291.8,13 287.5,13.3 C279.8,13.8 273.6,20.2 273.3,28 C273,36.6 279.9,43.6 288.5,43.6 C292.6,43.6 296.4,42 299.1,39.3 C299.5,38.9 299.5,38.2 299.1,37.8 L296.8,35.5 L296.8,35.5 Z"
                id="Shape"
              />
              <path
                d="M177.1,35.5 C176.7,35.1 176,35.1 175.6,35.5 C173.8,37.2 171.5,38.2 168.8,38.2 C163.1,38.2 158.5,33.2 159.1,27.4 C159.6,22.9 163.3,19.3 167.8,18.8 C170.6,18.5 173.3,19.5 175.2,21.2 C175.8,21.7 176.7,21.7 177.3,21.1 L179,19.4 C179.6,18.8 179.6,17.8 179,17.2 C176.1,14.5 172.1,13 167.8,13.3 C160.1,13.8 153.9,20.2 153.6,28 C153.3,36.6 160.2,43.6 168.8,43.6 C172.9,43.6 176.7,42 179.4,39.3 C179.8,38.9 179.8,38.2 179.4,37.8 L177.1,35.5 L177.1,35.5 Z"
                id="Shape"
              />
              <path
                d="M362,13.7 L357.1,13.7 C357,13.7 356.9,13.8 356.9,13.9 L348.9,37.4 C348.8,37.6 348.5,37.6 348.5,37.4 L340.5,13.9 C340.5,13.8 340.4,13.7 340.3,13.7 L335.4,13.7 C335.2,13.7 335.1,13.9 335.2,14 L345.1,43.1 C345.1,43.2 345.2,43.3 345.3,43.3 L352.1,43.3 C352.2,43.3 352.3,43.2 352.3,43.1 L362.2,14 C362.3,13.9 362.2,13.7 362,13.7 L362,13.7 Z"
                id="Shape"
              />
            </g>
          </g>
        </g>
      </svg>

      <span
        class="mx-auto flex flex-row items-center gap-2 text-4xl font-bold tracking-wide text-neutral-700"
        ><Icon src={Github} theme="solid" size="34" /> Sponsors</span
      >
    </div>
  </div>
</div>
