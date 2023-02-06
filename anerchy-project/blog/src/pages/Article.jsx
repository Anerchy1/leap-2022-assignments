import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Article() {
  const { id } = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:8001/articles/${id}`).then((res) => {
      setArticle(res.data);
    });
  }, []);
  if (article === null) return <></>;
  return (
    <div className="container">
      <h1>{article.name}</h1>
      <img src={article.imageUrl} alt="newsImage" />
      <div>{article.text}</div>
    </div>
  );
}
