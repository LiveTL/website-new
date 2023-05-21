<script lang="ts">
  import type { PageData } from './$types';

  import Contributors from '$lib/components/Contributors.svelte';

  export let data: PageData;

  const { contributors } = data;

  console.log(data.contributors);
</script>

<div class="container mx-auto px-4 py-12 sm:px-8">
  <div class="mx-auto mb-8 max-w-lg">
    <h1 class="mb-8 text-5xl font-bold">About LiveTL</h1>
    <p class="text-lg">
      <b>LiveTL</b> was created in 2020 as a browser extension focused on providing
      live translations for YouTube and Twitch streams. It was the first project
      undertaken by our team. We wanted to break down language barriers and enable
      viewers to understand streams in their native language.
    </p>
  </div>

  <div class="mx-auto max-w-lg">
    <p class="text-lg">
      Over time, our team expanded and we continued to develop browser
      extensions. One of our notable projects is <b>HyperChat</b>, an extension
      that enhances the chat experience on YouTube streams. We are passionate
      about creating innovative tools that improve the streaming and viewing
      experience for users.
    </p>
  </div>

  <div class="mx-auto mt-8 max-w-lg">
    <p class="text-lg">
      <b>LiveTL</b> and <b>HyperChat</b> are the result of the collaboration of a
      small team of dedicated contributors. We are committed to continuously improving
      and expanding our offerings to better serve our users.
    </p>
  </div>

  <div class="mx-auto max-w-lg">
    <h2 class="my-8 text-4xl font-bold">Team</h2>
    <p class="text-lg">
      LiveTL, HyperChat and other software is built by contributors from around
      the world. We would not be here without their generous work and support.
    </p>
    <Contributors {contributors} />
  </div>
</div>
