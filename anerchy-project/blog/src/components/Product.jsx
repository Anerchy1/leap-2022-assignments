import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8001/products/${id}`).then((res) => {
      setProduct(res.data);
    });
  }, []);
  if (product === null) return <></>;
  return (
    <div className="container">
      <h1>{product[0]?.name}</h1>
      <img src={product[0]?.imageUrl} alt="newsImage" />
      <div>{product[0]?.price}</div>
    </div>
  );
}
