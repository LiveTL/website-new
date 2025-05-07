<script lang="ts">
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();
</script>

<svelte:head>
  <title>LiveTL - About</title>
  <meta name="description" content="About LiveTL and the team." />
</svelte:head>

<div class="background-plus bg-fixed">
  {@render children?.()}
</div>
