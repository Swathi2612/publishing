import React, { useEffect } from "react";
import { useState } from "react";
import Create from "./Create";
import './navbar.css'
import Publish from "./Publish";

function Navbar() {
  let [query, setquery] = useState([]);
  let [searchapi, setsearchapi] = useState([]);
  let [inputval, setinputval] = useState("");
  let [showPost, setshowPost] = useState(false);
  let [outPut, setoutPut] = useState(false);
  let [toggleSearch, settoggleSearch] = useState(false);

  useEffect(() => {
    let fetchdata = () => {
      fetch("http://localhost:3007/Post")
        .then((res) => res.json())
        .then((data) => {
          setquery(data);
          setsearchapi(data);
        });
    };
    fetchdata();
  }, [setsearchapi]);

  let keys=["title","text"]
  const handlefilter = (e) => {
    if ((e.target.value === '')) {
      setquery(searchapi);
    } else {
      let filterres = searchapi.filter((item) =>
       keys.some(key=>item[key].includes(e.target.value.toLowerCase()))
      );
      setquery(filterres);
    }
    setinputval(e.target.value);
    settoggleSearch(!toggleSearch);
    setoutPut(false);
  };
  let handleclear=()=>{
    setinputval("")
  }

  const toggleshow = () => {
    setshowPost(!showPost) 
  }

  const outPut1 = () => {
    setoutPut(!outPut) 
  }

  return (
    <div>
    <div id="navbar">
        <span class="search">&#128270;</span>
      {/* <button class="search">&#128270;</button> */}
      <input                        
        type="search"
        placeholder="search post"
        onInput={(e) => handlefilter(e)}
        value={inputval}
      />
      <button class="btn" type="submit" onClick={handleclear}>X</button>
      </div>

      <div id="header">
      {/* <Header/> */}
      <button class="post-btn" type="submit" onClick={toggleshow}>NEW POST</button>
      <button class="post-btn" type="submit" onClick={outPut1}>PUBLISHED</button>
      </div>


    <div id="publishing">
        {showPost && <div><Create/></div>}
        {outPut ? <div><Publish/></div> : query.map((items,key ) => {
        return (
            <React.Fragment key={key}>
            <div>
            <p>{items.title}</p>
            <p>{items.text}</p>
            </div>
          </React.Fragment>
        );
      })}
    </div>

      {/* { 
      toggleSearch &&
      } */}
    </div>
  );
}

export default Navbar;