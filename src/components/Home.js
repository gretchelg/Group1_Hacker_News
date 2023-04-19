import { useState, useEffect } from "react";
import EachStory from "./EachStory";


export default function Home() {
    const [post, setPost] = useState([]);

    // This function will fetch the top 500 ids from HackerNews url
    const fetchData= async ()=>{
        try{
            const getPosts= await fetch("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty");
            if(!getPosts.ok){ throw new Error (`FETCH ERROR ${getPosts.status}`)}
            const data=await getPosts.json(); 
            setPost(data)
            // console.log(data);
        } 
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        // console.log(post[0]);
        fetchData();  
    }, []);

    return (
        <div>
            <h1>THIS IS MY HOMEPAGE</h1>
            <ol>
            {/* {post.map(el => <EachStory id={el} /> )} */}
            {post.filter((el, idx) => idx < 50).map(el => <EachStory key={el} id={el} /> )}
            </ol>
            {/* <EachStory /> */}
            {/* <EachStory id={post[0]} /> */}
        </div>
    )
}