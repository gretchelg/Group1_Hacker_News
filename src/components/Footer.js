import { useState, useEffect } from "react";

export default function Footer({ onSearchBtnClicked }) {
// export default function Footer() {
    const [ query, setQuery ] = useState("")

    return (
        <div>
            <h1>THIS IS A FOOTER</h1>
            <input type="text" placeholder="Search something" 
                value={query} 
                onChange={e => setQuery(e.target.value)} 
            />
            <button onClick={() => onSearchBtnClicked(query)}>Search</button>
        </div>
    )
}