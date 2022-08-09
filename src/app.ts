import express from 'express';
import ProductRouter from './Routes/productRoutes';
import UsersRouter from './Routes/usersRoutes';
import OrderRouter from './Routes/orderRoutes';

const app = express();

app.use(express.json());

app.use('/products', ProductRouter);
app.use('/users', UsersRouter);
app.use('/orders', OrderRouter);

export default app;
