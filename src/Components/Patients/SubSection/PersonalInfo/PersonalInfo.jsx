import ContactInfoForm from "./ContactInfoForm/ContactInfoForm";
import EmergencyContactForm from "./EmergencyContactForm/EmergencyContactForm";
import PersonalInfoForm from "./PersonalInfoForm/PersonalInfoForm";

const PersonalInfo = () => {
  return (
    <div className="p-4 bg-white rounded space-y-8">
      <PersonalInfoForm />
      <ContactInfoForm />
      <EmergencyContactForm />
    </div>
  );
};

export default PersonalInfo;
