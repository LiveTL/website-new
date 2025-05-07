<script lang="ts">
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();
</script>

<svelte:head>
  <title>LiveTL - Contact</title>
  <meta name="description" content="Contact LiveTL." />
</svelte:head>

<div class="background-plus min-h-screen bg-fixed">
  {@render children?.()}
</div>
