import { ApolloServer } from "apollo-server";
import { Request, Response } from "express";
type ReqResType = {
    req: Request;
    res: Response;
};
import connectDB from "./connectDb";

import jwt from "jsonwebtoken";
import createError from "http-errors";
import { config } from "dotenv";
config();
import User from "./models/User";
import Quote from "./models/Quote";
import typeDefs from "./schema";

import resolvers from "./resolvers";
interface TokenInterface {
    userId: string;
}
const context = async ({ req }: ReqResType) => {
    const { authorization } = req.headers;
    if (authorization) {
        const { userId } = jwt.verify(
            authorization,
            process.env.JWT_SECRET as string
        ) as TokenInterface;
        return { userId };
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context,
    csrfPrevention: true,
    cache: "bounded",
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
    connectDB();
});
