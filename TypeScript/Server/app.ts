import express, {Express, Request, Response} from 'express';
import moviesRouter from './routes/moviesRouter';
import usersRouter from './routes/usersRoutes';
import cors from 'cors';


const app: Express = express();
app.use(cors());
app.use(express.json());

app.get('/', (req : Request, res: Response)=>{
    res.json('Hello class!');
})
app.use('/api/users', usersRouter);
app.use('/api/movies', moviesRouter);
export default app;