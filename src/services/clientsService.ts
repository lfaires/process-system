import { getRepository } from 'typeorm';
import Client from '../entities/Client';

export async function getAllClients() {
  const repository = await getRepository(Client);
  const result = await repository.find();

  const allClients = result.map(client => {
    return {
      id: client.id,
      name: client.name,
    };
  });

  return allClients;
}
