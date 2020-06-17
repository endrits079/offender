<template>
  <div>
    <header class="header">
      <a href="index.html" class="logo">Offender</a>
      <nav class="nav">
        <ul>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="add">Register Offender</router-link>
          </li>
        </ul>
      </nav>
      <div class="hamburger">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </header>
    <nav class="nav-mobile">
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="add">Register Offender</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>



<style>
:root {
  --mainBG: #eaa515;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
/* header  */
.header {
  min-height: 70px;
  display: flex;
  justify-content: space-evenly;
  background-color: var(--mainBG);
  align-items: center;
}

.nav ul li {
  display: inline-block;
}

.nav ul li a {
  text-decoration: none;
  color: white;
  padding: 10px 26px;
  font-size: 1.04rem;
  transition: background 0.2s linear;
}

.nav a:active,
.nav a.active {
  background-color: #ffae00;
}

.nav a:hover {
  background-color: #fcbe38;
}

.logo {
  display: inline-block;
  text-decoration: none;
  color: white;
  border: 2px solid white;
  padding: 10px 25px;
  margin-right: 255px;
}
.hamburger {
  width: 50px;
  border: 2px solid white;
  display: none;
  cursor: pointer;
  padding: 3px;
}

.hamburger div {
  width: 90%;
  height: 3px;
  margin: 6px auto;
  background-color: white;
}
/* end of header  */

/* nav mobile  */
.nav-mobile {
  background-color: var(--mainBG);
  display: none;
}
.nav-mobile li {
  text-align: center;
  margin: 13px 0;
}
.nav-mobile li:first-of-type {
  margin-top: 0;
  padding-top: 25px;
}
.nav-mobile li:last-of-type {
  padding-bottom: 5px;
  margin-bottom: 0;
}
.nav-mobile a {
  text-decoration: none;
  color: white;
  font-size: 1.09rem;
}
/* end of nav mobile  */
</style>