import PageTransition from "./../components/PageTransition";

export default function Dashboard() {
  return (
    <PageTransition>
      <div className="p-6 text-center space-y-4">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Welcome to your Task Tracker!</p>
      </div>
    </PageTransition>
  );
}
