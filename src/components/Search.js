import { useState, useEffect } from "react";

// This function will return the result of a Search query
export default function Search({query}) {

console.log("Search query:", query);
const [query, setQuery] = useState({});

useEffect(() => {
    const searchQuery = async ()=> {
        try {
            const url = `http://hn.algolia.com/api/v1/search?query=react`
            console.log("url is ", url)

            const getData = await
            // fetch(`http://hn.algolia.com/api/v1/search?query=react`);
            fetch(`http://hn.algolia.com/api/v1/search?query=${query}`);
            if (!getData.ok) {
                throw new Error (`Fetch Error ${getData.status}`)
            }
            const searchResult = await getData.json();
            setStory(searchResult);
            console.log("Search Result:", searchResult);
        }   catch (error) {
            console.log(error);
        } 
    }
    searchQuery ();
}, [])

return (
    <div>
        <li>
            <a href={query.url}>{query.title}</a>
            <p>{`${query.score} points by ${query.by} ${query.created_at} ${query.num_comments}`}</p>
        </li>
    </div>
)
}