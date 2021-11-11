
import './App.css';
import TaskBoard from './components/task-board/task-board';
import Header from './components/header';
import SubHeader from './components/sub-header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <SubHeader></SubHeader> 
     <TaskBoard></TaskBoard>
    </div>
  );
}

export default App;
