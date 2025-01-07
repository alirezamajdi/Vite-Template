import DashboardLayout from "src/layouts/DashboardLayout";

const Dashboard = () => {
  return (
    <DashboardLayout title="Dashboard">
      <div className="flex grow flex-col items-center justify-center">
        <h1>Sample Private Dashboard</h1>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
