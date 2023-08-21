<script lang="ts">
  import type { PageData } from './$types';

  import Contributors from '$lib/components/Contributors.svelte';

  import { t } from '$lib/translation';

  export let data: PageData;

  const { contributors } = data;
</script>

<div class="container mx-auto px-4 py-12 sm:px-8">
  <div class="mx-auto mb-8 max-w-lg">
    <h1 class="mb-8 text-5xl font-bold">About LiveTL</h1>
    <p class="text-lg">
      <b>LiveTL</b>
      {$t('about.livetl_desc1')}
    </p>
  </div>

  <div class="mx-auto max-w-lg">
    <p class="text-lg">
      {@html $t('about.livetl_desc2')}
    </p>
  </div>

  <div class="mx-auto mt-8 max-w-lg">
    <p class="text-lg">
      {@html $t('about.livetl_desc3')}
    </p>
  </div>

  <div class="mx-auto max-w-lg">
    <h2 class="my-8 text-4xl font-bold">Team</h2>
    <p class="text-lg">
      {$t('about.team_desc')}
    </p>
    <Contributors {contributors} />
  </div>
</div>
