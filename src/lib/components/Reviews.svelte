<script lang="ts">
  import Review from './Review.svelte';

  const reviews = [
    {
      authorName: 'Blood Sand',
      text: `Does as described. An overall great app. I love the read aloud function, I long ago came to realize how much I've come to rely on it for streams I want to multitask during. When read aloud mode is on it no longer reads everything twice as I initially reviewed.`,
    },
    {
      authorName: 'Alex',
      text: `10/10 would recommend. Does everything it promises. Very solid extension with hyperchat, which perfomorms dramatically better than the stock youtube`,
    },
  ]
</script>

<div class="flex flex-col space-y-4">
  {#each reviews as review}
    <Review {...review} />
  {/each}
</div>
