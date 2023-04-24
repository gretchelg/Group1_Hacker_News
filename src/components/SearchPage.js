import { useState, useEffect } from "react";
import BeatLoader from "react-spinners/BeatLoader";
// This function will return the result of a Search query
export default function SearchPage({query}) {

const [searchResult, setSearchResult] = useState({ hits: []});
const [ isLoading, setIsLoading] = useState(true);


useEffect(() => {
    console.log("INFO: useEffect starting...");
    setIsLoading(true);
    const searchQuery = async ()=> {            
        // const url = `http://hn.algolia.com/api/v1/search?query=${query}`;
        // console.log("url is ", url)
        
        try {
            // 
            const getData = await fetch(`http://hn.algolia.com/api/v1/search?query=${query}`);
            if (!getData.ok) {
                console.log("Fetch failed: NOT OK");
                throw new Error (`Data Not Found ${getData.status}`)
            }

            const data = await getData.json();
            setSearchResult(data);
            setIsLoading(false);
            console.log("Search Result:", data);
        }   catch (error) {
            console.log(error);
        } 
    }
    searchQuery ();
}, [query])

return (
    <div>
{/* spiner */}
        {isLoading ? (<BeatLoader
        color="#f5a214"
        loading={isLoading}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"/>)
        :
        searchResult.hits.length === 0 ? 
        (
        <h2>We found no stories matching ${query}</h2>
        )
        : (
            <ol>
            { searchResult.hits.map(result => 
                <li key={result.objectID}>
                    <a href={result.url}>{result.title}</a>
                    <p><a className="subText2" href="">{result.points}</a> |
                    <a className="subText2" href=""> {result.author}</a> |
                    <a className="subText2" href=""> {result.created_at}</a> |  
                    <a className="subText2" href=""> {result.num_comments} comments</a>
                    </p>
                </li>
            )
            }
        </ol>
        )
        }
        
    </div>
)
}