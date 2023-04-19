import { useState, useEffect } from "react";
import Fetchstory from "./Fetchstory";

export default function Hnapi() {
const [post, setPost] = useState([]);

// This function will fetch the top 500 ids from HackerNews url
const fetchData= async ()=>{
try{
const getPosts= await 
fetch("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty");
if(!getPosts.ok){ throw new Error (`have are having an error ${getPosts.status}`)}
const data=await getPosts.json(); 
setPost(data)
// console.log(data);
} catch (error){
console.log(error);
}}



useEffect(() => {
    // console.log(post[0]);
    fetchData();  
}, []);

return (
    <div>
        <ol>
        {post.map(el => <Fetchstory id={el} /> )}
        </ol>
        {/* <Fetchstory /> */}
        {/* <Fetchstory id={post[0]} /> */}
    </div>
)
}