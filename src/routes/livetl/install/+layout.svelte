<script lang="ts">
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();
</script>

<svelte:head>
  <title>LiveTL - Install</title>
  <meta name="description" content="Install LiveTL." />
</svelte:head>

<div class="background-hideout bg-fixed py-10 pb-64">
  {@render children?.()}
</div>
