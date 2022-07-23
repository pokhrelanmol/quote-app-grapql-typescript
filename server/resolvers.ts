import createError from "http-errors";
import jwt from "jsonwebtoken";
import User from "./models/User";
import Quote from "./models/Quote";
import bcrypt from "bcryptjs";
import { config } from "dotenv";
config();

import { randomBytes } from "crypto";
import { UserInputError } from "apollo-server";
import { ApolloError } from "apollo-server";
import { Resolvers } from "./src/generated/graphql";
import { TokenInterface } from ".";
const resolvers: Resolvers<TokenInterface> = {
    Query: {
        users: async () => await User.find({}),
        quotes: async () => await Quote.find({}).populate("by"),
        user: async (parent: object, { _id }: { _id: string }) =>
            await User.findOne({ _id }),
        quote: async (parent: object, { _id }: { _id: string }) =>
            await Quote.find({ by: _id }),
    },
    // relationship
    User: {
        quotes: async (user) => await Quote.find({ by: user._id }),
    },
    Quote: {
        user: async (quote) => await User.findOne({ _id: quote.by }),
    },
    Mutation: {
        signUpUser: async (_, { newUser }) => {
            // check if user already exists

            const email = await User.findOne({ email: newUser?.email });
            if (email)
                throw new ApolloError(
                    "User already exists try to signin",
                    "409"
                );
            // encrypt password
            const encryptedPassword = await bcrypt.hash(newUser?.password!, 10);
            const _user = await User.create({
                ...newUser,
                password: encryptedPassword,
            });
            return {
                ..._user.toObject(),
                _id: _user._id as unknown as string,
            };
        },
        signInUser: async (_, { userCredential }) => {
            // compare password
            const user = await User.findOne({
                email: userCredential.email,
            });

            if (!user) {
                throw new UserInputError("user not found signup first");
            }
            const passwordMatch = bcrypt.compare(
                userCredential.password,
                user?.password as string
            );
            if (!passwordMatch) {
                throw new UserInputError("invalid email or password");
            }

            const accessToken = jwt.sign(
                { userId: user?._id },
                process.env.JWT_SECRET as string
            );
            console.log("signin successfull");
            return { accessToken };
        },
        createQuote: async (__: any, { title }: any, { userId }: any) => {
            if (!userId) throw new createError.Forbidden("sign in please");
            await Quote.create({
                title,
                by: userId,
            });
            return "quote created ";
            //   recieve token via header and extract the userid from it
        },
    },
};
export default resolvers;
