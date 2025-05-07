<script lang="ts">
  import { Icon } from '@steeze-ui/svelte-icon';
  import { Star } from '@steeze-ui/heroicons';


  import { fade } from 'svelte/transition';
  interface Props {
    authorName: any;
    text: string;
  }

  let { authorName, text }: Props = $props();
</script>

<div
  class="card mx-auto w-full max-w-lg bg-base-100 shadow-xl"
  in:fade={{ duration: 500 }}
>
  <div class="card-body">
    <h2 class="card-title">{authorName}</h2>
    <div class="card-actions">
      <Icon
        src={Star}
        theme="solid"
        size="20"
        class="color-gray-800 justify-end"
      />
      <Icon
        src={Star}
        theme="solid"
        size="20"
        class="color-gray-800 justify-end"
      />
      <Icon
        src={Star}
        theme="solid"
        size="20"
        class="color-gray-800 justify-end"
      />
      <Icon
        src={Star}
        theme="solid"
        size="20"
        class="color-gray-800 justify-end"
      />
      <Icon
        src={Star}
        theme="solid"
        size="20"
        class="color-gray-800 justify-end"
      />
    </div>
    <p>{text}</p>
  </div>
</div>
