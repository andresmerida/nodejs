import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';
import { error } from 'console';

const app = express();
const PORT = 8080;

app.use(cors({
  credentials: true,
}))

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log('Server running on http://localhost:8080/');
})

// mongo db connection
const MONGO_URL = 'mongodb+srv://andresmerida1:Campeon123!@cluster0.d8xii.mongodb.net/?retryWrites=true&w=majority&appName=cluster0';
mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on('error', (error: Error) => console.log(error));