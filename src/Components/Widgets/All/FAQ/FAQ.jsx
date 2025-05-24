import { Collapse } from "antd";

const FAQ = () => {
  const ans1 = (
    <p style={{ paddingInlineStart: 24 }}>
      We accept most major insurance plans including Medicare, Blue Cross Blue
      Shield, Aetna, Cigna, and UnitedHealthcare. Please contact our billing
      department for specific questions about your coverage.
    </p>
  );
  const ans2 = (
    <p style={{ paddingInlineStart: 24 }}>
      You can schedule an appointment by calling our office during business
      hours, using our online patient portal, or through our mobile app. New
      patients will need to create an account and fill out some initial
      paperwork.
    </p>
  );
  const ans3 = (
    <p style={{ paddingInlineStart: 24 }}>
      Please bring your insurance card, a valid photo ID, a list of current
      medications, your medical history, and any relevant medical records or
      test results. Arriving 15 minutes early to complete paperwork is
      recommended.
    </p>
  );
  const ans4 = (
    <p style={{ paddingInlineStart: 24 }}>
      You can access your medical records through our secure patient portal. If
      you need assistance, please contact our medical records department at
      (555) 123-4567 or email records@clinicname.com.
    </p>
  );
  const ans5 = (
    <p style={{ paddingInlineStart: 24 }}>
      Our clinic is open Monday through Friday from 8:00 AM to 6:00 PM, and
      Saturday from 9:00 AM to 1:00 PM. We are closed on Sundays and major
      holidays. Emergency services are available 24/7.
    </p>
  );

  const items = [
    {
      key: "1",
      label: "What insurance plans do you accept?",
      children: ans1,
    },
    {
      key: "2",
      label: "How do I schedule an appointment?",
      children: ans2,
    },
    {
      key: "3",
      label: "What should I bring to my first appointment?",
      children: ans3,
    },
    {
      key: "4",
      label: "How do I access my medical records?",
      children: ans4,
    },
    {
      key: "5",
      label: "What are your hours of operation?",
      children: ans5,
    },
  ];

  return (
    <div className="bg-white p-4 rounded-lg ">
      <div className="p-4">
        <p className="font-semibold text-2xl">Frequently Asked Questions</p>
        <p className="py-2">Common questions about our services</p>
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
