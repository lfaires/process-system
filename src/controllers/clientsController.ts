import { Response, Request } from 'express';

import * as clientsService from '../services/clientsService';

import { clientSchema } from '../schemas/clientSchema';

export async function getAllClients(req: Request, res: Response) {
  const allClients = await clientsService.getAllClients();

  res.send(allClients);
}

interface clientData {
  name: string;
  cnpj: string;
  stateId: number;
}

export async function insertNewClient(req: Request, res: Response) {
  try {
    const { name, cnpj, stateId } = req.body as clientData;

    const validate = clientSchema.validate({ name, cnpj, stateId }).error;
    if (validate) return res.sendStatus(400);

    const client = await clientsService.findByCnpj(cnpj);
    if (client) return res.sendStatus(409);

    await clientsService.insertNewClient(name, cnpj, stateId);

    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
