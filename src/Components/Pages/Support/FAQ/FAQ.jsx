import SearchInput from "@/Components/UI/Inputs/SearchInput";
import { Collapse } from "antd";
import { AiOutlineSearch } from "react-icons/ai";

const FAQ = () => {
  const ans1 = (
    <p style={{ paddingInlineStart: 24 }}>
      To reset your password, click on the 'Forgot Password' link on the login
      page. Enter your email address, and we'll send you a link to reset your
      password. Follow the instructions in the email to create a new password.
    </p>
  );
  const ans2 = (
    <p style={{ paddingInlineStart: 24 }}>
      To add a new patient, navigate to the Patients section from the sidebar,
      then click on the 'Add Patient' button. Fill out the required information
      in the form and click 'Save' to create the patient record.
    </p>
  );
  const ans3 = (
    <p style={{ paddingInlineStart: 24 }}>
      To schedule an appointment, go to the Appointments section and click 'Add
      Appointment'. Select the patient, doctor, date, time, and appointment
      type. You can also add notes or specific instructions before saving the
      appointment.
    </p>
  );
  const ans4 = (
    <p style={{ paddingInlineStart: 24 }}>
      Yes, you can export patient data. Navigate to the Patients section, select
      the patients you want to export, then click the 'Export' button. You can
      choose between CSV, Excel, or PDF formats depending on your needs.
    </p>
  );
  const ans5 = (
    <p style={{ paddingInlineStart: 24 }}>
      To generate billing reports, go to the Reports section and select
      'Financial Reports'. You can filter by date range, department, or service
      type. Click 'Generate Report' to create the report, which can then be
      viewed, printed, or exported.
    </p>
  );
  const ans6 = (
    <p style={{ paddingInlineStart: 24 }}>
      Staff schedules can be managed in the Staff section. Select a staff member
      and click on 'Schedule'. You can set regular working hours, add
      exceptions, and manage time off requests. The system will automatically
      check for conflicts.
    </p>
  );
  const ans7 = (
    <p style={{ paddingInlineStart: 24 }}>
      If you encounter an error, first try refreshing the page. If the error
      persists, note the error message and the actions you were taking when it
      occurred. Submit a support ticket with these details so our team can
      assist you.
    </p>
  );
  const ans8 = (
    <p style={{ paddingInlineStart: 24 }}>
      To update insurance information, go to the patient's profile, click on the
      'Insurance' tab, and select 'Edit'. Update the necessary fields and save
      the changes. The system will automatically apply the new insurance
      information to future billing.
    </p>
  );
  const ans9 = (
    <p style={{ paddingInlineStart: 24 }}>
      Yes, you can customize your dashboard. Click on the settings icon in the
      top-right corner of the dashboard and select 'Customize Dashboard'. You
      can add, remove, or rearrange widgets based on your preferences and role.
    </p>
  );
  const ans10 = (
    <p style={{ paddingInlineStart: 24 }}>
      Automated reminders can be configured in the Settings section under
      'Notifications'. You can set up email, SMS, or in-app reminders, and
      specify how far in advance they should be sent. You can also customize the
      reminder message.
    </p>
  );

  const items = [
    {
      key: "1",
      label: "How do I reset my password?",
      children: ans1,
    },
    {
      key: "2",
      label: "How can I add a new patient to the system?",
      children: ans2,
    },
    {
      key: "3",
      label: "How do I schedule an appointment?",
      children: ans3,
    },
    {
      key: "4",
      label: "Can I export patient data?",
      children: ans4,
    },
    {
      key: "5",
      label: "How do I generate billing reports?",
      children: ans5,
    },
    {
      key: "6",
      label: "How can I manage staff schedules?",
      children: ans1,
    },
    {
      key: "7",
      label: "What should I do if I encounter an error?",
      children: ans2,
    },
    {
      key: "8",
      label: "Can I customize the dashboard?",
      children: ans3,
    },
    {
      key: "9",
      label: "How do I access my medical records?",
      children: ans4,
    },
    {
      key: "10",
      label: "How do I set up automated appointment reminders?",
      children: ans5,
    },
  ];

  return (
    <div className="bg-white p-5 rounded-lg space-y-6">
      <div className="pt-5">
        <p className="font-semibold text-2xl">Frequently Asked Questions</p>
        <p className="py-2">Common questions about our services</p>
      </div>
      <div className="w-full ">
        <SearchInput
          placeholder="Search contacts..."
          icon={AiOutlineSearch}
          inputClassName="text-sm text-gray-700 py-2"
          wrapperClassName=" w-full"
        />
      </div>
      <Collapse
        items={items}
        bordered={false}
        defaultActiveKey={["1"]}
        contentBg="#ffff"
        size="large"
      />
    </div>
  );
};

export default FAQ;
