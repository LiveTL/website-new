<script lang="ts">
  import { t } from '$lib/translation';
</script>

<svelte:head>
  <title>LiveTL - About Extension</title>
  <meta name="description" content={$t('livetl.about.description')} />
</svelte:head>

<div class="container mx-auto min-h-[80vh] py-8">
  <div class="mx-auto max-w-xs space-y-8 md:max-w-lg lg:max-w-xl">
    <section id="about" class="space-y-2">
      <h1 class="text-4xl font-bold">{$t('common.about')}</h1>
      <p class="mb-6 text-gray-700">
        {@html $t('livetl.about.text')}
      </p>
    </section>

    <section id="features" class="space-y-2">
      <h2 class="text-2xl font-bold">{$t('common.features')}</h2>
      {@html $t('livetl.about.features.text')}
    </section>

    <section id="install" class="space-y-2">
      <h2 class="text-2xl font-bold">{$t('common.install')}</h2>
      <a class="link link-primary text-xl" href="/livetl/install"
        >{$t('livetl.download_links.text')}</a
      >
      <ol class="list-inside list-decimal">
        {#each $t('livetl.download_links.steps') as step}
          <li>
            {Object.keys(step)
              .sort((a, b) => parseInt(a) - parseInt(b))
              .reduce((acc, key) => acc + step[key], '')}
          </li>
        {/each}
      </ol>
    </section>
  </div>
</div>
