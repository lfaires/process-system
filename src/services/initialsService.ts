import { getRepository } from 'typeorm';
import Initial from '../entities/Initial';

export async function getAllInitials() {
  const repository = await getRepository(Initial);
  const allInitials = await repository.find();
  return allInitials;
}
