<script setup lang="ts">
import { withLeadingSlash } from 'ufo'
import type { Collections } from '@nuxt/content'

const route = useRoute()
const { locale, localeProperties } = useI18n()
const slug = computed(() => withLeadingSlash(String(route.params.slug)))

const { data: page } = await useAsyncData('page-' + slug.value, async () => {
  const collection = ('content_' + locale.value) as keyof Collections
  return queryCollection(collection).path(slug.value).first()
}, { watch: [locale] })

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

useSeoMeta(page.value.seo)
</script>

<template>
  <ContentRenderer
    v-if="page"
    :dir="localeProperties?.dir ?? 'ltr'"
    :value="page"
  />
</template>