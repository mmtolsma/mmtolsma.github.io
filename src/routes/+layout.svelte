<script>
  import "../app.css";
  import NavCard from '../components/NavCard.svelte';
  import BodyCard from '../components/BodyCard.svelte';
</script>

<!-- Main container always flex, vertical by default, flex-1 to fill height -->
<div class="flex flex-col min-h-screen md:container md:py-10 md:mx-auto transition-all">
  <!-- Container that switches from column to row on md -->
  <div class="flex flex-col flex-1 gap-5 md:flex-row md:flex-1 md:gap-5">
    <!-- NavCard occupies its content size on all views -->
    <div class="nav-card">
      <NavCard />
    </div>
    <!-- BodyCard grows to fill space on small screens, behaves per md:flex-1 on md and up -->
    <div class="body-card flex-1">
      <BodyCard>
        <slot />
      </BodyCard>
    </div>
  </div>
</div>
