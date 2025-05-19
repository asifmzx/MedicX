import Button from "@/Components/UI/Button/Button";
import AccountSettingsForm from "./AccountSettingsForm/AccountSettingsForm";
import SystemAccess from "./SystemAccess/SystemAccess";
import Notifications from "./Notifications/Notifications";

const AccountSettings = () => {
  return (
    <div>
      <div className="p-4 bg-white rounded space-y-6">
        <AccountSettingsForm />
        <SystemAccess />
        <Notifications />
      </div>
      <div className="py-4 space-x-4">
        <Button variant="primary" text="Cancel" />
        <Button variant="secondary" text="Register Patient" />
      </div>
    </div>
  );
};

export default AccountSettings;
