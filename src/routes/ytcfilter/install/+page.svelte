<script lang="ts">
  import YtcFilterLogo from '$lib/assets/ytcfilter/logo-small.png';

  import { t } from '$lib/translation';

  import { Icon } from '@steeze-ui/svelte-icon';
  import {
    Googlechrome,
    Firefoxbrowser,
    Github,
  } from '@steeze-ui/simple-icons';

  const downloadLinks = {
    v2: {
      chrome:
        'https://chromewebstore.google.com/detail/ytcfilter/mnldnbhgfocmkehnlkeanlhfmopepnko',
      firefox: 'https://addons.mozilla.org/en-US/firefox/addon/ytcfilter/',
    },
    v3: {
      beta: 'https://github.com/LiveTL/ytcfilter/releases/latest',
    },
  };
</script>

<section class="container mx-auto">
  <div
    class="mx-auto flex h-screen max-w-3xl flex-col items-center justify-center space-y-8"
    id="install"
  >
    <img
      src={YtcFilterLogo}
      alt="YtcFilter Logo"
      class="mx-auto w-48 rounded-2xl shadow-2xl shadow-info"
    />

    <h1 class="mb-4 text-center text-4xl font-bold">
      {@html $t('ytcfilter.install.title')}
    </h1>

    <section class="flex flex-col gap-y-8" id="download-links-release">
      <div class="flex flex-col items-center justify-center space-y-4">
        <h2 class="text-center text-2xl">YtcFilter v2</h2>
        <a
          href={downloadLinks['v2']['chrome']}
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-primary rounded-full text-base-100"
        >
          <Icon
            src={Googlechrome}
            theme="solid"
            size="18"
            class="mr-2 justify-end"
          />
          {$t('common.install.chrome')}</a
        >
        <a
          href={downloadLinks['v2']['firefox']}
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-secondary rounded-full text-base-100"
          ><Icon
            src={Firefoxbrowser}
            theme="solid"
            size="18"
            class="mr-2 justify-end"
          />{$t('common.install.firefox')}</a
        >
      </div>

      <div class="flex flex-col justify-center space-y-4">
        <h2 class="text-center text-2xl">YtcFilter v3 Beta</h2>
        <a
          href={downloadLinks['v3']['beta']}
          target="_blank"
          rel="noopener noreferrer"
          class="btn-neutral btn mx-auto rounded-full text-base-100"
          ><Icon
            src={Github}
            theme="solid"
            size="18"
            class="mr-2 justify-end"
          />{$t('ytcfilter.install.beta')}</a
        >
      </div>
    </section>

    <section
      class="mx-auto space-y-2 text-center text-base"
      id="license-source"
    >
      <p>{@html $t('common.install.license')}</p>
      <p>{@html $t('common.install.source_code')}</p>
    </section>
  </div>
</section>
