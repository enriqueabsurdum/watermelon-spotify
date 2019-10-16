import mongoose from 'mongoose';

export default async function connect(): Promise<void> {
  try {
    await mongoose.connect('mongodb://localhost/watermelon-spotify-api' || process.env.MONGODB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
    console.log(`Connected to the database.\n`);
  } catch {
    console.error(`Error connecting to database.\n`);
  }
}
