import Sidebar from "@/Components/Shared/Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-4 bg-gray-50 min-h-screen">{children}</main>
    </div>
  );
};
export default DashboardLayout;
