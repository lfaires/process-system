import express from 'express';
import cors from 'cors';

import connectDatabase from './database';

import * as processController from './controllers/processController';
import * as statesController from './controllers/statesController';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/process', processController.getAllProcess);
app.get('/states', statesController.getAllStates);

export async function init() {
  await connectDatabase();
}

export default app;
