<template>
<slot/>
  <div class="layout">
    <header class="layout__header">
      <nav class="layout__nav">
        <ul class="layout__nav-list">
          <li class="layout__nav-item">
            <NuxtLink to="/" class="layout__nav-link">Home</NuxtLink>
          </li>
          <li class="layout__nav-item">
            <NuxtLink to="/projects" class="layout__nav-link"
              >Projects</NuxtLink
            >
          </li>
          <li class="layout__nav-item">
            <NuxtLink to="/contact" class="layout__nav-link">Contact</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>

    <main class="layout__main">
      <NuxtPage/>
    </main>

    <footer class="layout__footer">
      <span class="layout__footer-content">
        <p class="layout__footer-text">
          &copy; 2024 - {{ new Date().getFullYear() }} • Built by Wellington
        </p>
        <button class="layout__btn-theme-toggle"></button>
      </span>
    </footer>
  </div>
</template>

<style scoped>

.layout__header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
}
.layout__nav {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 55px;
  width: min(100%, 350px);
  background-color: #171717;
  border-radius: 15px;
  & .layout__nav-list {
    display: flex;
    align-items: center;
    list-style: none;
    flex-direction: row;
    height: 100%;
    gap: 15px;

    & a {
      text-decoration: none;
      color: #fff;
    }
  }
}

.layout__nav-item {
  display: flex;
  justify-content: center;
  align-items: center;
  height: min(100%, 40px);
  width: 100px;
  border-radius: 15px;
  background-color: #373737;
}
.layout__nav-item:hover {
  transition: background-color 0.2s;
  background-color: #262626;
  color: #a3a3a3;
}

.layout__footer {
  display: flex;
  flex-direction: row;
  align-items: center;
  border-top: 2px solid #a3a3a3;
}
.layout__footer-content {
  margin-top: 35px;
  width: 100%;
  display: flex;
  flex-direction: row;

  justify-content: space-around;
  align-items: center;
}
.layout__footer-text {
  color: #a3a3a3;
}
.layout__btn-theme-toggle {
  width: 35px;
  height: 35px;
}
</style>
