<script lang="ts">
  import { t } from '$lib/translation';
</script>

<div
  class="mx-auto grid max-w-xs grid-cols-1 gap-8 sm:px-8 md:max-w-lg md:grid-cols-2 md:gap-10 lg:max-w-xl"
>
  <div class="col-span-1 md:col-span-2">
    <h1 class="text-4xl font-bold">{$t('faq.title')}</h1>
  </div>

  <div class="col-span-1 space-y-4 md:col-span-2">
    <h3 class="text-2xl font-bold">
      {$t('faq.how_does_livetl_work.title')}
    </h3>
    <p>
      {@html $t('faq.how_does_livetl_work.text')}
    </p>
  </div>
  <div class="col-span-1 space-y-4 md:col-span-2">
    <h3 class="text-2xl font-bold">
      {$t('faq.livetl_not_loading.title')}
    </h3>
    <p>
      {$t('faq.livetl_not_loading.text')}
    </p>
  </div>
  <div class="col-span-1 space-y-4 md:col-span-2">
    <h3 class="text-2xl font-bold">
      {$t('faq.no_translations.title')}
    </h3>
    <p>
      {@html $t('faq.no_translations.text')}
    </p>
  </div>
  <div class="col-span-1 space-y-4 md:col-span-2">
    <h3 class="text-2xl font-bold">
      {$t('faq.translator_own_tags.title')}
    </h3>
    <p>
      {$t('faq.translator_own_tags.text')}
    </p>
  </div>
</div>
