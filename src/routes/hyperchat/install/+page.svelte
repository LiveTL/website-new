<script lang="ts">
  import type { PageData } from './$types';

  import hyperChatLogo from '$lib/assets/hyperchat/logo.png';

  const downloadLinks = {
    chrome:
      'https://chrome.google.com/webstore/detail/hyperchat-optimized-youtu/naipgebhooiiccifflecbffmnjbabdbh',
    firefox: 'https://addons.mozilla.org/en-US/firefox/addon/hyperchat/',
  };

  import { Icon } from '@steeze-ui/svelte-icon';
  import { Googlechrome, Firefoxbrowser } from '@steeze-ui/simple-icons';

  export let data: PageData;
</script>

<div class="container mx-auto">
  <div class="max-w-3xl mx-auto px-8">
    <img
      src={hyperChatLogo}
      alt="LiveTL Logo"
      class="mx-auto w-48 rounded-2xl"
    />
    <h1 class="text-4xl font-bold my-6 text-center">
      Install <span
        class="bg-clip-text text-transparent bg-gradient-to-tr from-primary to-red-300"
        >HyperChat</span
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
        />
        Download for Firefox</a
      >
    </div>

    <div class="text-base mx-auto text-center space-y-8 mt-8 mb-80">
        <p>
          This software is available under a <a
            href="https://choosealicense.com/licenses/agpl-3.0/"
            class="link link-secondary">AGPL-3.0</a
          > license.
        </p>
        <p>
          Source code is available on <a
            href="https://github.com/LiveTL/HyperChat"
            class="link link-secondary">Github</a
          >.
        </p>
      </div>
  </div>
</div>
