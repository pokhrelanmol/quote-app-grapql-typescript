import { gql } from "@apollo/client";

export const GET_ALL_QUOTE = gql`
    query getQuotes {
        quotes {
            title
            by {
                firstName
                lastName
            }
        }
    }
`;
