import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import StyleToggle from './components/style_toggle.vue'
import Layout from './components/lay_out.vue'
import SnakeDemo from './demo/demo_snake.vue'

import './style.css'
import './old_school.css'

export default {
    extends: DefaultTheme,

    Layout: () =>
        h(Layout, null, {
            'nav-bar-content-after': () => h(StyleToggle)
        }),

    enhanceApp({ app }) {
        app.component('SnakeDemo', SnakeDemo)
    },
} satisfies Theme