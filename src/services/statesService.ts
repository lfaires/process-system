import { getRepository } from 'typeorm';
import State from '../entities/State';

export async function getAllStates() {
  const repository = await getRepository(State);
  const allStates = await repository.find();

  return allStates;
}
