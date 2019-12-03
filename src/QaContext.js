import React, {createContext, useState} from 'react';
import DATA from './datastore.js'


export const QAContext = createContext({});

export const Provider = props => {
//Initial values will be obtained from props
    const {
        children
    } = props;

    //Use state to keep the values
    const [results, setResults] = useState(DATA)
    const [searchResults, setSearchResults] = useState(results)
    const [displayedResults, setDisplayedResults] = useState(results)
    const [query, setQuery] = useState('')
    const [view, setView] = useState("all")
//TODO: add maxResults and pagination functionality
    const [maxResults, setmaxResults] = useState('')
    const [error, setError] = useState('')

//TODO: move logic to helpers.js file

    function filterBySearchTerm(searchTerm) {
        const regexSearchTerm = new RegExp(searchTerm, 'gi')
        const newSearchResults = [...results].filter(q => regexSearchTerm.test(q.tags) || regexSearchTerm.test(q.title) || regexSearchTerm.test(q.question));
        setSearchResults(newSearchResults)
        setDisplayedResults(newSearchResults)
        updateView(newSearchResults)
    }

    function filterBySelectedView() {
        let newFilterResults;

        if (view === 'unanswered') {
            newFilterResults = [...searchResults].filter(q => q.answers.length === 0)
        } 
        else if (view === 'popular') {
            function compare(a, b) {
                const ansA = a.answers.length;
                const ansB = b.answers.length;

                let comparison = 0;
                if (ansA > ansB) {
                    comparison = -1;
                } else if (ansA < ansB) {
                    comparison = 1
                }
                return comparison
            }
            newFilterResults  = [...searchResults].sort(compare)
        }
        else if (view === 'newest') {
            function compare(a, b) {
                const dateA = a.date;
                const dateB = b.date;

                let comparison = 0;
                if (dateA > dateB) {
                    comparison = -1;
                } else if (dateA < dateB) {
                    comparison = 1
                }
                return comparison
            }
            newFilterResults  = [...searchResults].sort(compare)
        }
        else {
            newFilterResults = [...searchResults]
        }
        updateView(newFilterResults)
    }

    function updateView(results) {
        setDisplayedResults(results)
    }

    //make the context object
    const qaContext = {
        results,
        setResults,
        view,
        setView,
        query,
        setQuery,
        displayedResults,
        setDisplayedResults,
        filterBySearchTerm,
        filterBySelectedView,
        updateView,
        error,
    };
    
    //pass the value in provider and return
    return(
        <QAContext.Provider value={qaContext}>
            {children}
        </QAContext.Provider>
    )
}

export const {Consumer} = QAContext;
