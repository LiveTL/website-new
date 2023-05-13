<script lang="ts">
  import type { PageData } from './$types';
  import { DISCORD_SERVER_URL } from '../../const';

  export let data: PageData;
</script>

<div class="container mx-auto px-4 sm:px-8 py-12">
  <div class="max-w-lg mx-auto mb-8">
    <h1 class="text-5xl font-bold mb-8">Contact Us</h1>
    <p class="text-lg">
      Please make sure you read the <a href="/faq" class="link link-secondary"
        >FAQ</a
      >
      before asking for support or reporting issues! The primary and easiest way
      to get in contact with us is on our
      <a href={DISCORD_SERVER_URL} class="link link-secondary">Discord Server</a
      >. You can find all our source code on GitHub.
    </p>
  </div>
</div>
