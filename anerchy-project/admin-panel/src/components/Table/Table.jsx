import TableBody from "./TableBody";
import TableHeader from "./TableHead";

export default function Table() {
  const tableItems = [
    { number: 1, name: "Anerchy", descr: "How to not be Anarchy" },
    { number: 2, name: "Anerchy", descr: "How to not be Anarchy" },
    { number: 3, name: "Anerchy", descr: "How to not be Anarchy" },
    { number: 4, name: "Anerchy", descr: "How to not be Anarchy" },
    { number: 5, name: "Anerchy", descr: "How to not be Anarchy" },
  ];

  function handleDelete(number) {
    let filteredItems = tableItems.filter((e) => e.number !== number);
    console.log(filteredItems);
  }
  return (
    <table className="table table-bordered table-hover">
      <TableHeader />
      <TableBody items={tableItems} handleDelete={handleDelete} />
    </table>
  );
}
