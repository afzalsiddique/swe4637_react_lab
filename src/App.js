import './App.css';
import {Book} from "./Book";
import {useState} from "react";

function App() {
  let [MyArray, setMyArray] = useState([3,2]);
  const [sortStatus, setSortStatus] = useState(true);

  const handleSort = () => {
    const data = MyArray;
    if (sortStatus) {
      let sorted = data.sort((a, b) => a[1] - b[1]);
      setMyArray(sorted);
      setSortStatus(!sortStatus);
    } else {
      let sorted = data.sort((a, b) => b[1] - a[1]);
      setMyArray(sorted);
      setSortStatus(!sortStatus);
    }
  }
  return (
    <>
      <Book like={MyArray[0]}/>
      <Book like={MyArray[1]}/>
      <button onClick={handleSort}>ClickMe to Sort</button>
        <ul>
        {MyArray.map((reptile) => (
        <li>{reptile}</li>
      ))}
    </ul>
    </>
  );
}

export default App;
