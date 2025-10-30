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
              >Projetos</NuxtLink
            >
          </li>
          <li class="layout__nav-item">
            <NuxtLink to="/contact" class="layout__nav-link">Contato</NuxtLink>
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
        
          <theme-toggle />
        
      </span>
    </footer>
  </div>
</template>

<style scoped>
.layout{
  padding: 0 clamp(1rem, 5vw, 5rem);
}
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
  background-color: #F5F5F5;
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
      color: #525252;
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
  background-color: #E5E5E5;
}
.layout__nav-item:hover {
  transition: background-color 0.2s;
  background-color: #d4d4d4;
  color: #a3a3a3;
}

.layout__footer {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-top: 2px solid #a3a3a3;
  height: 80px;
  width: 100%;

}
.layout__footer-content {
  
  width: min(915px, 100%);
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;
}
.layout__footer-text {
  color: #a3a3a3;
}
.layout__btn-theme-toggle {
  width: 35px;
  height: 35px;
  background-color: transparent;
  border: none;
  cursor: pointer;
}
</style>
