import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import mongoose from 'mongoose';
import cors from 'cors';
import typeDefs from './schemas/typeDefs';
import resolvers from './schemas/resolvers';
import authMiddleware from './auth';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
        const user = authMiddleware(req);
        return { user };
    }
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

async function startServer() {
    await server.start();
    server.applyMiddleware({ app });

    mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('MongoDB connected successfully');
    }).catch(err => {
        console.error('MongoDB connection error:', err);
    });

    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}${server.graphqlPath}`);
    });
}

startServer().catch(err => console.error(err));

