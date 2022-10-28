import Tasks from './Tasks';
import AddTask from './AddTask';

const Home = ( { tasks, showAddTask, toggleReminder, deleteTask } ) => {
  return (
    <>
      {showAddTask && <AddTask onAdd={AddTask}/>}
      {tasks.length > 0 ? ( <Tasks tasks={tasks} onToggle={toggleReminder} onDelete={deleteTask}/> ) : ('No Tasks To Show')}
    </>
  )
}

export default Home
