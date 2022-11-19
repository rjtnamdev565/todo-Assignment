import { useContext } from "react";

import { TodoContext } from "../../context/TodoContext";

const Footer = () => {
  const { todos } = useContext(TodoContext);

  if (todos.length === 0) {
    return null;
  }

  return (
    <footer>
      <p>Drag and drop to reorder list</p>
    </footer>
  );
};

export default Footer;
