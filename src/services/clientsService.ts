import { getRepository } from 'typeorm';
import Client from '../entities/Client';

export async function getAllClients() {
  const repository = await getRepository(Client);
  const allClients = await repository.find();

  return allClients;
}
