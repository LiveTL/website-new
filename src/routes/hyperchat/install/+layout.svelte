<script lang="ts">
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();
</script>

<svelte:head>
  <title>HyperChat - Install</title>
  <meta name="description" content="Install HyperChat." />
</svelte:head>

<div class="background-hideout bg-fixed py-8">
  {@render children?.()}
</div>
