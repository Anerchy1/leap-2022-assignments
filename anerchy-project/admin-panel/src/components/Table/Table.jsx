import TableBody from "./TableBody";

export default function Table({ items, onEdit }) {
  return (
    <table className="table table-bordered table-hover">
      <thead>
        <tr>
          <th width="1"># </th>
          <th>Name </th>
          <th>Description </th>
          <th width="1">Actions </th>
        </tr>
      </thead>
      <TableBody items={items} onEdit={onEdit} />
    </table>
  );
}
