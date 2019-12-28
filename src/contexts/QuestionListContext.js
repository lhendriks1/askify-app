import React, {useState} from 'react';

export const QuestionListContext = React.createContext({})

export const QuestionListContextProvider = props => {
    //Use state to keep the values
    const [error, setError] = useState(null);
    const [results, setResults] = useState([]);
    const [searchResults, setSearchResults] = useState(results);
    const [displayedResults, setDisplayedResults] = useState(results);
    const [query, setQuery] = useState('');
    const [view, setView] = useState("newest");

    // const {filterBySearchTerm, filterBySelectedView, updateView} = helpers

    function addNewQuestion(updatedQuestionsList) {
        setResults(updatedQuestionsList);
      }

function filterBySearchTerm(searchTerm) {
        const regexSearchTerm = new RegExp(searchTerm, "gi");
        const newSearchResults = results.filter(q => regexSearchTerm.test(q.tags) || regexSearchTerm.test(q.question_title) || regexSearchTerm.test(q.question_body) || regexSearchTerm.test(q.user.user_name));
        setSearchResults(newSearchResults);
        updateView(newSearchResults);
    }

function filterBySelectedView() {
    let newFilterResults;

    if (view === 'unanswered') {
        newFilterResults = searchResults.filter(q => q.number_of_answers === 0)

    } 
    else if (view === 'popular') {
        function compare(a, b) {
            const ansA = a.votes;
            const ansB = b.votes;

            let comparison = 0;
            if (ansA > ansB) {
                comparison = -1;
            } else if (ansA < ansB) {
                comparison = 1;
            }
            return comparison;
        }
        newFilterResults  = [...searchResults].sort(compare);
    }
    else if (view === 'newest') {
        function compare(a, b) {
            const dateA = a.date;
            const dateB = b.date;

            let comparison = 0;
            if (dateA > dateB) {
                comparison = -1;
            } else if (dateA < dateB) {
                comparison = 1;
            }
            return comparison;
        }
        newFilterResults  = [...searchResults].sort(compare);
    }
    else {
        newFilterResults = [...searchResults];
    }
    updateView(newFilterResults);
}

function updateView(results) {
    setDisplayedResults(results);
}


    const value = {
        filterBySearchTerm,
        filterBySelectedView,
        updateView,
        error,
        setError,
        results,
        addNewQuestion,
        setResults,
        searchResults,
        setSearchResults,
        displayedResults,
        setDisplayedResults,
        query,
        setQuery,
        view, 
        setView
    }

    return(
        <QuestionListContext.Provider
            value={value}>
                {props.children}
        </QuestionListContext.Provider>
    )
}

export const {QuestionListConsumer} = QuestionListContext;