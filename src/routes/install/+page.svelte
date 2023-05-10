<script lang="ts">
  import type { PageData } from './$types';

  const downloadLinks = {
    chrome:
      'https://chrome.google.com/webstore/detail/livetl-translation-filter/moicohcfhhbmmngneghfjfjpdobmmnlg',
    firefox: 'https://addons.mozilla.org/en-US/firefox/addon/livetl/',
  };

  import { Icon } from '@steeze-ui/svelte-icon';
  import { Googlechrome, Firefoxbrowser } from '@steeze-ui/simple-icons';

  export let data: PageData;
</script>

<div class="container mx-auto my-10">
  <div class="max-w-3xl mx-auto px-8">
    <h1 class="text-4xl font-bold mb-4">LiveTL</h1>
    <p class="text-gray-700 mb-6">
      LiveTL (Live TransLate) is a browser extension that separates translations
      from regular chat messages in YouTube and Twitch streams.
    </p>
    <h2 class="text-2xl font-bold mb-4">Features</h2>
    <ul class="list-disc list-inside mb-6">
      <li>
        Filter translations for your language (messages tagged with [en], es -,
        etc.)
      </li>
      <li>Select your favorite translators</li>
      <li>Ban spammers polluting translations</li>
      <li>Freely resizable chat, translation panel, and stream</li>
      <li>Optimized YouTube chat with HyperChat</li>
      <li>Archived stream (VOD) support</li>
      <li>Custom user/mod filters</li>
    </ul>
    <h2 class="text-2xl font-bold mb-4">System Requirements</h2>
    <ul class="list-disc list-inside mb-6">
      <li>Chrome or Chromium-based browser</li>
      <li>Firefox Browser</li>
      <li>Android</li>
      <li>iOS Device</li>
    </ul>
    <div class="flex flex-col space-y-2 sm:space-y-0 sm:flex-row justify-center">
      <a
        href={downloadLinks['chrome']}
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn-primary rounded-2xl mr-4"
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
        class="btn btn-secondary rounded-2xl"
        ><Icon
          src={Firefoxbrowser}
          theme="solid"
          size="18"
          class="justify-end mr-2"
        />Download for Firefox</a
      >
    </div>
    <h2 class="text-2xl font-bold my-4">Installation Instructions</h2>
    <ol class="list-decimal list-inside">
      <li>
        Click the download link for your browser to open the extension page in
        the appropriate web store.
      </li>
      <li>
        Click the "Add to Chrome" or "Add to Firefox" button to install the
        extension.
      </li>
      <li>
        Once the installation is complete, click the LiveTL icon in your
        browser's toolbar to open the extension.
      </li>
      <li>
        Configure your language and translation preferences in the extension
        settings.
      </li>
      <li>Visit a YouTube or Twitch stream and start using LiveTL!</li>
    </ol>
  </div>
</div>
