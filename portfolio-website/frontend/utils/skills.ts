import { SKILLS } from '@/utils/constants';

export type SkillCategory = keyof typeof SKILLS;

export type SkillCatalogItem = {
  name: string;
  category: SkillCategory;
  slug: string;
};

export const toSlug = (value: string) =>
  value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

export const SKILL_CATALOG: SkillCatalogItem[] = Object.entries(SKILLS).flatMap(([category, items]) => {
  const typedCategory = category as SkillCategory;
  return items.map((name) => ({
    name,
    category: typedCategory,
    slug: toSlug(name),
  }));
});

export const findSkillBySlug = (slug: string) => {
  const normalized = toSlug(slug);
  return SKILL_CATALOG.find((s) => s.slug === normalized);
};

