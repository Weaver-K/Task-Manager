import TaskManager from "../components/TaskManager";

export default function Tasks() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">All Tasks</h1>
      <TaskManager />
    </div>
  );
}
