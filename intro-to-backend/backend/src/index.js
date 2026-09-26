import dotenv from 'dotenv';
import connectDB from "./config/db.js";
import app from "./app.js";

dotenv.config({
    path: `.env`
});

const startServer = async () => {
    try {
        await connectDB();

        app.on("error", (err) => {
            console.log('ERROR', err);
            throw err;
        });

        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server started on port ${process.env.PORT || 8000}`);
        })
    } catch (err) {
        console.log('MongoDB connection error', err);
    }
}

startServer();