<script lang="ts">
  import LiveTLLogo from '$lib/assets/livetl/logo-big.png';
  import HyperChatLogo from '$lib/assets/hyperchat/logo.png';
  import YTCFilterLogo from '$lib/assets/ytcfilter/logo-small.png';
</script>

<div class="hero min-h-screen bg-gradient-to-b from-base-100 to-base-200">
  <div class="hero-content text-center">
    <div class="max-w-4xl">
      <h1 class="text-6xl font-bold text-secondary">Our Extensions</h1>
      <p class="py-6 text-2xl text-info">
        We make free and open source extensions, used and loved by thousands of
        users around the world.
      </p>

      <div class="flex flex-col md:flex-row gap-x-12 gap-y-8 justify-center">
        <a href="/livetl">
          <div
            class="card md:max-w-xs min-h-[26em] bg-base-100 shadow-lg rounded-3xl hover:shadow-[#05aac9] hover:shadow-2xl hover:scale-105 transition-all"
          >
            <figure class="px-10 pt-10 h-60">
              <img
                src={LiveTLLogo}
                alt="LiveTL Logo"
                class="rounded-2xl h-3/4"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title text-4xl mx-auto">LiveTL</h2>
              <p>The ultimate way to watch foreign streamers.</p>
            </div>
          </div>
        </a>

        <a href="/hyperchat">
          <div
            class="card md:max-w-xs min-h-[26em] bg-base-100 shadow-lg rounded-3xl hover:shadow-primary hover:shadow-2xl hover:scale-105 transition-all"
          >
            <figure class="px-10 pt-10 h-60">
              <img src={HyperChatLogo} alt="HyperChat Logo" />
            </figure>
            <div class="card-body">
              <h2 class="card-title text-4xl mx-auto">HyperChat</h2>
              <p>Optimized YouTube chat.</p>
            </div>
          </div>
        </a>

        <a href="/ytcfilter">
          <div
            class="card md:max-w-xs min-h-[26em] bg-base-100 shadow-lg rounded-3xl hover:shadow-info hover:shadow-2xl hover:scale-105 transition-all"
          >
            <figure class="px-10 pt-10 h-60">
              <img
                src={YTCFilterLogo}
                alt="YTCFilter Logo"
                class="rounded-2xl h-3/4"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title text-4xl mx-auto">ytcFilter</h2>
              <p>Capture messages from YouTube chat.</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</div>
