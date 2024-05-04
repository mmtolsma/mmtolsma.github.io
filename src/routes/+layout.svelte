<script>
  import "../app.css";
  import NavCard from '../components/NavCard.svelte';
  import BodyCard from '../components/BodyCard.svelte';
</script>

<div class="mx-auto p-12 flex flex-row gap-5 min-h-screen">
  <div class="nav-card">
    <NavCard />
  </div>
  <div class="body-card flex-grow">
    <BodyCard>
      <slot />
    </BodyCard>
  </div>
</div>

<style>
  :global(body) {
    background-color: #040D12;
    color: white;
    overflow: hidden;
    margin: 0;
    box-sizing: border-box;
  }
</style>