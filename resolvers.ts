import createError from "http-errors";
import jwt from "jsonwebtoken";
import User, { IUser } from "./models/User";
import Quote from "./models/Quote";
import bcrypt from "bcryptjs";
import { config } from "dotenv";
config();

import { randomBytes } from "crypto";
import { UserInputError } from "apollo-server";
import { ApolloError } from "apollo-server";
const resolvers = {
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
        quotes: async (user: { _id: any }) =>
            await Quote.find({ by: user._id }),
    },
    Quote: {
        user: async (quote: { by: any }) =>
            await User.findOne({ _id: quote.by }),
    },
    Mutation: {
        signUpUser: async (__: any, { newUser }: any) => {
            // check if user already exists
            try {
                const email = await User.findOne({ email: newUser.email });
                if (email)
                    return new ApolloError(
                        "User already exists try to signin",
                        "409"
                    );
                // encrypt password
                const encryptedPassword = await bcrypt.hash(
                    newUser.password,
                    10
                );
                const _user = User.create({
                    ...newUser,
                    password: encryptedPassword,
                });
                return _user;
            } catch (error) {
                console.log(error);
            }
        },
        signInUser: async (__: any, { userCredential }: any) => {
            try {
                // compare password
                const user: IUser = (await User.findOne({
                    email: userCredential.email,
                })) as IUser;

                if (!user) {
                    return new UserInputError("user not found signup first");
                }
                const passwordMatch = bcrypt.compare(
                    userCredential.password,
                    user.password as string
                );
                if (!passwordMatch) {
                    return new UserInputError("invalid email or password");
                }

                const accessToken = jwt.sign(
                    { userId: user._id! },
                    process.env.JWT_SECRET as string
                );
                console.log("signin successfull");
                return { accessToken };
            } catch (error) {
                console.log(error);
            }
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
