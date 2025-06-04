import OrderFulfillment from "./OrderFulfillment/OrderFulfillment";
import SupplierDistribution from "./SupplierDistribution/SupplierDistribution";
import SupplierPerformance from "./SupplierPerformance/SupplierPerformance";

const Suppliers = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
      <div className="col-span-1 ">
        <SupplierDistribution />
      </div>
      <div className="col-span-1">
        <OrderFulfillment />
      </div>
      <div className="col-span-1 sm:col-span-2">
        <SupplierPerformance />
      </div>
    </div>
  );
};

export default Suppliers;
