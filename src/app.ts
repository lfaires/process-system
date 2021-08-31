import express from 'express';
import cors from 'cors';

import connect from './database';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/clients');

export async function init() {
  await connect();
}

export default app;
