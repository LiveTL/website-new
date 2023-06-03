<script lang="ts">
  import type { PageData } from './$types';

  import LiveTLLogoBig from '$lib/assets/livetl/logo-big.png';

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
  <div class="mx-auto max-w-3xl px-8">
    <img
      src={LiveTLLogoBig}
      alt="LiveTL Logo"
      class="mx-auto my-8 w-48 rounded-2xl shadow-2xl shadow-info"
    />
    <h1 class="mb-4 text-center text-4xl font-bold">
      Install <span
        class="bg-gradient-to-tr from-info to-accent bg-clip-text text-transparent"
        >LiveTL</span
      >
    </h1>
    <div
      class="flex flex-col justify-center space-y-4 py-4 sm:flex-row sm:space-y-0"
    >
      <a
        href={downloadLinks['chrome']}
        target="_blank"
        rel="noopener noreferrer"
        class="btn-primary btn mr-4 rounded-full text-base-100"
      >
        <Icon
          src={Googlechrome}
          theme="solid"
          size="18"
          class="mr-2 justify-end"
        />
        Download for Chrome</a
      >
      <a
        href={downloadLinks['firefox']}
        target="_blank"
        rel="noopener noreferrer"
        class="btn-secondary btn rounded-full text-base-100"
        ><Icon
          src={Firefoxbrowser}
          theme="solid"
          size="18"
          class="mr-2 justify-end"
        />Download for Firefox</a
      >
    </div>

    <h2 class="my-4 text-center text-2xl font-bold">More install options</h2>
    <div
      class="flex flex-col justify-center space-y-4 py-4 sm:flex-row sm:space-y-0"
    >
      <a
        href={downloadLinks['android']}
        target="_blank"
        rel="noopener noreferrer"
        class="btn mr-4 max-w-xs rounded-full text-base-100"
        ><Icon
          src={Googleplay}
          theme="solid"
          size="18"
          class="mr-2 justify-end"
        />Google Play</a
      >
    </div>
    <div class="mx-auto mt-8 space-y-8 text-center text-base">
      <p>
        This software is available under a <a
          href="https://choosealicense.com/licenses/agpl-3.0/"
          class="link-secondary link">AGPL-3.0</a
        > license.
      </p>
      <p>
        Source code is available on <a
          href="https://github.com/LiveTL/LiveTL"
          class="link-secondary link">Github</a
        >.
      </p>
    </div>
  </div>
</div>
