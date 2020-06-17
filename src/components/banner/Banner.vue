<template>
  <section id="content">
    <div class="banner">
      <h1 class="banner-title">Offender</h1>
      <div class="divider"></div>
      <h2 class="banner-subtitle">the easy way to</h2>
      <router-link to="/">Find out</router-link>
    </div>
  </section>
</template>

<style>
/* banner  */
.banner {
  min-height: calc(100vh - 70px);
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("./download.jpg") center/cover scroll no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  margin-bottom: 50px;
}
.banner-title {
  font-size: 3rem;
  letter-spacing: 5.8px;
}
.divider {
  width: 400px;
  height: 3px;
  background-color: #eaa515;
  margin: 10px 0;
}
.banner-subtitle {
  font-size: 1.8rem;
  text-transform: capitalize;
}
.banner a {
  text-decoration: none;
  color: white;
  background-color: var(--mainBG);
  padding: 15px 40px;
  border-radius: 100px;
  margin-top: 30px;
  transition: all 0.15s linear;
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
}

.banner a:hover {
  transform: translateY(-10px) scale(1.1);
  box-shadow: 0 15px 5px #0000004d;
}
.banner a:active {
  transform: translateY(-5px);
  box-shadow: 0 7px 5px #0000004d;
}
/* end of banner */
@media screen and (max-width: 580px) {
  .logo {
    margin-right: 0;
  }
}
@media screen and (max-width: 480px) {
  .nav {
    display: none;
  }
  .hamburger {
    display: block;
  }
  .nav-mobile {
    display: block;
  }
  .divider {
    width: 90%;
  }
}
</style>
