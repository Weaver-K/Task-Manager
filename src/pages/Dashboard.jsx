import { useEffect, useState } from "react";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Load tasks from localStorage (same source TaskManager uses)
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const pending = total - completed;

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow text-center">
          <h2 className="text-xl font-semibold mb-2">Total Tasks</h2>
          <p className="text-2xl font-bold">{total}</p>
        </div>

        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow text-center">
          <h2 className="text-xl font-semibold mb-2">Completed</h2>
          <p className="text-2xl font-bold text-green-500">{completed}</p>
        </div>

        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow text-center">
          <h2 className="text-xl font-semibold mb-2">Pending</h2>
          <p className="text-2xl font-bold text-yellow-500">{pending}</p>
        </div>
      </div>
    </div>
  );
}
