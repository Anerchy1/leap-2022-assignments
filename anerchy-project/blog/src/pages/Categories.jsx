import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "../components/Card";

export default function Categories() {
  const { id } = useParams();
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:8001/categories/${id}`).then((res) => {
      setArticles(res.data);
      console.log(res.data);
    });
  }, [id]);

  return (
    <main>
      <div className="container">
        <div className="row gy-4">
          {articles.map((article) => (
            <div className="col-md-3 col-sm-6 col-12">
              <Link to={`/articles/${article.id}`}>
                <Card title={article.name} image={article.imageUrl} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
