export function createPageUrl(pageName) {
  const base = import.meta.env.BASE_URL || '/';
  return `${base}${pageName.toLowerCase()}`;
}