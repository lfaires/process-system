import { getRepository, MoreThan } from 'typeorm';
import Process from '../entities/Process';
import State from '../entities/State';
import Initial from '../entities/Initial';

export async function getAllProcess(params: {
  status?: string;
  clientId?: string;
  stateId?: string;
  initialId?: string;
}) {
  const repository = await getRepository(Process);

  const result = await repository.find({
    where: params,
    relations: ['client', 'state', 'initial', 'client.state'],
    take: 10,
    order: { value: 'DESC' },
  });

  const allProcess = result.map(p => {
    return {
      id: p.id,
      number: p.number + p.initial.name + p.state.initial,
      createdDate: p.createdDate,
      state: p.state.name,
      status: p.status,
      value: p.value / 100,
      clientId: p.client.id,
      client: p.client.name,
      cnpj: p.client.cnpj,
      clientState: p.client.state.name,
    };
  });

  return allProcess;
}

export async function generateProcessNumber() {
  const repository = await getRepository(Process);
  const allProcess = await repository.find();
  const zeros = '0000';
  const number = zeros + allProcess.length;
  const newNumber = number.slice(number.length - 5);
  return newNumber;
}

export async function insertNewProcess(
  processNumber: string,
  clientId: number,
  stateId: number,
  initialId: number,
  value: number,
  date: Date,
) {
  const convertValueToCents = Math.round(value * 100);
  const repository = await getRepository(Process);
  const process = await repository.create();
  process.number = processNumber;
  process.createdDate = date;
  process.clientId = clientId;
  process.stateId = stateId;
  process.initialId = initialId;
  process.value = convertValueToCents;

  const newProcess = await repository.save(process);

  const state = await getRepository(State).find({ where: { id: stateId } });
  const initial = await getRepository(Initial).find({
    where: { id: initialId },
  });

  return newProcess.number + initial[0].name + state[0].initial;
}

export async function checkParamsToFilter(
  status: string,
  clientId: string,
  stateId: string,
  initialId: string,
  value: string,
) {
  const filter = {
    status,
    clientId,
    stateId,
    initialId,
  };

  if (!status || status === 'all') delete filter.status;
  if (!clientId || clientId === 'all') delete filter.clientId;
  if (!stateId || stateId === 'all') delete filter.stateId;
  if (!initialId || initialId === 'all') delete filter.initialId;

  return filter;
}
