import express from 'express';
import data from './data.js'

const app = express();

/* req is short for request and res is for responce */

app.get('/api/products', (req,res) =>{
    res.send(data.products);
})

app.get('/', (req, res) =>{
    res.send('Server is ready');
});
const port = process.eventNames.PORT || 5000;
app.listen(5000, ()=>{
    console.log(`Serve at http://localhost:${port}`)
})