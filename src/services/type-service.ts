import { typeRepository } from '@/repositories';

async function getTypes() {
  const types = await typeRepository.getTypes();
  return types;
}

export const typeService = {
  getTypes,
};
