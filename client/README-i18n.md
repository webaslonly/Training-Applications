# Система интернационализации (i18n)

Этот проект использует систему переводов для поддержки трех языков: английский (EN), узбекский (UZ) и русский (RU).

## 🌍 Поддерживаемые языки

- **EN** - English (Английский)
- **UZ** - O'zbekcha (Узбекский)  
- **RU** - Русский (Русский)

## 📁 Структура файлов

- `src/lib/i18n.ts` - Основные переводы и типы
- `src/contexts/language-context.tsx` - React контекст для управления языком
- `src/components/shared/navbar.tsx` - Обновленная навигация с переводами
- `src/pages/home/page.tsx` - Главная страница с переводами
- `src/app/courses/adobe-after-effects/page.tsx` - Страница Adobe After Effects
- `src/app/courses/adobe-photoshop/page.tsx` - Страница Adobe Photoshop
- `src/app/courses/adobe-premiere-pro/page.tsx` - Страница Adobe Premiere Pro

## 🚀 Использование

### 1. Переключение языков

В navbar есть компонент Select для переключения между языками. Выбранный язык автоматически сохраняется в localStorage.

### 2. Использование переводов в компонентах

```tsx
import { useLanguage } from '@/contexts/language-context';

function MyComponent() {
  const { t, currentLanguage, setLanguage } = useLanguage();
  
  return (
    <div>
      <h1>{t('nav.home')}</h1>
      <p>Current language: {currentLanguage}</p>
      <button onClick={() => setLanguage('uz')}>
        Switch to Uzbek
      </button>
    </div>
  );
}
```

### 3. Доступные ключи переводов

#### Навигация (`nav.*`)
- `nav.home` - Главная
- `nav.training` - Тренировка
- `nav.search` - Поиск
- `nav.favorites` - Избранное
- `nav.logIn` - Войти
- `nav.signUp` - Регистрация
- `nav.language` - Язык

#### Главная страница (`home.*`)
- `home.title` - Заголовок
- `home.subtitle` - Подзаголовок
- `home.getStarted` - Начать
- `home.learnMore` - Узнать больше

#### Курсы (`courses.*`)
- `courses.title` - Заголовок курсов
- `courses.description` - Описание курсов
- `courses.enroll` - Записаться
- `courses.viewCourse` - Посмотреть курс

#### Adobe After Effects (`adobeAfterEffects.*`)
- `adobeAfterEffects.title` - Заголовок
- `adobeAfterEffects.description` - Описание
- `adobeAfterEffects.whatYouWillLearn` - Что вы изучите

#### Adobe Photoshop (`adobePhotoshop.*`)
- `adobePhotoshop.title` - Заголовок
- `adobePhotoshop.description` - Описание
- `adobePhotoshop.whatYouWillLearn` - Что вы изучите

#### Adobe Premiere Pro (`adobePremierePro.*`)
- `adobePremierePro.title` - Заголовок
- `adobePremierePro.description` - Описание
- `adobePremierePro.whatYouWillLearn` - Что вы изучите

#### Общие элементы (`common.*`)
- `common.loading` - Загрузка
- `common.watch` - Смотреть
- `common.video` - Видео
- `common.back` - Назад
- `common.next` - Следующий
- И другие...

### 4. Добавление новых переводов

1. Обновите интерфейс `Translations` в `src/lib/i18n.ts`
2. Добавьте переводы для всех поддерживаемых языков
3. Используйте `t('new.key')` в компонентах

```tsx
// В src/lib/i18n.ts
export interface Translations {
  // ... существующие переводы
  newSection: {
    title: string;
    description: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    // ... существующие переводы
    newSection: {
      title: 'New Section',
      description: 'Description of new section',
    },
  },
  uz: {
    // ... существующие переводы
    newSection: {
      title: 'Yangi bo\'lim',
      description: 'Yangi bo\'lim haqida ma\'lumot',
    },
  },
  ru: {
    // ... существующие переводы
    newSection: {
      title: 'Новый раздел',
      description: 'Описание нового раздела',
    },
  },
};
```

## ✨ Особенности

- **Автосохранение**: Выбранный язык сохраняется в localStorage
- **Типизация**: Полная поддержка TypeScript
- **Легкость расширения**: Простое добавление новых переводов
- **Интеграция**: Работает с существующими shadcn/ui компонентами
- **Поддержка вложенных ключей**: Используйте `t('section.subsection.key')`
- **Автоматическое переключение**: Все страницы автоматически переводятся

## 🔧 Техническая информация

Система использует React Context API для управления состоянием языка и автоматически обновляет все компоненты при смене языка. Все переводы типизированы с помощью TypeScript для предотвращения ошибок. 