import React, { useState } from 'react';

export const VoteHistoryContext = React.createContext({});

export const VoteHistoryContextProvider = props => {
    const [error, setError] = useState(null);
    const [userVoteHistory, setUserVoteHistory] = useState([]);

    function updateVote(userVote) {
        setUserVoteHistory([...userVoteHistory, userVote])
    }

    const value = {
        userVoteHistory,
        updateVote
    };

    return (
        <VoteHistoryContext.Provider value={value}>
            {props.children}
        </VoteHistoryContext.Provider>
    );
}

export const { VoteHistoryConsumer } = VoteHistoryContext;
