<script lang="ts">
  import { DISCORD_SERVER_URL } from '../../const';

  import { t } from '$lib/translation';
  import type { Parser } from 'sveltekit-i18n';

  const contactDescription = {
    discordServerUrl: DISCORD_SERVER_URL,
  } as Parser.PayloadDefault;
</script>

<div class="container py-12">
  <div class="mx-auto max-w-xs sm:px-8 md:max-w-lg lg:max-w-xl">
    <h1 class="mb-8 text-5xl font-bold">{$t('contact.title')}</h1>
    <p class="text-lg">
      {@html $t('contact.description', contactDescription)}
    </p>
  </div>
</div>
