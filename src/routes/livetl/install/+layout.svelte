<script lang="ts">
  import type { LayoutData } from './$types';

  export let data: LayoutData;
</script>

<div class="background-hideout py-10 bg-fixed pb-64">
  <slot />
</div>
