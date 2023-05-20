<script lang="ts">
    import type { LayoutData } from './$types';
    
    export let data: LayoutData;
</script>

<div class="bg-fixed background-hideout py-8">
    <slot></slot>
</div>