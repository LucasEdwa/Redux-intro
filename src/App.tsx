import { AddTask } from "./components/AddTask";
import { TaskList } from "./components/TaskList";
 
// reducers
 const App = () => {
  return (
    <div className="App">
      <h1>Redux Example</h1>
      <AddTask />
      <TaskList />
    </div>
  );
}
export default App;