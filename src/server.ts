require('dotenv').config();

import app from './app';
import mongoose from 'mongoose';

app.listen(process.env.PORT, () => {
  console.log(`running on port ${process.env.PORT}`);
  mongoose
    .connect(process.env.MONGO_URL || '')
    .then(() => {
      console.log('db connected');
    })
    .catch(console.log);
});
