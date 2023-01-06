import { useState } from "react";
import { IconName, MdDelete } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import { RiEditFill } from "react-icons/ri";

const styles = {
  wrapper: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    maxWidth: "100%",
  },
  list: {
    display: "flex",
    justifyContent: "space-between",
    width: "580px",
    position: "relative",
    marginBottom: 10,
    fontSize: 18,
  },
  button: {
    padding: "12.5px 10px",
    margin: 0,
    boxShadow: "none",
    lineHeight: "20px",
    background: "transparent",
    border: 0,
    position: "absolute",
    right: 0,
  },
  editButton: {
    padding: "12.5px 10px",
    margin: 0,
    boxShadow: "none",
    lineHeight: "20px",
    background: "transparent",
    border: 0,
    position: "absolute",
    right: 40,
  },
  input: {
    width: "580px",
    height: "45px",
    paddingLeft: 30,
    paddingRight: 60,
    borderRadius: 50,
    boxShadow: "0 1px 6px 0 rgb(0 0 0 , 38%)",
  },
  addButton: {
    color: "green",
    fontSize: 20,
  },
  form: {
    position: "relative",
    borderRadius: 50,
    marginBottom: 40,
  },
  checkBox: {
    marginRight: 15,
  },
};

export default function State() {
  const [toDos, setToDos] = useState([
    { value: "Egg", checked: false, editing: false },
    { value: "Bread", checked: false, editing: false },
    { value: "Bacon", checked: false, editing: false },
  ]);
  const [input, setInput] = useState("");

  const addToDo = () => {
    const newList = [
      ...toDos,
      { value: input, checked: false, editing: false },
    ];
    setToDos(newList);
    setInput("");
  };

  const removeItem = (index) => {
    const newList1 = toDos.filter((todo, ind) => index !== ind);
    setToDos(newList1);
  };

  const editItem = (index) => {
    const newList = toDos.map((todo, ind) => {
      if (ind === index) {
        const newTodo = { ...todo };
        newTodo.editing = !newTodo.editing;
        return newTodo;
      }
      return todo;
    });
    setToDos(newList);
  };

  const updateItem = (e, index) => {
    // console.log(e.target.value);
    e.preventDefault();
    // if (e.key === "Enter") {
    const newList = toDos.map((todo, ind) => {
      if (ind === index) {
        const newTodo = { ...todo };
        newTodo.editing = !newTodo.editing;
        newTodo.value = e.target.value;
        return newTodo;
      }
      return todo;
    });
    setToDos(newList);
    // }
  };

  const handleCheck = (index) => {
    const newList = toDos.map((todo, ind) => {
      if (ind === index) {
        const newTodo = { ...todo };
        newTodo.checked = !newTodo.checked;
        return newTodo;
      }
      return todo;
    });
    setToDos(newList);
  };
  return (
    <div style={styles.wrapper}>
      <form
        style={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          // addToDo();
        }}
      >
        <input
          style={styles.input}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addToDo} style={styles.button} type="submit">
          <IoIosAddCircle style={styles.addButton} />
        </button>
      </form>

      <ul>
        {toDos.map((todo, index) => (
          <li key={index} style={styles.list}>
            {todo.editing ? (
              <>
                <input
                  type="text"
                  defaultValue={todo.value}
                  onClick={
                    (e) => updateItem(e, index)
                    // onKeyDown={(e) => updateItem(e, index)
                  }
                />
                <button style={styles.editButton} type="submit">
                  <RiEditFill />
                </button>
              </>
            ) : (
              <div>
                <input
                  style={styles.checkBox}
                  type="checkbox"
                  checked={todo.checked}
                  onClick={() => handleCheck(index)}
                />
                <span
                  style={{
                    textDecoration: todo.checked ? "line-through" : " ",
                  }}
                >
                  {todo.value}
                </span>
                <button
                  style={styles.editButton}
                  onClick={() => editItem(index)}
                >
                  <RiEditFill />
                </button>
                <button style={styles.button} onClick={() => removeItem(index)}>
                  <MdDelete color="red" />
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

// State();
