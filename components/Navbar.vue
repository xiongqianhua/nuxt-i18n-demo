<template>
  <nav>
    <ul>
      <li><NuxtLink to="/">{{ $t('menu.home') }}</NuxtLink></li>
      <li @click="toggleProductMenu">
        {{ $t('menu.product') }}
        <ul v-if="showProductMenu">
          <li><NuxtLink to="/products/FlashBase">{{ $t('flashBase') }}</NuxtLink></li>
          <li><NuxtLink to="/products/FlashBot">{{ $t('flashBot') }}</NuxtLink></li>
          <li><NuxtLink to="/products/FlashNet">{{ $t('flashNet') }}</NuxtLink></li>
        </ul>
      </li>
      <li><NuxtLink to="/solutions">{{ $t('menu.solutions') }}</NuxtLink></li>
      <li><NuxtLink to="/our">{{ $t('menu.our') }}</NuxtLink></li>
      <li><NuxtLink to="/ecological">{{ $t('menu.ecological') }}</NuxtLink></li>
    </ul>
    <div>
      <label for="language-select">Change Language:</label>
      <select id="language-select" @change="changeLanguage($event)">
        <option v-for="locale in $i18n.locales" :key="locale.code" :value="locale.code">
          {{ locale.name }}
        </option>
      </select>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale, availableLocales } = useI18n()
const showProductMenu = ref(false)

const changeLanguage = (event) => {
  locale.value = event.target.value
}

const toggleProductMenu = () => {
  showProductMenu.value = !showProductMenu.value
}
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1rem;
  background-color: #f8f8f8;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 1rem;
}
li {
  cursor: pointer;
  position: relative;
}
ul ul {
  display: none;
  flex-direction: column;
  position: absolute;
  left: 0;
  top: 35px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 1rem;
}
li:hover > ul {
  display: flex;
}
</style>
