import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "./DetailPages.css";

function MovieDetail() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://imdb8.p.rapidapi.com/title/get-details?tconst=${id}`,
          {
            headers: {
              "x-rapidapi-host": "imdb8.p.rapidapi.com",
              "x-rapidapi-key":
                "323bdad682mshc8fdf6f49500308p1c2cf8jsn312e23782015",
            },
          }
        );
        if (response.status === 200) {
          setData(response.data);
          setIsLoading(false);
        }
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!data) {
    return <p>Data not found</p>;
  }

  return (
    <div className="MovieDetail">
      <h2>{data.title}</h2>
      <img src={data.image.url} alt={data.title} />
      <p>Tahun: {data.year}</p>
      <p>Running Time : {data.runningTimeInMinutes} minutes</p>
      <p>Deskripsi: {data.titleType}</p>
      <p>{data.desc}</p>

      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default MovieDetail;
