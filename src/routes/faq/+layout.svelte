<script lang="ts">
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();
</script>

<svelte:head>
  <title>LiveTL - FAQ</title>
  <meta name="description" content="Frequently asked questions." />
</svelte:head>

<div class="background-plus bg-fixed py-10">
  {@render children?.()}
</div>
