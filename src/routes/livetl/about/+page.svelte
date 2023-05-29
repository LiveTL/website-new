<script lang="ts">
  import type { PageData } from '../$types';

  export let data: PageData;
</script>

<div class="container mx-auto">
  <div class="mx-auto max-w-3xl px-8">
    <h1 class="mb-4 text-4xl font-bold">About</h1>
    <p class="mb-6 text-gray-700">
      <b>LiveTL (Live TransLate)</b> is a browser extension that separates translations
      from regular chat messages in YouTube and Twitch streams.
    </p>
    <h2 class="mb-4 text-2xl font-bold">Features</h2>
    <ul class="mb-6 list-inside list-disc">
      <li>
        <b>Filter translations</b> for your language (messages tagged with [en],
        es -, etc.)
      </li>
      <li>Select your <b>favorite translators</b></li>
      <li><b>Ban spammers</b> polluting translations</li>
      <li>Freely resizable chat, translation panel, and stream</li>
      <li>
        Optimized YouTube chat with <a
          href="/hyperchat"
          class="link-secondary link">HyperChat</a
        >
      </li>
      <li><b>Archived stream (VOD)</b> support</li>
      <li>Custom user/mod <b>filters</b></li>
    </ul>
    <h2 class="mb-4 text-2xl font-bold">System Requirements</h2>
    <ul class="mb-6 list-inside list-disc">
      <li>Chrome <i>or</i> Chromium-based browser</li>
      <li>Firefox Browser</li>
      <li>Android</li>
      <li>iOS Device</li>
    </ul>

    <h2 class="my-4 text-2xl font-bold">Install</h2>
    <a class="link-primary link my-4 text-xl" href="/livetl/install"
      >Download Links</a
    >
    <ol class="mt-4 list-inside list-decimal">
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
