export const getLanguageFromPath = (pathname) => {
  const pathSegments = pathname.split('/').filter(Boolean);
  return pathSegments.length > 0 ? pathSegments[0] : 'en'; // Default to English
};