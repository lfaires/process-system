import express from 'express';
import cors from 'cors';

import connectDatabase from './database';

import * as processController from './controllers/processController';
import * as statesController from './controllers/statesController';
import * as clientsController from './controllers/clientsController';
import * as initialsController from './controllers/initialsController';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/process', processController.getAllProcess);
app.post('/process', processController.insertNewProcess);
app.get('/states', statesController.getAllStates);
app.get('/clients', clientsController.getAllClients);
app.post('/clients', clientsController.insertNewClient);
app.get('/initials', initialsController.getAllinitials);

export async function init() {
  await connectDatabase();
}

export default app;
