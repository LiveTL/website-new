<script lang="ts">
  /**
   * A component meant to present Twitter testimonials.
   * @component TwitterTestimonials
   * @prop {Array} tweets - An array of tweets to display.
   */

  import Tweet from './Tweet.svelte';

  import Pippa from '$lib/assets/x_profile_pics/pippa.jpg';
  import Lua from '$lib/assets/x_profile_pics/lua.jpg';

  export let tweets = [
    {
      authorName: 'pipkinpippa',
      avatarImg: Pippa,
      text: "shilling this more publicly because language barrier shouldn't keep you from watching some of the greatest streamers of all time: livetl.app",
      sourceURL: 'https://twitter.com/pipkinpippa/status/1652680872435351553',
    },
    {
      authorName: 'LuaVLucky',
      text: "If you were like me and not aware, there's a browser extension available for many browsers called LiveTL\nLiveTL pulls translations from vtubers' chat and displays them as captions, or even reads them out loud. It has support for a ton of languages and autotranslation too",
      avatarImg: Lua,
      sourceURL:
        'https://twitter.com/LuaVLucky/status/1362657273063960579?s=20',
    },
  ];
</script>

<div class="flex flex-col space-y-4">
  {#each tweets as tweet}
    <Tweet {...tweet} />
  {/each}
</div>
