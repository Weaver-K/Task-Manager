export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center py-20 px-6 bg-gray-50 dark:bg-gray-900 text-center">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 dark:text-white mb-4">
        Welcome to <span className="text-blue-600 dark:text-blue-400">TaskTracker</span>
      </h1>
      <p className="text-gray-600 dark:text-gray-300 max-w-xl mb-8">
        Manage your daily chores, study reminders, and personal tasks — all in one place. 
        Stay organized and productive every day.
      </p>
      <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
        Get Started
      </button>
    </section>
  );
}
