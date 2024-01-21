<script lang="ts">
  import '../app.css';

  import NavBar from '$lib/components/NavBar.svelte';
  import Footer from '$lib/components/Footer.svelte';

  import { MetaTags } from 'svelte-meta-tags';
  import type { LayoutData } from './$types';

  export let data: LayoutData;
</script>

<svelte:head>
  <MetaTags
    title="Extensions by LiveTL"
    description="Free and open source extensions, used and loved by thousands of users around the world."
    openGraph={{
      url: data.host,
      title: 'Extensions by LiveTL',
      description:
        'Free and open source extensions, used and loved by thousands of users around the world.',
      images: [
        {
          url: data.thumbnailImgURL,
          width: 128,
          height: 128,
          alt: 'LiveTL Logo',
        },
      ],
      siteName: 'LiveTL',
    }}
    twitter={{
      handle: '@danirukun',
      site: '@kento_nishi',
      cardType: 'summary',
      title: 'Extensions by LiveTL',
      description:
        'Free and open source extensions, used and loved by thousands of users around the world.',
      image: data.thumbnailImgURL,
      imageAlt: 'LiveTL Logo',
    }}
    additionalMetaTags={[
      {
        property: 'og:image:secure_url',
        content: data.thumbnailImgURL,
      },
      {
        property: 'twitter:image:src',
        content: data.thumbnailImgURL,
      },
    ]}
  />
</svelte:head>

<NavBar />
<slot />
<Footer />
