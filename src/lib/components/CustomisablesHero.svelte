<script lang="ts">
  /**
   * A component to render a hero with a showcase of customisable features.
   * @component CustomisablesHero
   * @prop {Array} customisables - an array of customisable features to display
   */

  export let headingStyle = 'mt-2 bg-gradient-to-tr from-secondary to-accent bg-clip-text text-5xl font-bold tracking-tight text-transparent';
  export let customisables = [];
  export let subtitleText = 'Make LiveTL look and behave exactly the way you want.';
</script>

<div class="h-fit bg-slate-900 py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:text-center">
      <h1
        class="{headingStyle}"
      >
        Customisable
      </h1>
      <p class="mt-6 text-lg leading-8 text-slate-100">
        {subtitleText}
      </p>
    </div>
    <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
      <dl
        class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
      >
        {#each customisables as customisable}
          <div class="relative pl-16">
            <dt class="font-semibold leading-7 text-base-200">
              <div
                class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-white"
              >
                {@html customisable.icon}
              </div>
              {customisable.title}
            </dt>
            <dd class="mt-2 leading-7 text-base-300">
              {customisable.description}
            </dd>
          </div>
        {/each}
      </dl>
    </div>
  </div>
</div>
