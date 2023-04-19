import { useState, useEffect } from "react";
// This function will fetch each story from the HackerNews url
export default function Fetchstory({id}) {
console.log("prop:", id);
const [story, setStory] = useState({});

useEffect(() => {
    const getStory = async ()=> {
        try {
            // const url = `https://hacker-news.firebaseio.com/v0/item/${id}.json`
            // console.log("url is ", url)

            const getData = await
            // fetch(` https://hacker-news.firebaseio.com/v0/item/35624544.json`);
            fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
            if (!getData.ok) {
                throw new Error (`Fetch Error ${getData.status}`)
            }
            const parseStory = await getData.json();
            setStory(parseStory);
            console.log("story:", parseStory);
        }   catch (error) {
            console.log(error);
        } 
    }
    getStory ();
}, [])

// useEffect (() => {
// getStory();
// }, [])

return (
    <div>
        <li>{story.title}, {story.url} </li>
    </div>
)
}