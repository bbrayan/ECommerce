import express from 'express';
import mongoose from 'mongoose';
/* mongoose is used to connect to mongo database */
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';

const app = express();
/* making a mongoDB */
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/amazona', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.get('/', (req, res) =>{
    res.send('Server is ready');
});

app.use((err, req, res, next) =>{
  res.status(500).send({message: err.message});
})
const port = process.eventNames.PORT || 5000;
app.listen(5000, ()=>{
    console.log(`Serve at http://localhost:${port}`)
})