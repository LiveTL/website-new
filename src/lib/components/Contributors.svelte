<script lang="ts">
  export let contributors = [];
</script>

<div class="container mx-auto py-8">
  <!-- <h1 class="text-4xl font-bold mb-8">GitHub Contributors</h1> -->

  <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
    {#each contributors as contributor}
      <div
        class="mx-auto flex w-52 flex-col rounded-lg bg-white p-4 shadow-md sm:w-fit sm:min-w-full"
      >
        <div class="avatar mx-auto my-4">
          <div
            class="w-16 rounded-full ring ring-neutral ring-offset-2 ring-offset-base-100"
          >
            <img src={contributor.avatar_url} alt="Contributor Avatar" />
          </div>
        </div>
        <a href={contributor.url} class="link-hover link">
          <p class="text-md mb-2 text-center font-bold">{contributor.login}</p>
        </a>
      </div>
    {/each}
  </div>
</div>
