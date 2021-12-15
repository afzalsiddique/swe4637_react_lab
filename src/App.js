import './App.css';
import {Product} from "./components/Product";
import {data} from "./ProductList"
import {useEffect, useState} from "react";

function App() {
  const [productList, setProductList] = useState(data);
  function increaseLike(product) {
    let resultList = productList.filter(p=>p!==product)
    // console.log(resultList)
    product.likes+=1
    resultList=[...resultList,product]
    resultList.sort((a,b)=>b.likes-a.likes)
    setProductList(resultList)
    // console.log(resultList)
  }
  useEffect(()=>{
    let resultList = productList
    // console.log(resultList)
    resultList.sort((a,b)=>b.likes-a.likes)
    setProductList(resultList)
    // console.log(resultList)
  },[productList])

  return (
    <>
      {/*{console.log(productList)}*/}
      {productList.map(product=>(
        <>
          <Product product={product}/>
          <button onClick={()=>increaseLike(product)}><p>{product.likes}</p></button>
          <hr/>
        </>
      ) )}
    </>
  );
}

export default App;
