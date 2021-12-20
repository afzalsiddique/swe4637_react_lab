import React, {useState} from "react";

export function Product({product}) {
  const {productImageUrl, title,description,submitter} = product
  // const [likes,setLikes]=useState(product.likes);
  // const increaseLike=()=>{
  //   setLikes(likes+1)
  // }
  return (
    <>
      <img src={productImageUrl} width="175" height="auto"/>,
      <p>{title}</p>
      <p>{description}</p>
      <p><font size="4"> Submitted By: <img src={submitter} width="50" height="auto"/></font></p>
      {/*<p>{likes}</p>*/}
    </>
  )
}