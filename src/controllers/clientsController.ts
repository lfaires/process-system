import { Response, Request } from 'express';

import * as clientsService from '../services/clientsService';

export async function getAllClients(req: Request, res: Response) {
  const allClients = await clientsService.getAllClients();

  res.send(allClients);
}
