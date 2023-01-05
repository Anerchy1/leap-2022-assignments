import { useState } from "react";

const styles = {
  wrapper: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    maxWidth: "100%",
  },
};

export default function State() {
  const [toDos, setToDos] = useState([]);
  const [input, setInput] = useState("");

  const addToDo = () => {
    const newList = [...toDos, input];
    setToDos(newList);
    setInput("");
  };

  const removeItem = (index) => {
    const newList1 = toDos.filter((todo, ind) => index !== ind);
    setToDos(newList1);
  };

  return (
    <div style={styles.wrapper}>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={addToDo}>Add</button>
      <ul>
        {toDos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeItem(index)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// State();
