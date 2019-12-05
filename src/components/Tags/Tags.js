import React, { useContext } from 'react';
import { QAContext } from '../../QaContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTags } from '@fortawesome/free-solid-svg-icons'
import './Tags.css'

export default function Tags(props) {
    const tags = props.tags
    const { setQuery, filterBySearchTerm } = useContext(QAContext)


   const tagItems = tags.map((item, key) => 
       <li 
            className="tags" 
            key={key}
            id={item}
            onClick={() => {setQuery(item); filterBySearchTerm(item)}}
       >
        {item}
       </li>
   )


   return (
    <div className="div-tags">
        <FontAwesomeIcon icon={faTags}/>
        <ul className="tags">
            {tagItems}
        </ul>
    </div>
   )
}