<template>
  <div>
    <header>
      <nav>
        <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/">Projects</NuxtLink></li>
          <li><NuxtLink to="/">Contact</NuxtLink></li>
        </ul>
      </nav>
    </header>

    <main>
      <slot />
    </main>

    <footer>
      <p>&copy; 2024 - {{ new Date().getFullYear() }} Built by Wellington</p>
      <button>
        <svg>dark</svg>
        <svg>light</svg>
        <span>Toggle theme</span>
      </button>
    </footer>
  </div>
</template>
