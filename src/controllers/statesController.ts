import { Response, Request } from 'express';

import * as statesService from '../services/statesService';

export async function getAllStates(req: Request, res: Response) {
  const allStates = await statesService.getAllStates();

  res.send(allStates);
}
