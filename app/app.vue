<template>
  <div>
    <div class="menu-container">
      <NuxtLink to="/">EN</NuxtLink>
      <NuxtLink to="/fr">FR</NuxtLink>
      <NuxtLink to="/fa">FA</NuxtLink>
    </div>
    
    <NuxtPage />
  </div>
</template>

<style scoped>
.menu-container {
  display: flex;
  gap: 1rem;
}
</style>