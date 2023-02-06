import axios from "axios";
import { useState } from "react";

function TableBodyItem({ item, index, onEdit }) {
  const [deleted, setDeleted] = useState(false);

  const deleteItem = () => {
    axios
      .delete("https://demo-api-one.vercel.app/api/categories", { id: item.id })
      .then((res) => {
        setDeleted(true);
      })
      .catch((e) => {
        console.log(e);
      });
    // fetch("https://demo-api-one.vercel.app/api/categories", {
    //   method: "DELETE",
    //   headers: {
    //     "Content-type": "application/json",
    //     Authorization: localStorage.getItem("token"),
    //   },
    //   body: JSON.stringify({ id: item.id }),
    // })
    //   .then((res) => {
    //     statusCode = res.status;
    //     return res.json();
    //   })
    //   .then((data) => {
    //     if (statusCode === 200) {
    //       console.log("amjilttai ustgalaa");
    //       setDeleted(true);
    //     } else {
    //       console.log("aldaatai huselt");
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };
  if (deleted) return <></>;
  return (
    <>
      {/* <th scope="row">{index}</th> */}
      <td>
        <img width={150} height={150} src={item.imageUrl} alt="" />
      </td>

      <td>{item.name}</td>
      <td>{item.description}</td>
      <td style={{ whiteSpace: "nowrap" }}>
        <button
          className="btn btn-sm btn-outline-primary me-2"
          onClick={() => onEdit(item)}
        >
          Edit
        </button>
        <button className="btn btn-sm btn-outline-danger" onClick={deleteItem}>
          Delete
        </button>
      </td>
    </>
  );
}

export default function ArticleTableBody({ items, onEdit }) {
  return (
    <tbody>
      {items?.map((item, index) => (
        <tr key={`table-item-${index}`}>
          <TableBodyItem item={item} onEdit={onEdit} />
        </tr>
      ))}
    </tbody>
  );
}
