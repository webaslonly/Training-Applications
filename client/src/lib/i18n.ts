export type Language = 'en' | 'uz' | 'ru';

export interface Translations {
  nav: {
    home: string;
    training: string;
    search: string;
    favorites: string;
    logIn: string;
    signUp: string;
    language: string;
  };
  home: {
    title: string;
    subtitle: string;
    getStarted: string;
    learnMore: string;
  };
  courses: {
    title: string;
    description: string;
    enroll: string;
    viewCourse: string;
    duration: string;
    level: string;
    instructor: string;
  };
  adobeAfterEffects: {
    title: string;
    description: string;
    whatYouWillLearn: string;
    courseContent: string;
    requirements: string;
    targetAudience: string;
    benefits: string;
  };
  adobePhotoshop: {
    title: string;
    description: string;
    whatYouWillLearn: string;
    courseContent: string;
    requirements: string;
    targetAudience: string;
    benefits: string;
  };
  adobePremierePro: {
    title: string;
    description: string;
    whatYouWillLearn: string;
    courseContent: string;
    requirements: string;
    targetAudience: string;
    benefits: string;
  };
  common: {
    loading: string;
    error: string;
    success: string;
    cancel: string;
    save: string;
    delete: string;
    edit: string;
    back: string;
    next: string;
    previous: string;
    here: string;
    to: string;
    start: string;
    learning: string;
    watch: string;
    video: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      training: 'Training',
      search: 'Search',
      favorites: 'Favorites',
      logIn: 'Log In',
      signUp: 'Sign Up',
      language: 'Language',
    },
    home: {
      title: 'Professional Training Courses',
      subtitle: 'All good and reliable training for Ae, Pr and Ps is here',
      getStarted: 'start',
      learnMore: 'Learn More',
    },
    courses: {
      title: 'Browse of our free training',
      description: 'The training you will need',
      enroll: 'Enroll Now',
      viewCourse: 'Find Trainings',
      duration: 'Duration',
      level: 'Level',
      instructor: 'Instructor',
    },
    adobeAfterEffects: {
      title: 'Adobe After Effects',
      description: 'After Effects is a powerful tool for creating and editing video animations. It is used by professionals in the film, television, and web industries to create stunning visual effects, animations, and motion graphics.',
      whatYouWillLearn: 'What You Will Learn',
      courseContent: 'Course Content',
      requirements: 'Requirements',
      targetAudience: 'Target Audience',
      benefits: 'Benefits',
    },
    adobePhotoshop: {
      title: 'Adobe Photoshop',
      description: 'Photoshop is a powerful tool for creating and editing images. It is used by professionals in the film, television, and web industries to create stunning visual effects, animations, and motion graphics.',
      whatYouWillLearn: 'What You Will Learn',
      courseContent: 'Course Content',
      requirements: 'Requirements',
      targetAudience: 'Target Audience',
      benefits: 'Benefits',
    },
    adobePremierePro: {
      title: 'Adobe Premiere Pro',
      description: 'Premiere Pro is a powerful tool for creating and editing videos. It is used by professionals in the film, television, and web industries to create stunning visual effects, animations, and motion graphics.',
      whatYouWillLearn: 'What You Will Learn',
      courseContent: 'Course Content',
      requirements: 'Requirements',
      targetAudience: 'Target Audience',
      benefits: 'Benefits',
    },
    common: {
      loading: 'Loading...',
      error: 'An error occurred',
      success: 'Success!',
      cancel: 'Cancel',
      save: 'Save',
      delete: 'Delete',
      edit: 'Edit',
      back: 'Back',
      next: 'Next',
      previous: 'Previous',
      here: 'here',
      to: 'to',
      start: 'start',
      learning: 'learning',
      watch: 'Watch',
      video: 'Video',
    },
  },
  uz: {
    nav: {
      home: 'Bosh sahifa',
      training: 'Mashg\'ulot',
      search: 'Qidirish',
      favorites: 'Sevimlilar',
      logIn: 'Kirish',
      signUp: 'Ro\'yxatdan o\'tish',
      language: 'Til',
    },
    home: {
      title: 'Professional Mashg\'ulot Kurslari',
      subtitle: 'Ae, Pr va Ps uchun barcha yaxshi va ishonchli mashg\'ulotlar shu yerda',
      getStarted: 'boshlash',
      learnMore: 'Ko\'proq ma\'lumot',
    },
    courses: {
      title: 'Bizning bepul mashg\'ulotlarni ko\'ring',
      description: 'Sizga kerak bo\'lgan mashg\'ulot',
      enroll: 'Hozir ro\'yxatdan o\'ting',
      viewCourse: 'Mashg\'ulotlarni topish',
      duration: 'Davomiyligi',
      level: 'Darajasi',
      instructor: 'O\'qituvchi',
    },
    adobeAfterEffects: {
      title: 'Adobe After Effects',
      description: 'After Effects - bu video animatsiyalarni yaratish va tahrirlash uchun kuchli vosita. U kino, televidenie va veb-sanoatdagi mutaxassislar tomonidan ajoyib vizual effektlar, animatsiyalar va harakatli grafikalar yaratish uchun ishlatiladi.',
      whatYouWillLearn: 'Nimalarni o\'rganasiz',
      courseContent: 'Kurs mazmuni',
      requirements: 'Talablar',
      targetAudience: 'Maqsadli auditoriya',
      benefits: 'Afzalliklar',
    },
    adobePhotoshop: {
      title: 'Adobe Photoshop',
      description: 'Photoshop - bu rasm yaratish va tahrirlash uchun kuchli vosita. U kino, televidenie va veb-sanoatdagi mutaxassislar tomonidan ajoyib vizual effektlar, animatsiyalar va harakatli grafikalar yaratish uchun ishlatiladi.',
      whatYouWillLearn: 'Nimalarni o\'rganasiz',
      courseContent: 'Kurs mazmuni',
      requirements: 'Talablar',
      targetAudience: 'Maqsadli auditoriya',
      benefits: 'Afzalliklar',
    },
    adobePremierePro: {
      title: 'Adobe Premiere Pro',
      description: 'Premiere Pro - bu video yaratish va tahrirlash uchun kuchli vosita. U kino, televidenie va veb-sanoatdagi mutaxassislar tomonidan ajoyib vizual effektlar, animatsiyalar va harakatli grafikalar yaratish uchun ishlatiladi.',
      whatYouWillLearn: 'Nimalarni o\'rganasiz',
      courseContent: 'Kurs mazmuni',
      requirements: 'Talablar',
      targetAudience: 'Maqsadli auditoriya',
      benefits: 'Afzalliklar',
    },
    common: {
      loading: 'Yuklanmoqda...',
      error: 'Xatolik yuz berdi',
      success: 'Muvaffaqiyatli!',
      cancel: 'Bekor qilish',
      save: 'Saqlash',
      delete: 'O\'chirish',
      edit: 'Tahrirlash',
      back: 'Orqaga',
      next: 'Keyingi',
      previous: 'Oldingi',
      here: 'shu yerda',
      to: 'uchun',
      start: 'boshlash',
      learning: 'o\'rganish',
      watch: 'Ko\'rish',
      video: 'Video',
    },
  },
  ru: {
    nav: {
      home: 'Главная',
      training: 'Тренировка',
      search: 'Поиск',
      favorites: 'Избранное',
      logIn: 'Войти',
      signUp: 'Регистрация',
      language: 'Язык',
    },
    home: {
      title: 'Профессиональные курсы обучения',
      subtitle: 'Все хорошие и надежные курсы для Ae, Pr и Ps здесь',
      getStarted: 'начать',
      learnMore: 'Узнать больше',
    },
    courses: {
      title: 'Просмотрите наши бесплатные курсы',
      description: 'Курсы, которые вам понадобятся',
      enroll: 'Записаться сейчас',
      viewCourse: 'Найти курсы',
      duration: 'Продолжительность',
      level: 'Уровень',
      instructor: 'Инструктор',
    },
    adobeAfterEffects: {
      title: 'Adobe After Effects',
      description: 'After Effects - это мощный инструмент для создания и редактирования видео-анимаций. Он используется профессионалами в кино, телевидении и веб-индустрии для создания потрясающих визуальных эффектов, анимаций и моушн-графики.',
      whatYouWillLearn: 'Что вы изучите',
      courseContent: 'Содержание курса',
      requirements: 'Требования',
      targetAudience: 'Целевая аудитория',
      benefits: 'Преимущества',
    },
    adobePhotoshop: {
      title: 'Adobe Photoshop',
      description: 'Photoshop - это мощный инструмент для создания и редактирования изображений. Он используется профессионалами в кино, телевидении и веб-индустрии для создания потрясающих визуальных эффектов, анимаций и моушн-графики.',
      whatYouWillLearn: 'Что вы изучите',
      courseContent: 'Содержание курса',
      requirements: 'Требования',
      targetAudience: 'Целевая аудитория',
      benefits: 'Преимущества',
    },
    adobePremierePro: {
      title: 'Adobe Premiere Pro',
      description: 'Premiere Pro - это мощный инструмент для создания и редактирования видео. Он используется профессионалами в кино, телевидении и веб-индустрии для создания потрясающих визуальных эффектов, анимаций и моушн-графики.',
      whatYouWillLearn: 'Что вы изучите',
      courseContent: 'Содержание курса',
      requirements: 'Требования',
      targetAudience: 'Целевая аудитория',
      benefits: 'Преимущества',
    },
    common: {
      loading: 'Загрузка...',
      error: 'Произошла ошибка',
      success: 'Успешно!',
      cancel: 'Отмена',
      save: 'Сохранить',
      delete: 'Удалить',
      edit: 'Редактировать',
      back: 'Назад',
      next: 'Следующий',
      previous: 'Предыдущий',
      here: 'здесь',
      to: 'чтобы',
      start: 'начать',
      learning: 'обучение',
      watch: 'Смотреть',
      video: 'Видео',
    },
  },
};

export const languageNames: Record<Language, string> = {
  en: 'EN',
  uz: 'UZ',
  ru: 'RU',
};

export const languageFullNames: Record<Language, string> = {
  en: 'English',
  uz: 'O\'zbekcha',
  ru: 'Русский',
}; 