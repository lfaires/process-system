import { Response, Request } from 'express';

import * as processService from '../services/processService';

import { processSchema } from '../schemas/processSchema';

interface Query {
  status?: string;
  stateId?: string;
  initialId?: string;
  clientId?: string;
  value?: string;
}

export async function getAllProcess(req: Request, res: Response) {
  const { status, stateId, initialId, clientId, value } = req.query as Query;

  const params = await processService.checkParamsToFilter(
    status,
    clientId,
    stateId,
    initialId,
    value,
  );
  const allProcess = await processService.getAllProcess(params);

  res.send(allProcess);
}

interface processData {
  clientId: number;
  stateId: number;
  initialId: number;
  value: number;
  date: Date;
}
export async function insertNewProcess(req: Request, res: Response) {
  try {
    const { clientId, stateId, initialId, value, date } =
      req.body as processData;

    const validate = processSchema.validate({
      clientId,
      stateId,
      initialId,
      value,
      date,
    }).error;
    if (validate) return res.sendStatus(400);

    const processNumber = await processService.generateProcessNumber();
    const newProcess = await processService.insertNewProcess(
      processNumber,
      clientId,
      stateId,
      initialId,
      value,
      date,
    );

    res.send({ newProcess }).status(201);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
