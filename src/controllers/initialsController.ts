import { Response, Request } from 'express';

import * as initialsService from '../services/initialsService';

export async function getAllinitials(req: Request, res: Response) {
  const allInitials = await initialsService.getAllInitials();

  res.send(allInitials);
}
