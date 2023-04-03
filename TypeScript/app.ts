import express, {Express, Request, Response} from 'express';
import usersRouter from './routes/usersRoutes';

const app: Express = express();

app.use(express.json());

app.get('/', (req : Request, res: Response)=>{
    res.json('Hello class!');
})
app.use('/api/users', usersRouter)
export default app;