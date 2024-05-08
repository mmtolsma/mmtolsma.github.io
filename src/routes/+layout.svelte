<script>
	import '../app.css';
	import { page } from '$app/stores';
	import NavCard from '../components/NavCard.svelte';
	import BodyCard from '../components/BodyCard.svelte';
</script>

{#if $page.url.pathname == '/'}
	<div class="flex min-h-screen md:container md:py-10 md:mx-auto transition-all">
		<div class="flex-1">
      <slot />
		</div>
	</div>
{:else}
	<div class="flex min-h-screen md:container md:py-10 md:mx-auto transition-all">
		<div class="flex flex-col flex-1 gap-5 md:flex-row md:flex-1 md:gap-5">
			<div>
				<NavCard />
			</div>
			<div class="flex-1">
				<BodyCard>
					<slot />
				</BodyCard>
			</div>
		</div>
	</div>
{/if}
