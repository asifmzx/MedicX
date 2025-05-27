import Button from "@/Components/UI/Button/Button";
import ContactInfoForm from "./ContactInfoForm/ContactInfoForm";
import EmergencyContactForm from "./EmergencyContactForm/EmergencyContactForm";
import PersonalInfoForm from "./PersonalInfoForm/PersonalInfoForm";
import ProfilePhoto from "./ProfilePhoto/ProfilePhoto";

const PersonalInfo = () => {
  return (
    <div>
      <div className="p-4 bg-white rounded space-y-8">
        <PersonalInfoForm />
        <ContactInfoForm />
        <EmergencyContactForm />
        <ProfilePhoto />
      </div>
      <div className="py-4 space-x-4">
        <Button variant="primary" text="Cancel" />
        <Button variant="secondary" text="Register Patient" />
      </div>
    </div>
  );
};

export default PersonalInfo;
