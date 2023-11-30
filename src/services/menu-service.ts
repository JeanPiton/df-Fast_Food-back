import { menuRepository } from '@/repositories';

async function getMenu(type?: string, name?: string) {
  const t = type !== undefined ? Number(type) : undefined;
  const n = name ?? '';
  const items = await menuRepository.getMenu(n, t);
  return items;
}

export const menuService = {
  getMenu,
};
