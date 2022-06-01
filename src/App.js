import "./App.css";
import { Posts } from "./components/Posts";
import { Users } from "./components/Users";

function App() {
  return (
    <div className='App'>
      <Users />
      <Posts />
    </div>
  );
}

export default App;
