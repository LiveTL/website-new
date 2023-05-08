<script lang="ts">
  /**
   * A component meant to present Twitter testimonials.
   * @component TwitterTestimonials
   */
  import Tweet from './Tweet.svelte';
</script>

<div class="flex flex-col space-y-4">
  <Tweet
    authorName="takanashikiara"
    avatarImg="https://pbs.twimg.com/profile_images/1634890490666700800/HAJDOpOD_400x400.jpg"
    text="Hyperchat be getting better and better! Damn!"
    sourceURL="https://twitter.com/takanashikiara/status/1503121408309833730?s=20"
  />

  <Tweet
    authorName="pipkinpippa"
    avatarImg="https://pbs.twimg.com/profile_images/1647107089192435714/2hCaJ-0q_400x400.jpg"
    text="shilling this more publicly because language barrier shouldn't keep you from watching some of the greatest streamers of all time: livetl.app"
    sourceURL="https://twitter.com/pipkinpippa/status/1652680872435351553"
  />
</div>
