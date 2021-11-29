import { useState } from "react";
import styling from "./Input.module.css";

export default function Input({ CreatingTask }) {
  // const [text, setText] = useState("");

  // const [desc, setDesc] = useState("");

  // const handleTitleChange = (e) => {
  //   if (e.target.name === "title") {
  //     setText(e.target.value);
  //   } else if (e.target.name === "desc") {
  //     setDesc(e.target.value);
  //   }
  // };

  const [formState, setFormState] = useState({ title: "", desc: "" });

  const handleFormChange = (e) => {
    // e.preventDefault();
    // console.log(e);
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  console.log(formState);

  const handleAddingTask = (e) => {
    e.preventDefault();
    CreatingTask(formState.title, formState.desc);
    // console.log(formState.title, formState.desc);
  };

  // console.log(text);
  return (
    <>
      <form onChange={handleFormChange}>
        <input
          name="title"
          placeholder="Write Title"
          // onChange={handleFormChange}
          className={styling.myInput}
        />
        <input
          name="desc"
          placeholder="Description"
          // onChange={handleFormChange}
          className={styling.myDescription}
        />
        <button className={styling.addBtn} onClick={handleAddingTask}>
          +
        </button>
      </form>
    </>
  );
}
