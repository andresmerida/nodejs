import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        const db = await mongoose.connect(`${process.env.MONGODB_URI}`);
        console.log(`Connected to database!!! ${db.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

export default connectDB;