import { Response, Request } from 'express';

import * as processService from '../services/processService';

export async function getAllProcess(req: Request, res: Response) {
  const allProcess = await processService.getAllProcess();

  res.send(allProcess);
}
