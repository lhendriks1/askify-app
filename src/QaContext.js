import React, {createContext, useState} from 'react';
import DATA from './datastore.js'


export const QAContext = createContext({});

export const Provider = props => {
//Initial values will be obtained from props
    const {
        // QA,
        // filterValue,
        children
    } = props;

    //Use state to keep the values
    const [QA, setQA] = useState(DATA)
    const [filterValue, setFilterValue] = useState("all")

    const updateFilter = newFilter => setFilterValue(newFilter)

    //make the context object
    const qaContext = {
        QA,
        setQA,
        filterValue,
        setFilterValue,
        updateFilter
    };
    
    //pass the value in provider and return
    return(
        <QAContext.Provider value={qaContext}>
            {children}
        </QAContext.Provider>
    )
}

export const {Consumer} = QAContext;
