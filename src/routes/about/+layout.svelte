<script lang="ts">
  import type { LayoutData } from './$types';

  export let data: LayoutData;
</script>

<div class="background-plus bg-fixed">
  <slot />
</div>
