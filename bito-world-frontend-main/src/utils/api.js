// Centralized API helpers using Vite environment variables (.env)
export const API_BASE = import.meta.env.VITE_API_BASE_URL || '';
export const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL || '';

export async function apiPost(path, body, opts = {}) {
  const url = `${API_BASE}${path}`;
  const init = Object.assign({
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  }, opts);

  return fetch(url, init);
}

export default {
  API_BASE,
  GOOGLE_SCRIPT_URL,
  apiPost
};
