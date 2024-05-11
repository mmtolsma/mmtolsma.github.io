<script>
	import '../app.css';
	import { page } from '$app/stores';
	import NavCard from '../components/NavCard.svelte';
</script>

{#if $page.url.pathname == '/'}
	<div class="flex min-h-screen md:container md:py-10 md:mx-auto transition-all">
		<div class="flex-1">
      <slot />
		</div>
	</div>
{:else}
	<div class="flex min-h-screen md:container md:h-screen md:py-10 md:mx-auto">
		<div class="flex flex-col flex-1 gap-5 md:flex-row">
      <!-- Navigation -->
			<div class="sticky top-0">
				<NavCard />
			</div>
      <!-- Body -->
			<div class="bg-base-card rounded-lg p-5 flex-1 overflow-auto">
				<div class="flex flex-col h-full">
          <slot />
        </div>
			</div>
		</div>
	</div>
{/if}
