// src/Components/Shared/Sidebar.jsx
import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-white border-r px-4 py-6 shadow-md">
      <h2 className="text-xl font-semibold mb-6">Dashboard</h2>
      <nav className="flex flex-col gap-4">
        <Link href="/Dashboard/AdminDashboard" className="hover:underline">
          Admin Dashboard
        </Link>
        <Link href="/Dashboard/DoctorDashboard" className="hover:underline">
          Doctor Dashboard
        </Link>
        <Link href="/Dashboard/PatientDashboard" className="hover:underline">
          Patient Dashboard
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
