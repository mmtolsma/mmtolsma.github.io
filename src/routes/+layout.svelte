<script>
  import NavCard from '../components/NavCard.svelte';
  import BodyCard from '../components/BodyCard.svelte';
  import "../app.css";
</script>

<div class="container">
  <div class="nav-card">
    <NavCard />
  </div>
  <div class="body-card">
    <BodyCard>
      <slot />
    </BodyCard>
  </div>
</div>

<style>
  :global(body) {
    background-color: #040D12;
    color: #FFFFFF;
    overflow: hidden;
    margin: 0;
    box-sizing: border-box;
  }

  .container {
    margin: auto;
    padding: 50px 200px 50px 200px;
    display: flex;
    flex-direction: row;
    gap: 20px;
    min-height: 100vh;
    box-sizing: border-box;
  }

  .body-card {
    flex-grow: 1;
  }
</style>
