import { defineConfig } from 'vitepress'

export default defineConfig({
    title: 'Froth Groups',
    description: 'A place for our projects and creations',
    base: '/',
    locales: {
        root: {
            label: '中文',
            lang: 'zh-CN',
            themeConfig: {
                nav: [
                    { text: '首页', link: '/' },
                    {
                        text: '绿螳螂',
                        items: [
                            { text: '文章', link: 'https://mp.weixin.qq.com/s/rMglvCU37QpDTODtxht_cw' },
                            { text: '哔哩哔哩', link: 'https://space.bilibili.com/652092523' },
                            { text: 'GitHub', link: 'https://github.com/mosss-sky' }
                        ]
                    },
                    {
                        text: '液体',
                        items: [
                            { text: '哔哩哔哩', link: 'https://space.bilibili.com/505225642' },
                            { text: 'GitHub', link: 'https://github.com/KM-4869' }
                        ]
                    },
                    {
                        text: '五子棋',
                        items: [
                            { text: '哔哩哔哩', link: 'https://space.bilibili.com/506169812' }
                        ]
                    },
                    { text: '关于', link: '/about' }
                ]
            }
        },
        en: {
            label: 'English',
            lang: 'en',
            themeConfig: {
                nav: [
                    { text: 'Home', link: '/en' },
                    {
                        text: 'Mosss',
                        items: [
                            { text: 'Article', link: '/en/mosss/article' },
                            { text: 'Bilibili', link: 'https://space.bilibili.com/652092523' },
                            { text: 'GitHub', link: 'https://github.com/mosss-sky' }
                        ]
                    },
                    {
                        text: 'K_M',
                        items: [
                            { text: 'Bilibili', link: 'https://space.bilibili.com/505225642' },
                            { text: 'GitHub', link: 'https://github.com/KM-4869' }
                        ]
                    },
                    {
                        text: 'God_Shy',
                        items: [
                            { text: 'Bilibili', link: 'https://space.bilibili.com/506169812' }
                        ]
                    },
                    { text: 'About', link: '/en/about' }
                ]
            }
        }
    },
    themeConfig: {
        socialLinks: [
            { icon: 'github', link: 'https://github.com/VoxPonds/SDLFramework' }
        ]
    }
})