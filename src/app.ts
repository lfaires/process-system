import express from 'express';
import cors from 'cors';

import connectDatabase from './database';

import * as processController from './controllers/processController';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/process', processController.getAllProcess);

export async function init() {
  await connectDatabase();
}

export default app;
