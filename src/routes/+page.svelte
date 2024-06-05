<script>
  import { onMount } from 'svelte';
  import { navLinks } from '../linksData.js';
  import Footer from "../components/Footer.svelte";

  let loaded = false;

  function handleLoad() {
    loaded = !loaded;
  }

  onMount(() => {
    handleLoad();
  });

  const filteredLinks = $navLinks.filter(link => link.url !== "/");

  $: transitionClass = `transition-opacity ease-in-out duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`;
</script>

<div class="bg-base-card border border-card-border rounded-2xl flex flex-col h-full">
  <div class="flex flex-col items-center justify-center h-full">
    <div class="{transitionClass} delay-[500ms]">
      <!-- desktop -->
      <div class="hidden md:block mb-5">
        <h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">Welcome to <b>Michael M. Tolsma's</b> website</h2>
      </div>
      <!-- mobile -->
      <div class="md:hidden block mb-5">
        <h2 class="text-2xl sm:text-4xl text-center">Welcome to</h2>
        <h1 class="text-2xl sm:text-4xl text-center"><b>Michael M. Tolsma's</b></h1>
        <h2 class="text-2xl sm:text-4xl text-center">website</h2>
      </div>
    </div>
    <div class="mb-5 md:mb-12 {transitionClass} delay-[1000ms]">  
      <h2 class="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center">Where would you like to visit?</h2>
    </div>
    <div class="mb-5 {transitionClass} delay-[1500ms]">
      <nav class="md:flex md:flex-rows-1 grid grid-cols-1 gap-1">
        {#each filteredLinks as link}
          <a href={link.url} class="button mb-2 text-center bg-gray-700 hover:bg-gray-300 hover:text-gray-700 rounded-lg w-full text-md py-4 px-14 sm:text-lg sm:py-4 sm:px-24 md:text-md md:py-1 md:px-2 md:w-28 lg:text-lg lg:py-2 lg:px-10 lg:w-36 xl:text-xl xl:py-2 xl:px-10 xl:w-48">
            {link.name}
          </a>
        {/each}
      </nav>
    </div>
  </div>
  <Footer />
</div>