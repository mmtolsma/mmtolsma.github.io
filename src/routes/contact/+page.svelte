<script>
  import Heading from "../../components/Heading.svelte";
  import { writable } from 'svelte/store';

  let loading = writable(false);

  const handleSubmit = () => {
    loading.set(true);
  };
</script>

<Heading>
  <span>Contact</span>
</Heading>

<div class="flex-1 overflow-y-auto">
  <div class="mx-3 mb-5 sm:mx-5">
    <div class="container mx-auto">
      <h1 class="text-2xl font-bold mb-4">Contact Form</h1>
      <form action={import.meta.env.VITE_VERCEL_URL} method="POST" class="space-y-4 text-black" on:submit={handleSubmit}>
        <div class="grid grid-cols-1 gap-4 sm:flex sm:space-x-4">
          <div class="flex-1">
            <input type="text" name="name" class="w-full p-2 border border-gray-300 rounded" placeholder="Full Name" required>
          </div>
          <div class="flex-1">
            <input type="email" name="email" class="w-full p-2 border border-gray-300 rounded" placeholder="Email Address" required>
          </div>
        </div>
        <div>
          <textarea placeholder="Your Message" class="w-full p-2 border border-gray-300 rounded" name="message" rows="10" required></textarea>
        </div>
        <div class="flex flex-row sm:justify-end">
          <button type="submit" class="p-4 bg-black text-white text-lg rounded w-full sm:w-[150px]" disabled={$loading}>
            {#if $loading}
              <svg class="animate-spin h-5 w-5 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
              </svg>
            {:else}
              Send Message
            {/if}
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
