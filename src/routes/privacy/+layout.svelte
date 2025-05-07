<script lang="ts">
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();
</script>

<svelte:head>
  <title>LiveTL - Privacy Policy</title>
  <meta name="description" content="Privacy Policy for LiveTL extensions." />
</svelte:head>

<div class="background-plus bg-fixed py-10">
  {@render children?.()}
</div>
