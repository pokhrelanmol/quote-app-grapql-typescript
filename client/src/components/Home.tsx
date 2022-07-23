import { useQuery } from "@apollo/client";
import React from "react";
import { GetQuotesQuery, QuoteWithUser } from "../types/graphql";
import { GET_ALL_QUOTE } from "../graphql/queries.graphql";

const Home = () => {
    const { data, loading, error } = useQuery<GetQuotesQuery>(GET_ALL_QUOTE);

    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>Unable to fetch Quotes</h1>;
    console.log(data);

    return (
        <div>
            {data?.quotes?.map((quote, indx) => (
                <blockquote key={indx}>
                    <h1>{quote?.title}</h1>
                    <p className="text-right">~{quote?.by?.firstName}</p>
                </blockquote>
            ))}
        </div>
    );
};

export default Home;
