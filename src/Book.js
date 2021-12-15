import {useState} from "react";

export function Book(props) {
  const [like, setLike] = useState(props.like);
  function incrementLike() {
    setLike(like+1)
  }
  return(
    <>
      <h2>Name: my-book-name Likes:{like}
        <button onClick={incrementLike}>+</button>
      </h2>
    </>
  )
}