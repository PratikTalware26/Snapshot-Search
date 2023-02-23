import React, { useEffect, useState } from "react";
import "./Header.css";
import axios from "axios";

const Header = () => {
  const [input, setInput] = useState("");
  const [myData, setMyData] = useState([]);
  const [inp, setInp] = useState("random");

  const searchHandeler = () => {
    setInp(input);
  };

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(
          `https://api.unsplash.com/search/photos?page=1&query=${inp}&client_id=3eGWunZZCfew2g6eHKMO6ZDeh9AumYgbrrQBaoXEDd4`
        )
        .then((data) => {
          setMyData(data.data.results);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, [inp]);

  return (
    <>
      <div className="header-cont">
        <div>
          <h1>SnapShot</h1>
        </div>
        <div className="search-inp-btn-cont">
          <input
            className="input-snap"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="search-btn" onClick={searchHandeler}>
            Search
          </button>
        </div>
      </div>
      <div className="input-disp">
        <h2>{inp}</h2>
      </div>
      <div className="list-cont">
        <ul className="search-list">
          <li>
            <button onClick={()=>setInp("Mountain")}>Mountain</button>
          </li>
          <li>
            <button onClick={()=>setInp("Beaches")}>Beaches</button>
          </li>
          <li>
            <button onClick={()=>setInp("Bird")}>Bird</button>
          </li>
          <li>
            <button onClick={()=>setInp("Food")}>Food</button>
          </li>
        </ul>
      </div>
      <div className="images-cont">
        {myData.map((val, i) => {
          return (
            <div key={i}>
              <img src={val.urls.small} alt="" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Header;
