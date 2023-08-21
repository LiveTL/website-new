<script lang="ts">
  import { t } from '$lib/translation';
</script>

<div class="container mx-auto">
  <div class="container mx-auto px-8">
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
      <div class="col-span-1 md:col-span-2">
        <h1 class="mb-8 text-4xl font-bold">{$t('faq.title')}</h1>
      </div>
      <div class="col-span-1 md:col-span-2">
        <h3 class="mb-4 text-2xl font-bold">
          {$t('faq.how_does_livetl_work.title')}
        </h3>
        <p>
          {@html $t('faq.how_does_livetl_work.text')}
        </p>
      </div>
      <div class="col-span-1 md:col-span-2">
        <h3 class="mb-4 text-2xl font-bold">
          {$t('faq.livetl_not_loading.title')}
        </h3>
        <p>
          {$t('faq.livetl_not_loading.text')}
        </p>
      </div>
      <div class="col-span-1 md:col-span-2">
        <h3 class="mb-4 text-2xl font-bold">
          {$t('faq.no_translations.title')}
        </h3>
        <p>
          {@html $t('faq.no_translations.text')}
        </p>
      </div>
      <div class="col-span-1 md:col-span-2">
        <h3 class="mb-4 text-2xl font-bold">
          {$t('faq.translator_own_tags.title')}
        </h3>
        <p>
          {$t('faq.translator_own_tags.text')}
        </p>
      </div>
    </div>
  </div>
</div>
