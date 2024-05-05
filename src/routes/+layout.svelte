<script>
  import "../app.css";
  import NavCard from '../components/NavCard.svelte';
  import NavBar from '../components/NavBar.svelte';
  import BodyCard from '../components/BodyCard.svelte';
</script>

<div class="grid grid-cols-1 gap-5 justify-center md:mt-10 md:flex md:flex-row md:gap-5">
  <div class="nav-card">
    <NavCard />
  </div>
  <div class="body-card">
    <BodyCard>
      <slot />
    </BodyCard>
  </div>
</div>