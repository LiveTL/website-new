<script lang="ts">
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();
</script>

<svelte:head>
  <title>YtcFilter</title>
  <meta name="description" content="Filter YouTube live chat." />
</svelte:head>

<div class="background-hideout bg-fixed">
  {@render children?.()}
</div>
