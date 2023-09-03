<script lang="ts">
  import { t } from '$lib/translation';
</script>

<div class="container mx-auto py-8">
  <div class="mx-auto max-w-3xl px-8">
    <h1 class="mb-4 text-4xl font-bold">{$t('common.about')}</h1>
    <p class="mb-6 text-gray-700">
      {@html $t('livetl.about.text')}
    </p>
    <h2 class="mb-4 text-2xl font-bold">{$t('common.features')}</h2>
    {@html $t('livetl.about.features.text')}

    <h2 class="my-4 text-2xl font-bold">{$t('common.install')}</h2>
    <a class="link link-primary my-4 text-xl" href="/livetl/install"
      >{$t('livetl.download_links.text')}</a
    >
    <ol class="mt-4 list-inside list-decimal">
      {#each $t('livetl.download_links.steps') as step}
        <li>
          {Object.keys(step)
            .sort((a, b) => parseInt(a) - parseInt(b))
            .reduce((acc, key) => acc + step[key], '')}
        </li>
      {/each}
    </ol>
  </div>
</div>
