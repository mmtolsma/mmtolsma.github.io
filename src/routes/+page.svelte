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

  const filteredLinks = $navLinks.filter(link => link.url !== "/");

  // $: marks the beginning of a reactive declaration. 
  // It tells Svelte to watch the variables used within the 
  // expression on the right side of the assignment (i.e. `loaded`). 
  $: transitionClass = `transition-opacity ease-in-out duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`;
</script>

<div class="bg-base-card border border-card-border rounded-2xl flex flex-col h-full">
  <div class="flex flex-col items-center justify-center h-full">
    <div class="{transitionClass} delay-[500ms]">
      <!-- desktop -->
      <div class="hidden md:block mb-5">
        <h2 class="text-4xl lg:text-5xl">Welcome to <b>Michael M. Tolsma's</b> website</h2>
      </div>
      <!-- mobile -->
      <div class="md:hidden block mb-5">
        <h2 class="text-4xl text-center">Welcome to</h2>
        <h1 class="text-4xl text-center"><b>Michael M. Tolsma's</b></h1>
        <h2 class="text-4xl text-center">website</h2>
      </div>
    </div>
    <div class="mb-5 {transitionClass} delay-[1250ms]">  
      <h2 class="text-3xl lg:text-4xl text-center">Where would you like to visit?</h2>
    </div>
    <div class="mb-5 {transitionClass} delay-[1500ms]">
      <nav class="md:flex md:flex-rows-1 grid grid-cols-1 gap-1">
        {#each filteredLinks as link}
          <a href={link.url} class="button mb-2 text-center bg-gray-700 hover:bg-gray-300 hover:text-gray-700 text-lg py-4 px-24 md:text-md md:py-2 md:px-10 rounded-lg w-full md:w-40">
            {link.name}
          </a>
        {/each}
      </nav>
    </div>
  </div>
</div>