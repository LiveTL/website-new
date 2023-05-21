<script lang="ts">
  import type { LayoutData } from './$types';

  export let data: LayoutData;
</script>

<div class="background-hideout bg-fixed py-10 pb-64">
  <slot />
</div>
