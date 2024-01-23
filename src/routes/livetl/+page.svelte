<script lang="ts">
  import { t } from '$lib/translation';

  import LiveTLPekoKiaraShowcaseDesktop from '$lib/assets/livetl/pekokiara-showcase-desktop.png?enhanced';

  import Opinions from '$lib/components/Opinions.svelte';
  import XTestimonials from '$lib/components/XTestimonials.svelte';
  import Reviews from '$lib/components/Reviews.svelte';
  import CustomisablesHero from '$lib/components/CustomisablesHero.svelte';
  import Donations from '$lib/components/Donations.svelte';

  const tabsContent = [
    { id: 1, content: XTestimonials, title: 'X' },
    { id: 2, content: Reviews, title: $t('livetl.testimonials.reviews') },
  ];

  const customisables = [
    {
      title: $t('livetl.customisables.filters.title'),
      description: $t('livetl.customisables.filters.description'),
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
</svg>`,
    },
    {
      title: $t('livetl.customisables.read_aloud.title'),
      description: $t('livetl.customisables.read_aloud.description'),
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5">
  <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z" />
  <path d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z" />
</svg>
`,
    },
    {
      title: $t('livetl.customisables.layouts.title'),
      description: $t('livetl.customisables.layouts.description'),
      icon: `<svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-5">
              <path d="M9 2H6V13H9V2ZM10 2V13H12.5C12.7761 13 13 12.7761 13 12.5V2.5C13 2.22386 12.7761 2 12.5 2H10ZM2.5 2H5V13H2.5C2.22386 13 2 12.7761 2 12.5V2.5C2 2.22386 2.22386 2 2.5 2ZM2.5 1C1.67157 1 1 1.67157 1 2.5V12.5C1 13.3284 1.67157 14 2.5 14H12.5C13.3284 14 14 13.3284 14 12.5V2.5C14 1.67157 13.3284 1 12.5 1H2.5Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
            </svg>`,
    },
    {
      title: $t('livetl.customisables.shortcuts.title'),
      description: $t('livetl.customisables.shortcuts.description'),
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
      title: $t('livetl.customisables.chat_improvements.title'),
      description: $t('livetl.customisables.chat_improvements.description'),
      icon: `<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 3L2.5 3.00002C1.67157 3.00002 1 3.6716 1 4.50002V9.50003C1 10.3285 1.67157 11 2.5 11H7.50003C7.63264 11 7.75982 11.0527 7.85358 11.1465L10 13.2929V11.5C10 11.2239 10.2239 11 10.5 11H12.5C13.3284 11 14 10.3285 14 9.50003V4.5C14 3.67157 13.3284 3 12.5 3ZM2.49999 2.00002L12.5 2C13.8807 2 15 3.11929 15 4.5V9.50003C15 10.8807 13.8807 12 12.5 12H11V14.5C11 14.7022 10.8782 14.8845 10.6913 14.9619C10.5045 15.0393 10.2894 14.9965 10.1464 14.8536L7.29292 12H2.5C1.11929 12 0 10.8807 0 9.50003V4.50002C0 3.11931 1.11928 2.00003 2.49999 2.00002Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" data-darkreader-inline-fill="" style="--darkreader-inline-fill: currentColor;"></path></svg>`,
    },
    {
      title: $t('livetl.customisables.export_import.title'),
      description: $t('livetl.customisables.export_import.description'),
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
`,
    },
  ];
</script>

<div
  class="hero min-h-[60vh] snap-start bg-gradient-to-tr from-info to-accent bg-scroll"
>
  <div class="hero-content text-center">
    <div class="max-w-md">
      <h1 class="text-6xl font-bold text-base-200">LiveTL</h1>

      <p class="py-6 text-xl text-base-100">
        {$t('livetl.home.text')}
      </p>
      <div class="space-x-1">
        <a
          class="btn btn-primary rounded-xl font-semibold text-base-100"
          href="/livetl/install">{$t('common.install')}</a
        >
        <a
          class="btn btn-outline btn-secondary rounded-xl font-semibold"
          href="/livetl/about">{$t('common.manual')}</a
        >
      </div>
    </div>
  </div>
</div>

<div class="hero h-[75vh] snap-start bg-transparent">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <enhanced:img
      src={LiveTLPekoKiaraShowcaseDesktop}
      alt="LiveTL Chat demo in dedicated window."
      class="w-full shadow-2xl sm:max-w-2xl md:max-w-3xl xl:max-w-4xl"
    />
    <div>
      <h1 class="text-5xl font-bold text-secondary">
        {$t('livetl.home.showcase.title')}
      </h1>
      <p class="py-6">
        {@html $t('livetl.home.showcase.text')}
      </p>
    </div>
  </div>
</div>

<CustomisablesHero
  {customisables}
  titleText={$t('common.customisable')}
  subtitleText={$t('livetl.customisables.subtitle')}
/>

<div class="hero min-h-screen snap-start bg-transparent">
  <div class="hero-content">
    <div class="space-y-8">
      <Opinions {tabsContent} title={$t('livetl.testimonials.title')} />
    </div>
  </div>
</div>

<Donations />
