import { useState, useEffect } from "react";
import { mapTime } from "./mapTime";
// This function will fetch each story from the HackerNews url
export default function EachStory({ id }) {
  // console.log("prop:", id);

  const [story, setStory] = useState({});

  useEffect(() => {
    const getStory = async () => {
      try {
        // const url = `https://hacker-news.firebaseio.com/v0/item/${id}.json`
        // console.log("url is ", url)

        // fetch the story
        const getData = await fetch(
          `https://hacker-news.firebaseio.com/v0/item/${id}.json`
        );
        if (!getData.ok) {
          throw new Error(`Fetch Error ${getData.status}`);
        }
        const parseStory = await getData.json();
        setStory(parseStory);
        // console.log("story:", parseStory);
      } catch (error) {
        console.log(error);
      }
    };
    getStory();
  }, []);

  // useEffect (() => {
  // getStory();
  // }, [])

  return (
    <div>
      <li>
        {/* <a href={story.url}>{story.title}  ({story.url})</a> */}
        <a href={story.url}>{story.title}</a>
        <p className="subText">
          {`${story.score} points by `}
          <a className="subText" href="">
            {story.by}
          </a>{" "}
          |
          <a className="subText2" href="">
            {" "}
            hide{" "}
          </a>{" "}
          |{" "}
          <a className="subText" href="">
            {mapTime(story.time)}
          </a>{" "}
          <a className="subText" href="">
            {" "}
            {story.descendants} comments
          </a>
        </p>

        {/* <p>{`${story.score} points by ${story.by} | hide |`}</p> */}
      </li>
    </div>
  );
}
