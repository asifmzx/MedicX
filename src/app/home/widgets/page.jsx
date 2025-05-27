
import WidgetPage from "@/Components/Pages/Widgets/Widgets";

const Page = () => {
  return (
    <div className="p-6 space-y-8">
      <div>
        <h1 className="text-2xl md:text-4xl font-bold tracking-tight mb-1">
          Widgets
        </h1>
        <p className="text-gray-600">
          A collection of UI components and widgets for building dashboards and
          interfaces.
        </p>
      </div>
      <div>
        <WidgetPage />
      </div>
    </div>
  );
};

export default Page;
