import { gql } from "@apollo/client";
export const SIGNUP_USER = gql`
    mutation signUpUser($newUser: UserSignUpInput!) {
        user: signUpUser(newUser: $newUser) {
            firstName
            email
        }
    }
`;
export const SIGNIN_USER = gql`
    mutation signInUser($user: UserSignInInput!) {
        user: signInUser(userCredential: $user) {
            accessToken
        }
    }
`;
