import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      console.log("hello");
      let fetchData = await fetch(
        "https://newsdata.io/api/1/news?apikey=pub_522418eb56704dbfc1724c28baeb609d4dcf6&q=flood&country=in&category=environment",
        { method: "GET" }
      );
      let parsedData = await fetchData.json();
      setData(parsedData.results);
    }

    fetchData();
  }, []);

  return (
    <div className="container">
      {data.map((item, index) => {
        return (
          <div key={index} className="card-container">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
