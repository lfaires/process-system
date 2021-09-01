import { getRepository } from 'typeorm';
import Process from '../entities/Process';

export async function getAllProcess() {
  const repository = await getRepository(Process);
  const result = await repository.find({
    where: {},
    relations: ['client', 'state', 'initial', 'client.state'],
  });

  const allProcess = result.map(p => {
    return {
      id: p.id,
      number: p.number + p.initial.name + p.state.initial,
      createdDate: p.createdDate,
      state: p.state.name,
      status: p.status,
      value: p.value,
      clientId: p.client.id,
      client: p.client.name,
      cnpj: p.client.cnpj,
      clientState: p.client.state.name,
    };
  });

  return allProcess;
}
