<script lang="ts">
  import { fly } from 'svelte/transition';

  export let contributors = [];
  export let randomize = false;

  $: if (randomize) {
    contributors = contributors.sort(() => Math.random() - 0.5);
  }
</script>

<div class="container">
  <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
    {#each contributors as contributor, i}
      <div
        in:fly|global={{ y: 300, duration: 500, delay: i * 100 }}
        class="mx-auto flex w-52 flex-col rounded-lg bg-white p-4 shadow-md sm:w-fit sm:min-w-full"
      >
        <div class="avatar mx-auto my-4">
          <div
            class="w-16 rounded-full ring ring-neutral ring-offset-2 ring-offset-base-100"
          >
            <img src={contributor.avatar_url} alt="Contributor Avatar" />
          </div>
        </div>
        <a href={contributor.url} class="link link-hover">
          <p class="text-md mb-2 text-center font-bold">{contributor.login}</p>
        </a>
      </div>
    {/each}
  </div>
</div>
