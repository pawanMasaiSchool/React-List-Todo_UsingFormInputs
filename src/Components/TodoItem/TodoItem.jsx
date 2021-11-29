import { useState } from "react";
import styling from "./TodoItem.module.css";

export default function TodoItem({
  title,
  status,
  description,
  handleDelete,
  id
}) {
  const [toggle, setToggle] = useState(status);
  const [btn, setBtn] = useState(styling.red);
  const toggleStatus = () => {
    // console.log("before",toggle);
    if (toggle === "Pending") {
      setBtn(styling.green);
      setToggle("Done");
    } else {
      setBtn(styling.red);
      setToggle("Pending");
    }
  };

  const deleteTask = () => {
    handleDelete(id);
  };

  // console.log("after",toggle);
  return (
    <div className={styling.item}>
      <pre>
        {title}
        <button className={btn} onClick={toggleStatus}>
          {toggle}
        </button>
        <button className={styling.delBtn} onClick={deleteTask}>
          Delete
        </button>
        <div className={styling.ptag}>Description: {description}</div>
      </pre>
    </div>
  );
}
