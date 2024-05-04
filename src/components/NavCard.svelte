<div class="nav-card">
  <!-- <img src="#" alt="Profile Picture" class="profile-pic"> -->
  
  <nav>
    <button onclick="location.href='/'">home</button>
    <button onclick="location.href='/about'">about</button>
    <button onclick="location.href='/resume'">resume</button>
    <button onclick="location.href='/portfolio'">portfolio</button>
    <button onclick="location.href='/contact'">contact</button>
  </nav>
</div>

<style>
  .nav-card {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #183D3D;
    border-radius: 10px;
    height: 100%;
    width: 200px;
  }

  nav {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  
  /* .profile-pic {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-bottom: 20px;
  } */

  @media (max-width: 600px) {
    .nav-card {
      padding: 5px;
    }
    /* .profile-pic {
      width: 40px;
      height: 40px;
    } */
  }
</style>
