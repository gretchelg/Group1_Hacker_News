import { useState, useEffect } from "react";
import EachStory from "./EachStory";
import ReactPaginate from "react-paginate";

export default function Home({storyPerPage}) {
    const [post, setPost] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    // This function will fetch the top 500 ids from HackerNews url
    const fetchData= async ()=>{
        const endOffset = itemOffset + storyPerPage;

        try{
            const getPosts= await fetch("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty");
            if(!getPosts.ok){ throw new Error (`FETCH ERROR ${getPosts.status}`)}
            const data=await getPosts.json(); 
            // setPost(data)
            setPost(data.slice(itemOffset, endOffset));
            setTotalPages(Math.ceil(data.length / storyPerPage));
            console.log(data);
        } 
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();  
    }, [itemOffset, storyPerPage]);


    const handleChange = (page) => {
        const newOffset = page.selected * storyPerPage;
        console.log(
        `User requested page number ${
        page.selected + 1
        }, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };
    

    return (
        <div className="container">
            <ol>
            {/* {post.filter((el, idx) => idx < 50).map(el => <EachStory key={el} id={el} /> )} */}
            {post.map(el => <EachStory key={el} id={el} /> )}
            </ol>
            {/* <EachStory /> */}


            <ReactPaginate
            nextLabel="Next >"
            previousLabel="< Previous"
            breakLabel="..."
            onPageChange={handleChange}
            pageCount={totalPages}
            pageClassName="page-item"
            pageLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            previousLinkClassName="page-link"
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            pageRangeDisplayed={5}
            marginPagesDisplayed={5}
            />
        </div>
    )
}