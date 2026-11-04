// Checks shared by the "Start a site" form (in the browser) and the worker (on the server).

export const isEmail = (s: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(s);

// Optional fields: blank is fine, otherwise it has to look right.
export const isPhone = (s: string) => {
  if (!s) return true;
  const digits = s.replace(/\D/g, '').length;
  return /^[0-9+().\-\s]+$/.test(s) && digits >= 7 && digits <= 15;
};

// "yourbusiness.com" → "https://yourbusiness.com/". Returns '' if it isn't a web address.
export const normalizeUrl = (raw: string) => {
  if (!raw) return '';
  try {
    const u = new URL(/^https?:\/\//i.test(raw) ? raw : `https://${raw}`);
    return u.hostname.includes('.') ? u.href : '';
  } catch {
    return '';
  }
};
export const isWebsite = (s: string) => !s || normalizeUrl(s) !== '';
