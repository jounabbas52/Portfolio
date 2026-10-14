import { site } from '@/config/site';

/** Builds a wa.me deep link with the greeting pre-filled. */
export function whatsappLink(message = site.whatsappMessage) {
  const base = `https://wa.me/${site.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
