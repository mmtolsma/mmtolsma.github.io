<script>
  import { navLinks } from '../linksData.js';

  let clicked = false;

  const handleClick = () => {
    clicked = !clicked;
  }

  const resetClick = () => {
    clicked = false;
  }
</script>

<div class="bg-base-card rounded-lg md:min-w-[250px] h-full">
  <!-- Desktop -->
  <div class="hidden md:block">
    <div class="flex flex-col items-center">
      <img src="/profile-pic.png" class="mt-12 mb-5 rounded w-32 h-32" alt="Michael Tolsma smiling" />
      <div class="font-bold mb-2">
        Michael Marinus Tolsma
      </div>
      <div class="py-1 px-2 mb-5 text-sm rounded-lg bg-gray-700">
        Full Stack Developer
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
  <div class="md:hidden flex flex-col">
    <div class="grid grid-cols-3 items-center w-full">
      <div class="flex items-center space-x-2 col-span-2 ml-5">
        <img src="/profile-pic.png" class="rounded w-10 h-10" alt="Michael Tolsma smiling" />
        <div class="font-bold">
          Michael Marinus Tolsma
        </div>
      </div>
      <div class="flex justify-end">
        <button on:click={handleClick} class="flex items-center">
          {#if clicked}
            <div class="p-3 fa fa-xmark text-2xl hover:bg-gray-300 hover:text-gray-700"></div>
          {:else}
            <div class="p-3 fa fa-bars text-2xl hover:bg-gray-300 hover:text-gray-700"></div>
          {/if}
        </button>
      </div>
    </div>
    {#if clicked}
      <div class="absolute right-0 mt-14 mr-3 w-48 bg-info-card space-y-1 py-2 px-2 z-50">
        {#each $navLinks as link}
          <a href={link.url} on:click={resetClick} class="text-white hover:bg-gray-300 hover:text-gray-700 block px-3 py-2 text-base font-medium">{link.name}</a>
        {/each}
      </div>
    {/if}
  </div>  
</div>
