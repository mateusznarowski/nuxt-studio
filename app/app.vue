<template>
  <div>
    <pre>currentLocale: {{ locale }}</pre>
    <pre>navigation: {{ navigation?.length ?? 0 }}</pre>

    <div class="menu-container">
      <template v-for="_locale in locales">
        <button @click="setLocale(_locale.code)">{{ _locale.name }}</button>
      </template>
    </div>

    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import type { Collections } from '@nuxt/content'

const { setLocale, locales, locale } = useI18n()

const { data: navigation } = await useAsyncData('navigation-' + locale.value, () => {
  const collection = ('content_' + locale.value) as keyof Collections
  return queryCollectionNavigation(collection)
}, { watch: [locale] })

watch(navigation, () => {
  console.log({ navigation: navigation.value })
}, { immediate: true})
</script>

<style scoped>
.menu-container {
  display: flex;
  gap: 1rem;
}
</style>