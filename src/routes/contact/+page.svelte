<script lang="ts">
  import { DISCORD_SERVER_URL } from '../../const';

  import { t } from '$lib/translation';

  const discordServerUrl = DISCORD_SERVER_URL;
</script>

<div class="container mx-auto px-4 py-12 sm:px-8">
  <div class="mx-auto mb-8 max-w-lg">
    <h1 class="mb-8 text-5xl font-bold">{$t('contact.title')}</h1>
    <p class="text-lg">
      {@html $t('contact.description', { discordServerUrl })}
    </p>
  </div>
</div>
