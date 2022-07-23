import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type JwtAccessToken = {
  __typename?: 'JwtAccessToken';
  accessToken?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createQuote?: Maybe<Scalars['String']>;
  signInUser: JwtAccessToken;
  signUpUser: UserWithoutQuotes;
};


export type MutationCreateQuoteArgs = {
  title: Scalars['String'];
};


export type MutationSignInUserArgs = {
  userCredential: UserSignInInput;
};


export type MutationSignUpUserArgs = {
  newUser: UserSignUpInput;
};

export type Query = {
  __typename?: 'Query';
  quote?: Maybe<Array<Maybe<Quote>>>;
  quotes?: Maybe<Array<Maybe<QuoteWithUser>>>;
  user?: Maybe<User>;
  users?: Maybe<Array<Maybe<User>>>;
};


export type QueryQuoteArgs = {
  _id: Scalars['ID'];
};


export type QueryUserArgs = {
  _id: Scalars['ID'];
};

export type Quote = {
  __typename?: 'Quote';
  by?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type QuoteWithUser = {
  __typename?: 'QuoteWithUser';
  by?: Maybe<User>;
  title?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  quotes: Array<Maybe<Quote>>;
};

export type UserSignInInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UserSignUpInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
};

export type UserWithoutQuotes = {
  __typename?: 'UserWithoutQuotes';
  _id: Scalars['ID'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
};

export type SignUpUserMutationVariables = Exact<{
  newUser: UserSignUpInput;
}>;


export type SignUpUserMutation = { __typename?: 'Mutation', user: { __typename?: 'UserWithoutQuotes', firstName: string, email: string } };

export type SignInUserMutationVariables = Exact<{
  user: UserSignInInput;
}>;


export type SignInUserMutation = { __typename?: 'Mutation', user: { __typename?: 'JwtAccessToken', accessToken?: string | null } };

export type GetQuotesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetQuotesQuery = { __typename?: 'Query', quotes?: Array<{ __typename?: 'QuoteWithUser', title?: string | null, by?: { __typename?: 'User', firstName: string, lastName: string } | null } | null> | null };


export const SignUpUserDocument = gql`
    mutation signUpUser($newUser: UserSignUpInput!) {
  user: signUpUser(newUser: $newUser) {
    firstName
    email
  }
}
    `;
export type SignUpUserMutationFn = Apollo.MutationFunction<SignUpUserMutation, SignUpUserMutationVariables>;

/**
 * __useSignUpUserMutation__
 *
 * To run a mutation, you first call `useSignUpUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpUserMutation, { data, loading, error }] = useSignUpUserMutation({
 *   variables: {
 *      newUser: // value for 'newUser'
 *   },
 * });
 */
export function useSignUpUserMutation(baseOptions?: Apollo.MutationHookOptions<SignUpUserMutation, SignUpUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignUpUserMutation, SignUpUserMutationVariables>(SignUpUserDocument, options);
      }
export type SignUpUserMutationHookResult = ReturnType<typeof useSignUpUserMutation>;
export type SignUpUserMutationResult = Apollo.MutationResult<SignUpUserMutation>;
export type SignUpUserMutationOptions = Apollo.BaseMutationOptions<SignUpUserMutation, SignUpUserMutationVariables>;
export const SignInUserDocument = gql`
    mutation signInUser($user: UserSignInInput!) {
  user: signInUser(userCredential: $user) {
    accessToken
  }
}
    `;
export type SignInUserMutationFn = Apollo.MutationFunction<SignInUserMutation, SignInUserMutationVariables>;

/**
 * __useSignInUserMutation__
 *
 * To run a mutation, you first call `useSignInUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInUserMutation, { data, loading, error }] = useSignInUserMutation({
 *   variables: {
 *      user: // value for 'user'
 *   },
 * });
 */
export function useSignInUserMutation(baseOptions?: Apollo.MutationHookOptions<SignInUserMutation, SignInUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignInUserMutation, SignInUserMutationVariables>(SignInUserDocument, options);
      }
export type SignInUserMutationHookResult = ReturnType<typeof useSignInUserMutation>;
export type SignInUserMutationResult = Apollo.MutationResult<SignInUserMutation>;
export type SignInUserMutationOptions = Apollo.BaseMutationOptions<SignInUserMutation, SignInUserMutationVariables>;
export const GetQuotesDocument = gql`
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

/**
 * __useGetQuotesQuery__
 *
 * To run a query within a React component, call `useGetQuotesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetQuotesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetQuotesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetQuotesQuery(baseOptions?: Apollo.QueryHookOptions<GetQuotesQuery, GetQuotesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetQuotesQuery, GetQuotesQueryVariables>(GetQuotesDocument, options);
      }
export function useGetQuotesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetQuotesQuery, GetQuotesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetQuotesQuery, GetQuotesQueryVariables>(GetQuotesDocument, options);
        }
export type GetQuotesQueryHookResult = ReturnType<typeof useGetQuotesQuery>;
export type GetQuotesLazyQueryHookResult = ReturnType<typeof useGetQuotesLazyQuery>;
export type GetQuotesQueryResult = Apollo.QueryResult<GetQuotesQuery, GetQuotesQueryVariables>;