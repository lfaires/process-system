import { getRepository } from 'typeorm';
import State from '../entities/State';

export async function getAllStates() {
  const repository = await getRepository(State);
  const result = await repository.find();

  const allStates = result.map(state => {
    return {
      id: state.id,
      name: state.name,
    };
  });

  return allStates;
}
