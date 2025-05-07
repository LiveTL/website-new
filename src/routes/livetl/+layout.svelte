<script lang="ts">
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();
</script>

<div class="background-hideout bg-fixed">
  {@render children?.()}
</div>
