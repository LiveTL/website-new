<script lang="ts">
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();
</script>

<svelte:head>
  <title>LiveTL - About</title>
  <meta name="description" content="About LiveTL." />
</svelte:head>

<div class="background-hideout">
  {@render children?.()}
</div>
