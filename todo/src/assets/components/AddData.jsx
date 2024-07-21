import React, { useState, useEffect } from 'react';

export const AddData = (props) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(props.name.map(item => ({ text: item, done: false })));
  }, [props.name]);

  const handleDone = (index) => {
    const newTasks = [...tasks];
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
  };

  const handleDelete = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div>
      <ul className='flex flex-col justify-center items-center text-xl'>
        {tasks.map((task, index) => (
          <li 
            className={`mt-3 p-3 border-b-2   border-gray-700 rounded-lg ${task.done ? 'line-through bg-green-300 text-black ' : ''}`} 
            key={index}
          >
            <span>
              <p className=''>{task.text}</p>
              <button 
                className='bg-green-400 text-white p-1 rounded-md ml-20' 
                onClick={() => handleDone(index)}
              >
                Done
              </button>
              <button 
                className='bg-red-400 text-white p-1 rounded-md ml-4' 
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
