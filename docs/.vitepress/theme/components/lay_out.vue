<script setup lang="ts">
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { oldSchool } from '../style_state'

const { site, theme, localeIndex } = useData()
</script>

<template>
  <DefaultTheme.Layout v-if="!oldSchool">
    <template #nav-bar-content-after>
      <slot name="nav-bar-content-after" />
    </template>
  </DefaultTheme.Layout>

  <div v-else class="old-school-layout">
    <header class="old-school-header">
      <div class="old-school-header-inner">
        <a class="old-school-title" :href="localeIndex === 'root' ? '/' : '/en'">
          {{ site.title }}
        </a>
        <nav class="old-school-nav">
          <template v-for="item in theme.nav" :key="item.text">
            <a v-if="item.link" :href="item.link">
              {{ item.text }}
            </a>
            <span v-else-if="item.items">
              {{ item.text }}
              <span
                v-for="subItem in item.items"
                :key="subItem.text"
              >
              <a :href="subItem.link">
                  {{ subItem.text }}
              </a>
              </span>
            </span>

          </template>
        </nav>

        <slot name="nav-bar-content-after" />

      </div>
    </header>

    <main class="old-school-content">
      <Content />
    </main>

    <footer class="old-school-footer">
      <hr>
      <p>© {{ site.title }}</p>
    </footer>
  </div>
</template>