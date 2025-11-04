export default function About() {
  return (
    <section className="px-6 py-16 max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
      <h2 className="text-4xl font-bold mb-4 text-blue-600 dark:text-blue-400">
        About TaskTracker
      </h2>
      <p className="leading-relaxed mb-4">
        TaskTracker is a simple productivity app designed to help you keep track of 
        your daily activities. Whether it's studying, chores, or personal goals, 
        you can create, edit, and delete tasks easily.
      </p>
      <p className="leading-relaxed">
        Built with React, Express, and MongoDB, it offers a lightweight yet efficient
        way to stay on top of your day.
      </p>
    </section>
  );
}
