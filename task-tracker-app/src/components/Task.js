import { FaTimes } from 'react-icons/fa';

const task = ( { task, onDelete } ) => {
  return (
    <div className='task'>
      <h3>{task.text}<FaTimes onClick={() => onDelete(task.id)} style={{ color: 'red', cursor: 'pointer'}}/></h3>
      <p>{task.day}</p>
    </div> 
  )
}

export default task

//you can install react icons by: npm i react-icons