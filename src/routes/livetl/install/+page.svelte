<script lang="ts">
  import type { PageData } from './$types';

  const downloadLinks = {
    chrome:
      'https://chrome.google.com/webstore/detail/livetl-translation-filter/moicohcfhhbmmngneghfjfjpdobmmnlg',
    firefox: 'https://addons.mozilla.org/en-US/firefox/addon/livetl/',
    android: 'https://play.google.com/store/apps/details?id=com.livetl.android',
    ios: 'https://apps.apple.com/us/app/livetl/id1550420049',
  };

  import { Icon } from '@steeze-ui/svelte-icon';
  import {
    Appstore,
    Googleplay,
    Googlechrome,
    Firefoxbrowser,
  } from '@steeze-ui/simple-icons';

  export let data: PageData;
</script>

<div class="container mx-auto">
  <div class="max-w-3xl mx-auto px-8">
    <h1 class="text-4xl font-bold mb-4 text-center">
      Install <span
        class="bg-clip-text text-transparent bg-gradient-to-tr from-info to-accent"
        >LiveTL</span
      >
    </h1>
    <div
      class="flex flex-col space-y-4 sm:space-y-0 sm:flex-row justify-center py-4"
    >
      <a
        href={downloadLinks['chrome']}
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn-primary rounded-full mr-4"
      >
        <Icon
          src={Googlechrome}
          theme="solid"
          size="18"
          class="justify-end mr-2"
        />
        Download for Chrome</a
      >
      <a
        href={downloadLinks['firefox']}
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn-secondary rounded-full"
        ><Icon
          src={Firefoxbrowser}
          theme="solid"
          size="18"
          class="justify-end mr-2"
        />Download for Firefox</a
      >
    </div>

    <h2 class="text-2xl font-bold my-4 text-center">More install options</h2>
    <div
      class="flex flex-col space-y-4 sm:space-y-0 sm:flex-row justify-center py-4"
    >
      <a
        href={downloadLinks['android']}
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn-neutral rounded-full text-slate-50 mr-4 max-w-xs"
        ><Icon
          src={Googleplay}
          theme="solid"
          size="18"
          class="justify-end mr-2"
        />Google Play</a
      >
      <a
        href={downloadLinks['ios']}
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn-neutral rounded-full text-slate-50 max-w-xs"
        ><Icon
          src={Appstore}
          theme="solid"
          size="18"
          class="justify-end mr-2"
        />App Store</a
      >
    </div>
    <div class="text-base mx-auto text-center space-y-8 mt-8">
      <p>
        This software is available under a <a
          href="https://choosealicense.com/licenses/agpl-3.0/"
          class="link link-secondary">AGPL-3.0</a
        > license.
      </p>
      <p>
        Source code is available on <a
          href="https://github.com/LiveTL/LiveTL"
          class="link link-secondary">Github</a
        >.
      </p>
    </div>
  </div>
</div>
