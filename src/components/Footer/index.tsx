import { useContext } from "react";

import { TodoContext } from "../../context/TodoContext";

const Footer = () => {
  const { filteredTodos } = useContext(TodoContext);

  if (filteredTodos.length === 0) {
    return null;
  }

  return (
    <footer>
      <p>Drag and drop to reorder list</p>
    </footer>
  );
};

export default Footer;
