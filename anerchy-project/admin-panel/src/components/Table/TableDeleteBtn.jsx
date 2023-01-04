export default function DeleteBtn({ number, handleDelete }) {
  return (
    <button
      className="btn btn-sm btn-outline-danger"
      onClick={() => handleDelete(number)}
    >
      Delete
    </button>
  );
}
