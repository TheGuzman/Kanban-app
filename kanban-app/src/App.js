
import './App.css';
import TaskBoard from './pages/task-board/task-board';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <Header></Header>
     <TaskBoard></TaskBoard>
    </div>
  );
}

export default App;
