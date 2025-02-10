
import express from 'express';
import router from './routes/routes.js';

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/', router);

app.listen(8080, () => {
    console.log('El servidor está corriendo en el puerto 8080');
});