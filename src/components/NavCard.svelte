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

<div class="rounded-lg min-w-[250px] bg-[#183D3D] h-full">
  {#if $windowWidth >= 768}
    <div class="flex flex-col items-center">
      <img src="/profile-pic.png" class="my-3 rounded w-32 h-32" alt="Michael Tolsma smiling" />
      <nav class="grid grid-cols-1">
        {#each $navLinks as link}
          <a href={link.url} class="button mb-2 text-center hover:bg-gray-700">{link.name}</a>
        {/each}
      </nav>
    </div>
  {:else}
    <div class="flex flex-col">
      <div class="px-2 flex justify-between items-center">
        <div>Michael Tolsma</div>
        <button on:click={handleClick} class="flex justify-end items-center">
          <div class="{clicked ? 'p-3 fa fa-xmark text-2xl hover:bg-gray-700' : 'p-3 fa fa-bars text-2xl hover:bg-gray-700'}"></div>
        </button>
      </div>
      {#if clicked}
        <div class="absolute right-0 mt-14 mr-2 w-48 bg-[#538374] space-y-1 py-2 px-2">
          {#each $navLinks as link}
            <a href={link.url} on:click={resetClick} class="text-white hover:bg-gray-700 block px-3 py-2 text-base font-medium">{link.name}</a>
          {/each}
        </div>
      {/if}
    </div>
  {/if}
</div>
