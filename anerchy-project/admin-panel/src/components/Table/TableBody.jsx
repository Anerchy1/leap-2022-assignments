import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function TableBodyItem({ item, index, onEdit }) {
  const [deleted, setDeleted] = useState(false);
  const navigate = useNavigate();

  const deleteItem = () => {
    axios
      .delete("http://localhost:8001/categories/" + item.id, {
        data: {
          id: item.id,
        },
      })
      .then((res) => {
        console.log("amjilttai ustgalaa");
        setDeleted(true);
      })
      .catch((err) => {
        // if (err.response.status === 401 || err.response.status === 403) {
        //   navigate("/signout");
        // }
        console.log(err.response.data.message);
      });
  };
  if (deleted) return <></>;
  return (
    <>
      <th scope="row">{index}</th>
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

export default function TableBody({ items, onEdit }) {
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
