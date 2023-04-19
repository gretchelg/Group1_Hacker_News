import { useState, useEffect } from "react";

// This function will return the result of a Search query
export default function SearchPage({query}) {

const [searchResult, setSearchResult] = useState({ hits: []});


useEffect(() => {
    console.log("INFO: useEffect starting...");

    const searchQuery = async ()=> {            
        // const url = `http://hn.algolia.com/api/v1/search?query=${query}`;
        // console.log("url is ", url)

        try {
            const getData = await fetch(`http://hn.algolia.com/api/v1/search?query=${query}`);
            if (!getData.ok) {
                console.log("Fetch failed: NOT OK");
                throw new Error (`Fetch Error ${getData.status}`)
            }

            const data = await getData.json();
            setSearchResult(data);

            console.log("Search Result:", data);
        }   catch (error) {
            console.log(error);
        } 
    }
    searchQuery ();
}, [])

return (
    <div>
        <ol>
            { searchResult.hits.map(result => 
                <li key={result.objectID}>
                    <a href={result.url}>{result.title}</a>
                    <p>{`${result.points} points by ${result.author} ${result.created_at} ${result.num_comments}`}</p>
                </li>
            )
            }
        </ol>
    </div>
)
}