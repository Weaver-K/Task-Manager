import PageTransition from "@/components/PageTransition";

export default function Tasks() {
  return (
    <PageTransition>
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Your Tasks</h2>
        <p className="text-muted-foreground">Manage your daily tasks easily.</p>
      </div>
    </PageTransition>
  );
}
