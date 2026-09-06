// style_state.ts

import { ref } from 'vue'

export const oldSchool = ref(false)

export function toggleStyle() {
    oldSchool.value = !oldSchool.value

    document.documentElement.classList.toggle(
        'old-school',
        oldSchool.value
    )

    localStorage.setItem(
        'site-style',
        oldSchool.value ? 'old-school' : 'modern'
    )
}

export function initStyle() {
    oldSchool.value =
        localStorage.getItem('site-style') === 'old-school'

    document.documentElement.classList.toggle(
        'old-school',
        oldSchool.value
    )
}