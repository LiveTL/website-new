<script lang="ts">
  import { Icon } from '@steeze-ui/svelte-icon';
  import { Star } from '@steeze-ui/heroicons';

  export let authorName, text: string;
</script>

<div class="card w-full bg-base-100 mx-auto shadow-xl max-w-lg">
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
