import './setup';
import app, { init } from './app';

const port = process.env.PORT;

init().then(() => {
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
    console.log('Database :>> ', process.env.DATABASE_URL);
  });
});
