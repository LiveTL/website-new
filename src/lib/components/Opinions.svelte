<script lang="ts">
  import { writable } from 'svelte/store';

  export let title = 'What do people say?';
  export let tabsContent = [];

  let activeTab = writable(1); // Set the default active tab

  function changeActiveTab(tabId: number) {
    activeTab.set(tabId);
  }
</script>

<h1 class="text-center text-5xl font-bold text-secondary">
  {title}
</h1>
<div class="tabs mx-auto w-max decoration-secondary">
  {#each tabsContent as tab}
    <a
      class="tab-bordered tab transition duration-500 ease-in-out"
      class:tab-active={$activeTab === tab.id}
      on:click={() => changeActiveTab(tab.id)}
      href="#{tab.title}"
    >
      {@html tab.title}
    </a>
  {/each}
</div>

<div class="transition duration-500 ease-in-out">
  <!-- Tab Content -->
  {#each tabsContent as tab}
    {#if $activeTab === tab.id}
      <svelte:component this={tab.content} />
    {/if}
  {/each}
</div>
