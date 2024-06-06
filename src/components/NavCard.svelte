<script>
  import { navLinks } from '../linksData.js';
	import { page } from '$app/stores';

  let clicked = false;

  const handleClick = () => {
    clicked = !clicked;
  }

  const resetClick = () => {
    clicked = false;
  }

  $: getButtonStyle = (link) => {
    return `button mb-2 text-center py-2 px-12 rounded-md w-full ${($page.url.pathname == link.url) ? 'bg-yellow-500 text-gray-700' : 'bg-gray-700 hover:bg-gray-300 hover:text-gray-700'}`;
  }

  $: getMobileButtonStyle = (link) => {
    return `block px-3 py-2 text-base font-medium ${($page.url.pathname == link.url) ? 'bg-yellow-500 text-gray-700' : 'hover:bg-gray-300 hover:text-gray-700'}`;
  }
</script>

<div class="bg-base-card border border-card-border rounded-2xl h-full py-1 sm:px-4 sm:py-4 lg:px-5 lg:pt-5 overflow-auto">
  <!-- Desktop -->
  <div class="hidden lg:block">
    <div class="flex flex-col items-center">
      <img src="/profile-pic.png" class="mb-3 rounded w-32 h-32" alt="Michael Tolsma smiling" />
      <div class="text-2xl font-bold mb-3">Michael M. Tolsma</div>
      <div class="py-1 px-2 mb-5 text-sm rounded-lg bg-gray-700">Fullstack Developer</div>
      <span class="flex-grow mb-5 border-t border-gray-700 w-full"></span>
      <nav class="grid grid-cols-1 gap-1">
        {#each $navLinks as link}
          <a 
            href={($page.url.pathname == link.url) ? null : link.url} 
            class={getButtonStyle(link)}>
            {link.name}
          </a>
        {/each}
      </nav>
    </div> 
  </div>
  <!-- Tablet -->
  <div class="hidden sm:block lg:hidden">
    <div class="flex items-center">
      <img src="/profile-pic.png" class="rounded w-20 h-20" alt="Michael Tolsma smiling" />
      <div class="ml-4">
        <div class="text-2xl font-bold mb-3">Michael M. Tolsma</div>
        <div class="inline-block text-sm rounded-lg bg-gray-700 px-2 py-1">Fullstack Developer</div>
      </div>
      <div class="absolute top-0 right-0 mr-3">
        <button on:click={handleClick} class="flex items-center">
          {#if clicked}
            <div class="p-3 fa fa-xmark text-2xl hover:bg-gray-300 hover:text-gray-700"></div>
          {:else}
            <div class="p-3 fa fa-bars text-2xl hover:bg-gray-300 hover:text-gray-700"></div>
          {/if}
        </button>
      </div>
      {#if clicked}
      <div class="absolute right-0 mt-56 mr-3 w-48 bg-dropdown space-y-1 py-2 px-2 z-50">
        {#each $navLinks as link}
          <a             
            href={($page.url.pathname == link.url) ? null : link.url} 
            on:click={resetClick} 
            class={getMobileButtonStyle(link)}>
            {link.name}
          </a>
        {/each}
      </div>
      {/if}
    </div>       
  </div>  
  <!-- Mobile -->
  <div class="sm:hidden flex flex-col">
    <div class="grid grid-cols-6 items-center w-full">
      <div class="flex items-center space-x-2 col-span-5 ml-5">
        <img src="/profile-pic.png" class="rounded w-12 h-12" alt="Michael Tolsma smiling" />
        <div class="ml-4">
          <div class="font-bold">Michael M. Tolsma</div>
          <div class="inline-block text-xxs rounded-lg bg-gray-700 p-1">Fullstack Developer</div>
        </div>
      </div>
      <div class="flex justify-end mr-3">
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
      <div class="absolute right-0 mt-14 mr-3 w-48 bg-dropdown space-y-1 py-2 px-2 z-50">
        {#each $navLinks as link}
          <a             
            href={($page.url.pathname == link.url) ? null : link.url} 
            on:click={resetClick} 
            class={getMobileButtonStyle(link)}>
            {link.name}
          </a>
        {/each}
      </div>
    {/if}
  </div>  
</div>
