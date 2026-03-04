export function isValidImdbId(id: string): boolean {
  return /^tt\d{7,8}$/.test(id.trim());
}

export function sanitizeImdbId(id: string): string {
  return id.trim().toLowerCase();
}