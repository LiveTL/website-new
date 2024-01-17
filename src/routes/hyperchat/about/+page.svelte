<script lang="ts">
  import { t } from '$lib/translation';
</script>

<div class="container mx-auto min-h-[80vh] py-8">
  <div class="mx-auto max-w-3xl px-8">
    <h1 class="mb-4 text-4xl font-bold">{$t('common.about')}</h1>
    <p class="mb-6 text-gray-700">
      {@html $t('hyperchat.about.text')}
    </p>

    <h2 class="my-4 text-2xl font-bold">{$t('common.install')}</h2>
    {@html $t('hyperchat.install.text')}
  </div>
</div>
