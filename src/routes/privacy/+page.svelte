<script lang="ts">
  import { t } from '$lib/translation';

  const privacyPolicy = [
    {
      header: $t('privacy.personal_data.title'),
      text: $t('privacy.personal_data.text'),
    },
    {
      header: $t('privacy.third_party.title'),
      text: $t('privacy.third_party.text'),
    },
    {
      header: $t('privacy.translator_data.title'),
      text: $t('privacy.translator_data.text'),
    },
  ];
</script>

<div class="container mx-auto">
  <div class="container mx-auto px-8">
    <h1 class="mb-8 text-4xl font-bold">{$t('privacy.title')}</h1>

    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
      {#each privacyPolicy as { header, text }}
        <div class="col-span-1 space-y-2 md:col-span-2">
          <h3 class="mb-2 text-2xl font-bold">{header}</h3>
          <p class="mb-4">{@html text}</p>
        </div>
      {/each}
    </div>

    <br class="my-8" />

    <div class="col-span-1 md:col-span-2">
      <span>Last Updated: January 25th, 2021</span>
    </div>
  </div>
</div>
