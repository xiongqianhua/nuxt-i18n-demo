<!--
 * @Author: qianhua.xiong
-->
<script setup>
const localePath = useLocalePath()
</script>

<template>
  <NuxtLink :to="localePath('/')">{{ $t('menu.home') }}</NuxtLink>
  <NuxtLink :to="localePath('index')">{{ $t('menu.home') }}</NuxtLink>
  <!-- <NuxtLink :to="localePath('product')">{{ $t('menu.product') }}</NuxtLink> -->
  <NuxtLink :to="localePath('solutions')">{{ $t('menu.solutions') }}</NuxtLink>
  <NuxtLink :to="localePath('our')">{{ $t('menu.our') }}</NuxtLink>
  <NuxtLink :to="localePath('ecological')">{{ $t('menu.ecological') }}</NuxtLink>
  <!-- <NuxtLink :to="localePath('index', 'en')">Homepage in English</NuxtLink>
  <NuxtLink :to="localePath('/user/profile')">Route by path to: {{ $t('profile') }}</NuxtLink>
  <NuxtLink :to="localePath('user-profile')">Route by name to: {{ $t('profile') }}</NuxtLink>
  <NuxtLink :to="localePath({ name: 'category-slug', params: { slug: category.slug } })">
    {{ category.title }}
  </NuxtLink> -->
  
</template>
