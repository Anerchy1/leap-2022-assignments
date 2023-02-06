import ArticleTableBody from "./ArticleTableBody";

export default function ArticleTable({ items, onEdit }) {
  return (
    <table className="table table-bordered table-hover">
      <thead>
        <tr>
          {/* <th width="1"># </th> */}
          <th>Image </th>
          <th>Name </th>
          <th>Description </th>
          <th width="1">Actions </th>
        </tr>
      </thead>
      <ArticleTableBody items={items} onEdit={onEdit} />
    </table>
  );
}
