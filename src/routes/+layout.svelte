<script>
	import '../app.css';
	import { page } from '$app/stores';
	import NavCard from '../components/NavCard.svelte';
</script>

{#if $page.url.pathname == '/'}
  <!-- was min-h-screen max-h-screen -->
	<div class="flex min-h-dvh max-h-dvh p-3 sm:container sm:py-8 sm:mx-auto sm:max-w-[600px] md:max-w-[750px] lg:max-w-[950px] xl:max-w-[1200px] transition-all">
		<div class="flex-1">
      <slot />
		</div>
	</div>
{:else}
	<div class="flex min-h-dvh max-h-dvh p-3 sm:container sm:mx-auto sm:py-8 sm:max-w-[600px] md:max-w-[700px] lg:h-screen lg:max-w-[950px] xl:max-w-[1200px]">
		<div class="flex flex-col flex-1 gap-3 sm:gap-5 lg:flex-row">
      <!-- Navigation -->
			<div class="sticky top-0">
				<NavCard />
			</div>
      <!-- Body -->
			<div class="bg-base-card border border-card-border rounded-2xl flex-1 overflow-auto px-2">
				<div class="flex flex-col h-full">
          <slot />
        </div>
			</div>
		</div>
	</div>
{/if}
