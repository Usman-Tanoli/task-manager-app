import React, { useState } from 'react';
import { TaskManager } from './components/TaskManager';

const taskManager = new TaskManager();

function App() {
  const [tasks, setTasks] = useState(taskManager.getTasks());
  const [form, setForm] = useState({ title: '', description: '', dueDate: '' });

  const handleAddTask = () => {
    taskManager.addTask(form.title, form.description, form.dueDate);
    setTasks([...taskManager.getTasks()]);
    setForm({ title: '', description: '', dueDate: '' });
  };

  const handleToggle = (id) => {
    taskManager.toggleComplete(id);
    setTasks([...taskManager.getTasks()]);
  };

  const handleDelete = (id) => {
    taskManager.deleteTask(id);
    setTasks([...taskManager.getTasks()]);
  };

  return (
    <div className="p-4 max-w-xl mx-auto mt-40 bg-slate-500 rounded-xl shadow-lg text-gradient-to-r from-slate-300 to-slate-500">
      <h1 className="text-4xl font-bold  text-center mb-10 font-serif">Task Manager</h1>
      <div className="mb-4 space-y-3">
        <input className="border p-2 w-full" placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
        <input className="border p-2 w-full" placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
        <input className="border p-2 w-full" placeholder="Due Date" value={form.dueDate} onChange={(e) => setForm({ ...form, dueDate: e.target.value })} />
        <button className="bg-blue-500 font-bold text-white px-4 py-2 rounded ml-[210px] hover:bg-gray-500 hover:text-white hover:shadow hover:border hover:border-white" onClick={handleAddTask}>Add Task</button>
      </div>

      <ul className="space-y-2 bg-white rounded">
        {tasks.map(task => (
          <li key={task.id} className="border p-3 rounded flex justify-between items-center">
            <div>
              <h2 className={`text-lg font-semibold ${task.isComplete ? 'line-through text-gray-500' : ''}`}>{task.title}</h2>
              <p className="text-sm text-gray-600">{task.description}</p>
              <p className="text-sm text-gray-400">Due: {task.dueDate}</p>
            </div>
            <div className="space-x-2">
              <button className="text-green-600" onClick={() => handleToggle(task.id)}>
                {task.isComplete ? 'Undo' : 'Complete'}
              </button>
              <button className="text-red-500" onClick={() => handleDelete(task.id)}>Delete</button>
            </div>
          </li>
        ))} 
      </ul>
    </div>
  );
}

export default App;
