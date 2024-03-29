import { useState,useEffect, Fragment } from "react";

const Async = () => {
    const [posts,setPosts] = useState([]); //usestate is storing array here

    useEffect(()=> {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response)=> response.json())
        .then((data)=>setPosts(data));
    },[]);

    return(
        <Fragment>
            <ul>
                {posts.map((post)=> (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </Fragment>
    )
}
export default Async;