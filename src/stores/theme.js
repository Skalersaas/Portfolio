// stores/theme.js
import { ref } from 'vue';

export const isDark = ref(false);

export const toggleTheme = () => {
  isDark.value = !isDark.value;
  document.documentElement.classList.toggle("dark", isDark.value);
};

export const initTheme = () => {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    isDark.value = true;
    document.documentElement.classList.add("dark");
  }
};
