<script>
  import { onMount } from 'svelte';
  import { navLinks } from '../linksData.js';

  let loaded = false;

  function handleLoad() {
    loaded = !loaded;
  }

  onMount(() => {
    handleLoad();
  });
</script>

<div class="bg-base-card rounded-lg flex flex-col h-full">
  <div class="flex flex-col items-center h-full mt-10">
    <div class="transition-opacity ease-in-out delay-[500ms] duration-1000 {loaded ? 'opacity-100' : 'opacity-0'}">
      <div class="hidden md:block mb-5">
        <h2 class="text-4xl lg:text-5xl text-center">Welcome to <b>Michael M. Tolsma's</b> portfolio</h2>
      </div>
      <div class="md:hidden block mb-5">
        <h2 class="text-4xl text-center">Welcome to</h2>
        <h1 class="text-4xl text-center"><b>Michael M. Tolsma's</b></h1>
        <h2 class="text-4xl text-center">portfolio</h2>
      </div>
    </div>
    <div class="mb-5 transition-opacity ease-in-out delay-[2000ms] duration-1000 {loaded ? 'opacity-100' : 'opacity-0'}">  
      <h2 class="text-3xl lg:text-4xl text-center">Where would you like to visit?</h2>
    </div>
    <div class="mb-5 transition-opacity ease-in-out delay-[2500ms] duration-1000 {loaded ? 'opacity-100' : 'opacity-0'}">
      <nav class="md:flex md:flex-rows-1 grid grid-cols-1 gap-1">
        {#each $navLinks as link}
          <a href={link.url} class="button mb-2 text-center bg-gray-700 hover:bg-gray-300 hover:text-gray-700 text-lg py-4 px-24 md:text-md md:py-2 md:px-10 rounded-md w-full">
            {link.name}
          </a>
        {/each}
      </nav>
    </div>
  </div>
</div>