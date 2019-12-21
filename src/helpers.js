// const helpers =  {
//     filterBySearchTerm(searchTerm) {
//             const regexSearchTerm = new RegExp(searchTerm, "gi")
//             const newSearchResults = results.filter(q => regexSearchTerm.test(q.tags) || regexSearchTerm.test(q.title) || regexSearchTerm.test(q.question));
//             setSearchResults(newSearchResults)
//             updateView(newSearchResults)
//         },

//     filterBySelectedView() {
//         let newFilterResults;

//         if (view === 'unanswered') {
//             newFilterResults = searchResults.filter(q => q.answers.length === 0)
//         } 
//         else if (view === 'popular') {
//             function compare(a, b) {
//                 const ansA = a.answers.length;
//                 const ansB = b.answers.length;

//                 let comparison = 0;
//                 if (ansA > ansB) {
//                     comparison = -1;
//                 } else if (ansA < ansB) {
//                     comparison = 1
//                 }
//                 return comparison
//             }
//             newFilterResults  = [...searchResults].sort(compare)
//         }
//         else if (view === 'newest') {
//             function compare(a, b) {
//                 const dateA = a.date;
//                 const dateB = b.date;

//                 let comparison = 0;
//                 if (dateA > dateB) {
//                     comparison = -1;
//                 } else if (dateA < dateB) {
//                     comparison = 1
//                 }
//                 return comparison
//             }
//             newFilterResults  = [...searchResults].sort(compare)
//         }
//         else {
//             newFilterResults = [...searchResults]
//         }
//         updateView(newFilterResults)
//     },

//     updateView(results) {
//         setDisplayedResults(results)
//     },
// }

// export default helpers;