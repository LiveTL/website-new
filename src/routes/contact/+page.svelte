<script lang="ts">
  import type { PageData } from './$types';
  import { DISCORD_SERVER_URL } from '../../const';

  export let data: PageData;
</script>

<div class="container mx-auto px-4 py-12 sm:px-8">
  <div class="mx-auto mb-8 max-w-lg">
    <h1 class="mb-8 text-5xl font-bold">Contact Us</h1>
    <p class="text-lg">
      Please make sure you read the <a href="/faq" class="link-secondary link"
        >FAQ</a
      >
      before asking for support or reporting issues! The primary and easiest way
      to get in contact with us is on our
      <a href={DISCORD_SERVER_URL} class="link-secondary link">Discord Server</a
      >. You can find all our source code on GitHub.
    </p>
  </div>
</div>
