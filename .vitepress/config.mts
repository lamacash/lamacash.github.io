import { defineConfig } from 'vitepress';
import { nav, sidebar } from './navigations';

export default defineConfig({
  base: '/',
  srcDir: './docs',
  markdown: {
    container: {
      tipLabel: 'Подсказка',
      warningLabel: 'Внимание',
      dangerLabel: 'Осторожно',
      infoLabel: 'Информация',
      detailsLabel: 'Подробнее',
    },
  },
  lang: 'ru-RU',
  title: 'LamaCash',
  description: 'Фановый сайт проекта',
  themeConfig: {
    notFound: {
      title: 'Не найдено :(',
      quote: "Как ты сюда вообще попал?", // set to '' to hide
      linkLabel: 'Домой', // aria-label
      linkText: 'Домой',
      code: '404'
    },
    editLink: {
      pattern: 'https://t.me/felix4080official',
      text: 'Ошибка на сайте?',
    },
    logo: '/logo.png',
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: 'Поиск',
                buttonAriaLabel: 'Поиск',
              },
              modal: {
                displayDetails: 'Отобразить подробный список',
                resetButtonTitle: 'Сбросить поиск',
                backButtonTitle: 'Закрыть поиск',
                noResultsText: 'Нет результатов по запросу',
                footer: {
                  selectText: 'выбрать',
                  selectKeyAriaLabel: 'выбрать',
                  navigateText: 'перейти',
                  navigateUpKeyAriaLabel: 'стрелка вверх',
                  navigateDownKeyAriaLabel: 'стрелка вниз',
                  closeText: 'закрыть',
                  closeKeyAriaLabel: 'esc',
                },
              },
            },
          },
        },
      },
    },
    nav,
    sidebar,
    socialLinks: [
      { icon: 'telegram', link: 'https://t.me/LamaCashApp' },
      { icon: 'googleplay', link: 'https://play.google.com/store/apps/details?id=com.joyreward.lamacash' },
    ],
    outlineTitle: 'Оглавление',
    returnToTopLabel: 'Наверх',
    sidebarMenuLabel: 'Меню',
    darkModeSwitchLabel: 'Тема',
    docFooter: {
      prev: 'Предыдущая страница',
      next: 'Следующая страница',
    },
  },
  head: [
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css',
      },
    ],
    ['link', { rel: 'icon', href: 'cube.png' }],
  ],
  cleanUrls: true,
});
