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
    const [filteredResults, setFilteredResults] = useState(results)
    const [query, setQuery] = useState('')
//TODO: add maxResults and pagination functionality
    const [maxResults, setmaxResults] = useState('')
    const [error, setError] = useState('')

//TODO: move logic to helpers.js file
    function updateView(view) {
        console.log('updateview called')
        let newFilteredResults
        if (view === 'unanswered') {
            newFilteredResults = results.filter(q => q.answers.length === 0)
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
            newFilteredResults  = [...results].sort(compare)
            console.log(newFilteredResults)
        }
        else if (view === 'newest') {
            function compare(a, b) {
                const dateA = a.date;
                const dateB = b.date;

                let comparison = 0;
                if (dateA > dateB) {
                    comparison = -1;
                } else if (dateA < dateB) {
                    comarison = 1
                }
                return comparison
            }
            newFilteredResults  = [...results].sort(compare)
            console.log(newFilteredResults)
        }
        else {
            newFilteredResults = [...results]
            console.log(newFilteredResults)
        }

        setFilteredResults(newFilteredResults)
    }

    //make the context object
    const qaContext = {
        results,
        setResults,
        updateView,
        filteredResults,
        error
    };
    
    //pass the value in provider and return
    return(
        <QAContext.Provider value={qaContext}>
            {children}
        </QAContext.Provider>
    )
}

export const {Consumer} = QAContext;
