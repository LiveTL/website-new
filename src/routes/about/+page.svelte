<script lang="ts">
  import type { PageData } from './$types';

  import Contributors from '$lib/components/Contributors.svelte';

  import { t } from '$lib/translation';

  export let data: PageData;

  const { contributors } = data;
</script>

<div
  class="container mx-auto max-w-xs space-y-8 px-4 py-12 sm:px-8 md:max-w-lg lg:max-w-xl"
>
  <section class="mx-auto space-y-8">
    <h1 class="text-5xl font-bold">About LiveTL</h1>
    <p class="text-lg">
      <b>LiveTL</b>
      {$t('about.livetl_desc1')}
    </p>
    <p class="text-lg">
      {@html $t('about.livetl_desc2')}
    </p>
    <p class="text-lg">
      {@html $t('about.livetl_desc3')}
    </p>
  </section>

  <div class="mx-auto max-w-lg space-y-4">
    <h2 class="text-4xl font-bold">Team</h2>
    <p class="text-lg">
      {$t('about.team_desc')}
    </p>
    <Contributors {contributors} randomize />
  </div>
</div>
