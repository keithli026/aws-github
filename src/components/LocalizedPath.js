
// src/components/LocalizedPath.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const LocalizedPath = ({ path }) => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const getLocalizedPath = (path) => {
    if (path.startsWith(`/${currentLanguage}`) || path.startsWith('http') || path.startsWith('#')) {
      return path;
    }

    // Handle the locales folder
    if (path.startsWith('/locales/')) {
      return path;
    }

    // Handle other public files or folders (e.g., favicon, images)
    if (path.startsWith('/favicon.ico') || path.startsWith('/index.html')) {
      return path;
    }

    if (path === "/") {
      return `/${currentLanguage}`;
    }

    return `/${currentLanguage}${path}`;
  };

  return getLocalizedPath(path);
};

export default LocalizedPath;