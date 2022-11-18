import React, { Fragment } from "react";

import Controls from "./components/Controls";
import Header from "./components/Header";
import Input from "./components/Input";
import TodoList from "./components/TodoList";

function App() {
  return (
    <Fragment>
      <div className="background bg-dark" />
      <div className="App">
        <Header />

        <Input />

        <div className="list">
          <TodoList />
          <Controls />
        </div>

        <footer>
          <p>Drag and drop to reorder list</p>
        </footer>
      </div>
    </Fragment>
  );
}

export default App;

// TODO
// 1. Responsive design
// 3. Dark theme
// 4. Add task
// 5. Delete task
// 6. Complete task
// 7. Clear completed
// 8. Filter
// 9. Counter
// 10. Firebase
// 11. Drag and drop
// 12. Add task with enter key
// 13. Align the input field text with the span
