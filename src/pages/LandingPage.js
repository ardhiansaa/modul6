import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// Components
import Card from "../components/card";
import Modal from "../components/modal";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const [data, setData] = useState(null);
  const [isLoaded, setisLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("One Piece");

  // Modal
  const [modalShow, setModalShow] = useState(false);
  const [modalItem, setModalItem] = useState(null);

  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async (query) => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          "https://imdb8.p.rapidapi.com/auto-complete",
          {
            params: { q: query },
            headers: {
              "x-rapidapi-host": "imdb8.p.rapidapi.com",
              "X-RapidAPI-Key":
                "323bdad682mshc8fdf6f49500308p1c2cf8jsn312e23782015",
            },
          }
        );
        if (response.status === 200) {
          setData(response.data);
          setisLoaded(true);
          setIsLoading(false);
        }
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    };
    if (!isLoaded) {
      fetchData(query);
    }
  }, [isLoaded, query]);
  const onSearch = (e) => {
    if (e.key === "Enter") {
      setisLoaded(false);
      setQuery(e.target.value);
    }
  };
  // const handleClick = (item) => {
  //   navigate(`/detail/${item.id}`);
  // };
  return (
    <main>
      <input
        type="text"
        placeholder="Search film by name"
        onKeyDown={(e) => onSearch(e)}
      />
      <h3 className="title">Search : {query}</h3>
      {!data || isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="card-container">
          {data.d.map((item, index) => {
            return (
              <Link to={`/detail/${item.id}`} key={index}>
                <Card data={item} onClick={() => setModalShow(true)} />
              </Link>
            );
          })}
        </div>
      )}
      <Modal
        data={modalItem}
        isShow={modalShow}
        onCancel={() => setModalShow(false)}
      />
    </main>
  );
}
