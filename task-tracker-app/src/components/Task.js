import { FaTimes } from 'react-icons/fa';

const task = ( { task, onDelete, onToggle } ) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
      <h3>{task.text}<FaTimes onClick={() => onDelete(task.id)} style={{ color: 'red', cursor: 'pointer'}}/></h3>
      <p>{task.day}</p>
    </div> 
  )
}

export default task

//you can install react icons by: npm i react-icons