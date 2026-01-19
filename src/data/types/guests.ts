// ═══════════════════════════════════════════════════════════════
// ⚠️ لا تعدل هذا الملف - عدّل ملف content.ts بدلاً منه
// ═══════════════════════════════════════════════════════════════

import { guestsInput } from '../content';
import type { Guest } from './types';

export type { Guest, GuestInput, GuestSocialLink, GuestEpisode } from './types';

// إنشاء الـ id تلقائياً
export const guestsData: Guest[] = guestsInput.map((guest, index) => ({
  ...guest,
  id: index + 1,
}));
