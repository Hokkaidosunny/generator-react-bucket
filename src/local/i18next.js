import i18next from 'i18next';
import en from './languages/en.json';
import zh from './languages/zh.json';

i18next
  .init({
    lng: 'zh',
    fallbackLng: 'zh',
    debug: true,
    resources: {
      en: {
        translation: en
      },
      zh: {
        translation: zh
      }
    },

    // react i18next special options (optional)
    react: {
      wait: false, // set to true if you like to wait for loaded in every translated hoc
      nsMode: 'default' // set it to fallback to let passed namespaces to translated hoc act as fallbacks
    }
  });

export default i18next;
