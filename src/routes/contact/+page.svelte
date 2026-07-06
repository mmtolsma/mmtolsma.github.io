<script>
  import Heading from "../../components/Heading.svelte";

  // In dev there is no serverless function, so posting would either 405 or hit the
  // real production endpoint and send a real email. Instead, fake a successful send.
  const isDev = import.meta.env.DEV;

  let loading = false;
  let devSent = false;

  const handleSubmit = (event) => {
    if (isDev) {
      event.preventDefault();
      devSent = true;
      return;
    }
    // Production: let the native form POST to the Vercel function proceed.
    loading = true;
  };
</script>

<Heading>
  <span>Contact</span>
</Heading>

<div class="flex-1 overflow-y-auto">
  <div class="mx-3 mb-5 sm:mx-5">
    <div class="container mx-auto">
      {#if devSent}
        <div class="text-center py-10">
          <p class="text-xl font-bold text-yellow-500 mb-2">Message sent successfully!</p>
          <p class="text-gray-400 mb-6">Dev preview — no email was actually sent.</p>
          <button
            on:click={() => (devSent = false)}
            class="py-2 px-6 bg-yellow-500 text-gray-900 font-medium hover:bg-yellow-400 text-lg rounded"
          >
            Send another
          </button>
        </div>
      {:else}
        <p class="mb-4">Have a question or want to work together? Send me a message.</p>
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
            <button type="submit" class="py-2 px-6 bg-yellow-500 text-gray-900 font-medium hover:bg-yellow-400 text-lg rounded w-full sm:w-auto whitespace-nowrap disabled:opacity-70" disabled={loading}>
              {#if loading}
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
      {/if}
    </div>
  </div>
</div>
