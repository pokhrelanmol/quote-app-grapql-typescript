import React, { useState } from "react";

const CreateQuote = () => {
    const [quote, setQuote] = useState("");
    const handleSubmit = () => {
        console.log(quote);
    };
    return (
        <div>
            <input
                type="text"
                placeholder="Quote"
                value={quote}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setQuote(e.target.value)
                }
            />
            <button
                onClick={handleSubmit}
                className="py-2 px-4 bg-blue-700 text-white"
            >
                Create
            </button>
        </div>
    );
};

export default CreateQuote;
