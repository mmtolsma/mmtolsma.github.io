<script>
  import { onMount } from 'svelte';
  import { navLinks } from '../linksData.js';

  let windowWidth;
  let clicked = false;

  function updateWidth() {
    windowWidth = window.innerWidth;
  }

  onMount(() => {
    updateWidth();

    window.addEventListener('resize', updateWidth);

    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  });

  const handleClick = () => {
    clicked = !clicked;
  }

  const resetClick = () => {
    clicked = false;
  }

</script>

<div class="bg-base-card rounded-lg md:min-w-[250px] md:h-full">
  <!-- Desktop -->
  {#if windowWidth >= 768}
    <div class="nav-card">
      <div class="flex flex-col items-center">
        <img src="/profile-pic.png" class="mt-12 mb-5 rounded w-32 h-32" alt="Michael Tolsma smiling" />
        <div class="font-bold mb-2">
          Michael Marinus Tolsma
        </div>
        <div class="py-1 px-2 mb-5 text-sm rounded-lg bg-gray-700">
          Software Developer
        </div>
        <nav class="grid grid-cols-1 gap-1">
          {#each $navLinks as link}
            <a href={link.url} class="button mb-2 text-center bg-gray-700 hover:bg-gray-300 hover:text-gray-700 py-2 px-12 rounded-md w-full">
              {link.name}
            </a>
          {/each}
        </nav>
      </div> 
    </div>
  <!-- Mobile -->
  {:else}
    <div class="nav-bar flex flex-col">
      <div class="px-2 flex justify-between items-center">
        <div class="font-bold">
          Michael Marinus Tolsma
        </div>
        <button on:click={handleClick} class="flex justify-end items-center">
          {#if clicked}
            <div class="p-3 fa fa-xmark text-2xl hover:bg-gray-700"></div>
          {:else}
            <div class="p-3 fa fa-bars text-2xl hover:bg-gray-700"></div>
          {/if}
        </button>
      </div>
      {#if clicked}
        <div class="absolute right-0 mt-14 mr-3 w-48 bg-info-card space-y-1 py-2 px-2">
          {#each $navLinks as link}
            <a href={link.url} on:click={resetClick} class="text-white hover:bg-gray-700 block px-3 py-2 text-base font-medium">{link.name}</a>
          {/each}
        </div>
      {/if}
    </div>  
  {/if}
</div>
