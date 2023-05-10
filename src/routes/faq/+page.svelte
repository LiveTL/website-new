<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<div class="container mx-auto my-10">
  <div class="container mx-auto px-8">
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
      <div class="col-span-1 md:col-span-2">
        <h1 class="text-4xl font-bold mb-8">Frequently Asked Questions</h1>
      </div>
      <div class="col-span-1 md:col-span-2">
        <h3 class="text-2xl font-bold mb-4">How does LiveTL work?</h3>
        <p>
          LiveTL is, at its core, just a <i
            ><b>chat filter for YouTube streams</b></i
          >.
          <b class="text-red-600"
            >LiveTL does not automatically translate streams</b
          > – instead, it picks up translations found in the chat. This helps foreign
          viewers better catch translations that other viewers are providing in the
          YouTube Live Chat.
        </p>
      </div>
      <div class="col-span-1 md:col-span-2">
        <h3 class="text-2xl font-bold mb-4">
          I opened my stream with LiveTL but it isn’t loading?
        </h3>
        <p>
          The chat may be temporarily unavailable. LiveTL will only load if the
          stream has a valid Live Chat or Chat Replay.
        </p>
      </div>
      <div class="col-span-1 md:col-span-2">
        <h3 class="text-2xl font-bold mb-4">
          I don’t see any translations in the translations panel?
        </h3>
        <p>
          If there are no translators in chat, LiveTL is unable to display
          translations. Any messages properly tagged with a language code (ex. <code
            >[en] &lt;translation&gt;</code
          >, <code>ESP: &lt;translation&gt;</code>, etc.) will appear when they
          appear in chat.
        </p>
      </div>
      <div class="col-span-1 md:col-span-2">
        <h3 class="text-2xl font-bold mb-4">
          A translator is using their own style of language tags, how do I make
          them show?
        </h3>
        <p>
          You can manually select additional users to filter in the settings.
        </p>
      </div>
    </div>
  </div>
</div>
