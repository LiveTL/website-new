<script lang="ts">
  import { writable } from 'svelte/store';

  interface Props {
    title?: string;
    tabsContent?: any;
  }

  let { title = 'What do people say?', tabsContent = [] }: Props = $props();

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
      class="tab tab-bordered transition duration-500 ease-in-out"
      class:tab-active={$activeTab === tab.id}
      onclick={() => changeActiveTab(tab.id)}
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
      <tab.content />
    {/if}
  {/each}
</div>
