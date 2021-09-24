import './App.css';
import {useState} from "react";
import Column from "./Column";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";


const initialState = [{
  title: 'To do',
  tasks: ['Learn JS', 'Learn React', 'Learn JS Practice', 'Learn JS Syntax'],
  color: 'grey',
  input: ''
}, {
  title: 'In progress',
  tasks: ['Learn JS', 'Learn React', 'Learn JS Practice', 'Learn JS Syntax'],
  color: 'blue',
  input: ''
}, {
  title: 'Review',
  tasks: ['Learn JS', 'Learn React', 'Learn JS Practice', 'Learn JS Syntax'],
  color: 'yellow',
  input: ''
}, {
  title: 'Done',
  tasks: ['Learn JS', 'Learn React', 'Learn JS Practice', 'Learn JS Syntax'],
  color: 'green',
  input: ''
}]

function App() {
  const [status, setStatus] = useState(initialState);

  const handleInputChange = (value, colIndex) => {
    const newStatus = [...status];
    newStatus[colIndex].input = value;
    setStatus(newStatus)
  }
  const handleAddTodo = (colIndex) => {
    const newStatus = [...status];
    newStatus[colIndex].tasks.push(newStatus[colIndex].input);
    newStatus[colIndex].input = '';
    setStatus(newStatus)
  }
  const handleShift = (itemIndex, fromCol, action) => {
    const newStatus = [...status];
    const temporary = newStatus[fromCol].tasks[itemIndex];
    newStatus[fromCol].tasks.splice(itemIndex, 1);
    newStatus[fromCol + action].tasks.push(temporary);
    setStatus(newStatus)
  }



  return (
      <div className="App">
        {status.map((el, i) => (
            <Column
                index={i}
                data={el}
                key={i}
                handleInputChange={handleInputChange}
                handleAddTodo={handleAddTodo}
                handleShift={handleShift}
                isFirst={i === 0}
                isLast={i === status.length - 1}
                //modal={modal}
                //toggle={toggle}
            />
        ))}


      </div>
  );
}

export default App;
