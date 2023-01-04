import DeleteBtn from "./TableDeleteBtn";
import EditBtn from "./TableEditBtn";

function TableBodyItem({ item, handleDelete }) {
  return (
    <>
      <th>{item.number}</th>
      <td>{item.name}</td>
      <td>{item.descr}</td>
      <td style={{ whiteSpace: "nowrap" }}>
        <EditBtn />
        <DeleteBtn number={item.number} handleDelete={handleDelete} />
      </td>
    </>
  );
}

export default function TableBody({ items, handleDelete }) {
  return (
    <tbody>
      {items.map((item, index) => (
        <tr key={`table-item-${index}`}>
          <TableBodyItem item={item} handleDelete={handleDelete} />
        </tr>
      ))}
    </tbody>
  );
}
