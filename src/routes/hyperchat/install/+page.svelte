<script lang="ts">
  import hyperChatLogo from '$lib/assets/hyperchat/logo.png?enhanced';

  const downloadLinks = {
    chrome:
      'https://chrome.google.com/webstore/detail/hyperchat-optimized-youtu/naipgebhooiiccifflecbffmnjbabdbh',
    firefox: 'https://addons.mozilla.org/en-US/firefox/addon/hyperchat/',
  };

  import { Icon } from '@steeze-ui/svelte-icon';
  import { Googlechrome, Firefoxbrowser } from '@steeze-ui/simple-icons';
</script>

<div class="container mx-auto">
  <div class="mx-auto max-w-3xl px-8">
    <enhanced:img
      src={hyperChatLogo}
      alt="LiveTL Logo"
      class="mx-auto w-48 rounded-2xl"
    />
    <h1 class="my-6 text-center text-4xl font-bold">
      Install <span
        class="bg-gradient-to-tr from-primary to-red-300 bg-clip-text text-transparent"
        >HyperChat</span
      >
    </h1>
    <div
      class="flex flex-col justify-center space-y-4 py-4 sm:flex-row sm:space-y-0"
    >
      <a
        href={downloadLinks['chrome']}
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn-primary mr-4 rounded-full"
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
        class="btn btn-secondary rounded-full"
        ><Icon
          src={Firefoxbrowser}
          theme="solid"
          size="18"
          class="mr-2 justify-end"
        />
        Download for Firefox</a
      >
    </div>

    <div class="mx-auto mb-80 mt-8 space-y-8 text-center text-base">
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
