<script lang="ts">
  import '../app.css';

  import NavBar from '$lib/components/NavBar.svelte';
  import Footer from '$lib/components/Footer.svelte';

  import type { LayoutData } from './$types';

  export let data: LayoutData;
</script>

<NavBar />
<slot />
<Footer />
