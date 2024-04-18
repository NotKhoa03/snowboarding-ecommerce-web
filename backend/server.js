import path from 'path';
import express from 'express';
import dotenv from 'dotenv';   
import cookieParser from 'cookie-parser'; 
dotenv.config();
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';


const port = process.env.PORT || 5000;

connectDB();

const app=express();


//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Cookie parser middleware
app.use(cookieParser());



//Routes

app.use('/api/products',productRoutes);
app.use('/api/users',userRoutes);
app.use('/api/orders',orderRoutes);
app.use('/api/upload',uploadRoutes);

//Store clientId in env file so that it is not exposed to the frontend
app.get('/api/config/paypal', (req, res) => res.send( {clientId: process.env.PAYPAL_CLIENT_ID }));



//Make uploads folder static
const _dirname = path.resolve(); 
app.use('/uploads', express.static(path.join(_dirname, '/uploads')));

if (process.env.NODE_ENV === 'production') {
    //Set frontend build folder as static
    app.use(express.static(path.join(_dirname, '/frontend/build')));

    // any route that is not an api route, send index.html
    app.get('*', (req, res) => res.sendFile(path.resolve(_dirname, 'frontend', 'build', 'index.html')));

} else {
    app.get('/',(req,res)=>{
        res.send('Server is ready');
        }   
    );

}

//Middleware
app.use(notFound);
app.use(errorHandler);



app.listen(port, ( )=> console.log(`Server is running at http://localhost:${port}`));