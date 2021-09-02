import { getRepository } from 'typeorm';
import Client from '../entities/Client';

export async function getAllClients() {
  const repository = await getRepository(Client);
  const allClients = await repository.find();

  return allClients;
}

export async function findByCnpj(cnpj: string) {
  const client = await getRepository(Client).find({ cnpj });
  return client.length !== 0 ? client[0] : false;
}

export async function insertNewClient(
  name: string,
  cnpj: string,
  stateId: number,
) {
  const repository = await getRepository(Client);
  await repository.insert({ name, cnpj, stateId });

  return true;
}
