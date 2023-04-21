import { useState, useEffect } from "react";

export default function Footer({ onSearchBtnClicked }) {
// export default function Footer() {
    const [ query, setQuery ] = useState("")

    return (
        <div>
            
            <input type="text" placeholder="Search stories"
                value={query} 
                onChange={e => setQuery(e.target.value)} 
            />
            <button onClick={() => {
                onSearchBtnClicked(query)
                setQuery("")
            }}>Search</button>
        </div>
    )
}