<script lang="ts">
  /**
   * A component to render the basic contents of a tweet.
   * @component Tweet
   * @prop {string} avatarImg - the avatar image to use, normally the author's avatar img URL on Twitter
   * @prop {string} text - the tweet text to display
   * @prop {string} sourceURL - the URL to the source tweet
   * @prop {string} authorName - the author name to display (will be shown with a prepended @)
   */
  export let avatarImg: string;
  export let text: string;
  export let sourceURL: string;
  export let authorName: string;

  import { Icon } from '@steeze-ui/svelte-icon';
  import { Twitter } from '@steeze-ui/simple-icons';

  import { fade } from 'svelte/transition';
</script>

<div
  class="card mx-auto w-full max-w-md bg-base-100 shadow-xl"
  in:fade={{ duration: 500 }}
>
  <div class="card-body space-y-2">
    <div class="avatar">
      <div
        class="w-24 rounded-full ring ring-secondary ring-offset-2 ring-offset-base-100"
      >
        <!-- svelte-ignore a11y-missing-attribute -->
        <img src={avatarImg} />
      </div>
    </div>

    <p>{text}</p>

    <span class="card-actions flex justify-end text-center text-sm">
      <a href={sourceURL} class="link link-hover flex items-center">
        <Icon
          src={Twitter}
          theme="solid"
          size="16"
          class="color-gray-900 mr-1"
        />
        <span class="font-bold">@{authorName}</span>
      </a>
    </span>
  </div>
</div>
