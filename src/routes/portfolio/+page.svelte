<script>
  import Heading from "../../components/Heading.svelte";

  let activeTab = "all"

  const items = [
    {id: 1, name: "Sound Clock", category: "old-projects", technologies: ["Dart", "Flutter"], link: "https://play.google.com/store/apps/details?id=com.toltech.soundclock", repo: null, image: "soundclock.png", description: "First self-made application published to the Google Play. Clock application that uses timers, and plays sounds at chosen intervals. Various settings to customise the clock and sounds to user’s needs."},
    {id: 2, name: "Local Hour", category: "old-projects", technologies: ["Dart", "Flutter", "Firebase"], link: null, repo: "Private Repository", image: "localhourlogo.png", description: "Kept track of which local restaurants were offering food specials."},
    {id: 3, name: "Golf Cart GPS and Pin Finder", category: "old-projects", technologies: ["Dart", "Flutter", "Java", "QGIS"], link: null, repo: "Private Repository", image: "flag-finder.jpg", description: "Kiosk mode, Android tablet application for a local golf resort. Keeps track of the golfcart’s current location, distance to pin, and distance to a position that was tapped on the screen. Used static images of each hole, and georeferenced the images to maintain accuracy. Approximately 40 golfcarts with Android tablets had this software installed."},
    {id: 4, name: "Job Card System", category: "old-projects", technologies: ["Dart", "Flutter", "JavaScript"], link: null, repo: "Private Repository", image: "job-card.png", description: "Android tablet application created for a local computer-repair business in order to move away from their paper-based system. Sends information of customers and job requests to Google Sheets for storage and future retrieval. Phone-text-notifications implemented using the Trello API."},
  ]

  let uniqueCategories = [...new Set(items.map(item => item.category))];

  function humanize(string) {
    return string
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  function selectTab(tab) {
    activeTab = tab
  }
  
  $: getFilteredItems = () => {
    if(activeTab == "all") {
      return items
    }

    return items.filter(item => item.category == activeTab)
  }
</script>

<Heading>
  <span>Portfolio</span>
</Heading>

<div class="flex-1 overflow-y-auto">
  <div class="mx-3 mb-5 sm:mx-5">
    <div class="mb-3">
      <button class={`py-2 px-4 ${activeTab === 'all' ? 'border-b-2 border-yellow-500 text-yellow-500' : ''}`} on:click={() => selectTab("all")}>
        All
      </button>
      {#each uniqueCategories as category}
        <button class={`py-2 px-4 ${activeTab === category ? 'border-b-2 border-yellow-500 text-yellow-500' : ''}`} on:click={() => selectTab(category)}>
          {humanize(category)}
        </button>
      {/each}
    </div>

    <div class="grid grid-cols-1 gap-3">
      {#each getFilteredItems() as item}
        <div class="bg-sub-card border border-sub-card-border rounded-lg p-4 text-center sm:text-left">
          <div class="sm:flex sm:flex-row items-center gap-5">
            <div class="sm:flex-none sm:justify-start">
              <img src="/{item.image}" class="w-16 h-16 mb-2 mx-auto sm:mb-0 sm:mx-0" alt="Michael Tolsma smiling" />
            </div>
            <div>
              <div class="text-2xl font-bold mb-1">
                {item.name}
              </div>
              <p class="text-yellow-500 mb-1">
                {item.technologies.join(', ')}
              </p>
              <p>
                {item.description}
              </p>
              {#if item.link}
                <div class="mt-1">
                  <a href={item.link} class="text-blue-500" target="_blank">
                    Link to App
                  </a>
                </div>
              {/if}
            </div>
          </div>
        </div>
      {/each}
    </div>
    <br>
  </div>
</div>

<!-- <div class="grid auto-rows-fr grid-cols-1 gap-2">
  {#each getFilteredItems() as item}
    <div class="bg-sub-card border border-sub-card-border flex flex-col justify-center rounded-lg p-4 text-center sm:text-left">
      <div class="sm:flex sm:flex-row items-center gap-5">
        <div class="sm:flex-none sm:justify-start">
          <img src="/{item.image}" class="w-16 h-16 mx-auto sm:mx-0" alt="Michael Tolsma smiling" />
        </div>
        <div>
          <div class="text-2xl font-bold">
            {item.name}
          </div>
          <p class="text-yellow-500">
            {item.technologies.join(', ')}
          </p>
          <p>
            {item.description}
            </p>
          {#if item.link}
            <a href={item.link} class="text-blue-500">
              {item.link}
            </a>
          {/if}
        </div>
      </div>
    </div>
  {/each}
</div> -->