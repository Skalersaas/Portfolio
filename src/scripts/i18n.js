// src/i18n.js
import { createI18n } from 'vue-i18n';

import aboutmeEn from '@/locales/en/aboutme.json';
import expEn from '@/locales/en/experience.json';
import eduEn from '@/locales/en/education.json';
import contactsEn from '@/locales/en/contacts.json';
import certificationsEn from '@/locales/en/certifications.json';
import navigationEn from '@/locales/en/navigation.json';
import projectsEn from '@/locales/en/projects.json';


import aboutmeRu from '@/locales/ru/aboutme.json';
import expRu from '@/locales/ru/experience.json';
import eduRu from '@/locales/ru/education.json';
import contactsRu from '@/locales/ru/contacts.json';
import certificationsRu from '@/locales/ru/certifications.json';
import navigationRu from '@/locales/ru/navigation.json';
import projectsRu from '@/locales/ru/projects.json';

import aboutmeAz from '@/locales/az/aboutme.json';
import expAz from '@/locales/az/experience.json';
import eduAz from '@/locales/az/education.json';
import contactsAz from '@/locales/az/contacts.json';
import certificationsAz from '@/locales/az/certifications.json';
import navigationAz from '@/locales/az/navigation.json';
import projectsAz from '@/locales/az/projects.json';

const messages = {
	en: {
		aboutme: aboutmeEn,
		experience: expEn,
		education: eduEn,
		contacts: contactsEn,
		certifications:certificationsEn,
		navigation:navigationEn,
		projects:projectsEn,
	},
	ru: {
		aboutme: aboutmeRu,
		experience: expRu,
		education: eduRu,
		contacts: contactsRu,
		certifications:certificationsRu,
		navigation:navigationRu,
		projects:projectsRu,
	},	
	az: {
		aboutme: aboutmeAz,
		experience: expAz,
		education: eduAz,
		contacts: contactsAz,
		certifications:certificationsAz,
		navigation:navigationAz,
		projects:projectsAz,
	},
};

// Настройка i18n
const i18n = createI18n({
	locale: localStorage.getItem('locale'), // Язык по умолчанию
	fallbackLocale: 'en', // Запасной язык
	messages,
});
export default i18n;
