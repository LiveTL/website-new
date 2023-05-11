<script lang="ts">
	export let contributors = [];
</script>

<div class="container mx-auto py-8">
	<!-- <h1 class="text-4xl font-bold mb-8">GitHub Contributors</h1> -->

	<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
		{#each contributors as contributor}
			<div class="bg-white p-4 shadow-md rounded-lg flex flex-col sm:min-w-full w-52 sm:w-fit mx-auto">
				<div class="avatar mx-auto my-4">
					<div class="w-16 rounded-full ring ring-neutral ring-offset-base-100 ring-offset-2">
						<img src={contributor.avatar_url} alt="Contributor Avatar" />
					</div>
				</div>
				<a href={contributor.url} class="link link-hover">
					<p class="text-center text-md font-bold mb-2">{contributor.login}</p>
				</a>
			</div>
		{/each}
	</div>
</div>