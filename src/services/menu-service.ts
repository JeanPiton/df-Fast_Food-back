import { menuRepository } from '@/repositories';

async function getMenu() {
  const items = await menuRepository.getMenu();
  return items;
}

export const menuService = {
  getMenu,
};
