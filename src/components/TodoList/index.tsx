import { useContext } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { TodoContext } from "../../context/TodoContext";

import { Todo } from "../../types";

import "./index.css";

import iconCheck from "../../assets/icon-check.svg";
import iconCross from "../../assets/icon-cross.svg";

const TodoList = () => {
  const { todos, completeTodo, deleteTodo, filteredTodos, reorderTodos } =
    useContext(TodoContext);

  const handleCompleteTodo = (id: number) => {
    completeTodo(id);
  };

  const handleDeleteTodo = (id: number) => {
    deleteTodo(id);
  };

  const handleOnDragEnd = (result: any) => {
    if (!result.destination) return;

    const items = Array.from(todos);
    const [reorderedItem] = items.splice(result.source.index, 1);

    items.splice(result.destination.index, 0, reorderedItem);

    reorderTodos(items);
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="todos">
        {(provided) => (
          <ul {...provided.droppableProps} ref={provided.innerRef}>
            {filteredTodos.map((todo: Todo, index) => {
              return (
                <Draggable
                  key={todo.id}
                  draggableId={todo.id.toString()}
                  index={index}
                >
                  {(provided) => (
                    <li
                      key={todo.id}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <span
                        className={`checkmark ${todo.completed && "completed"}`}
                        onClick={() => handleCompleteTodo(todo.id)}
                      >
                        {todo.completed && (
                          <img src={iconCheck} alt="checkmark icon" />
                        )}
                      </span>
                      <p>{todo.text}</p>
                      <span className="cross">
                        <img
                          src={iconCross}
                          alt="cross icon"
                          onClick={() => handleDeleteTodo(todo.id)}
                        />
                      </span>
                    </li>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TodoList;
