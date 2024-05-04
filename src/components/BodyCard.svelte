<div class="body-card">
  <slot />
</div>

<style>
  .body-card {
    padding: 20px;
    background: #183D3D;
    border-radius: 10px;
    height: 100%;
  }

  @media (max-width: 600px) {
    .body-card {
      padding: 5px;
    }
  }
</style>
