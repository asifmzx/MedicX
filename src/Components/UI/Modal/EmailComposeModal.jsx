"use client";
import React, { useState } from "react";
import { Modal, Input, Typography, Form, Select } from "antd";
import Button from "../Button/Button";
import { GoPlus } from "react-icons/go";
import FirstMedication from "@/Components/Prescriptions/CreatePrescription/Medications/FirstMedication/FirstMedication";
import { BsEnvelopePlus } from "react-icons/bs";

const { TextArea } = Input;
const { Title, Text } = Typography;

const EmailComposeModal = () => {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  return (
    <div>
      <Button
        variant="secondary"
        Icon={BsEnvelopePlus}
        text="Compose"
        className="border border-gray-300 whitespace-nowrap"
        onClick={() => setOpen(true)}
      />

      <Modal
        title={null}
        centered
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
        style={{ top: 20, width: "70%" }}
        styles={{
          body: {
            maxHeight: "60vh",
            overflowY: "auto",
            paddingRight: "5px",
          },
        }}
        className="sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%] max-w-[600px]"
      >
        <div className="mb-4">
          <Title level={4}>Compose Email</Title>
        </div>

        <Form form={form} layout="vertical">
          <Form.Item
            label="To"
            name="To"
            rules={[
              { required: true, message: "Please enter recipient email" },
            ]}
          >
            <Input placeholder="Please enter recipient email" />
          </Form.Item>
          <Form.Item label="Subject" name="Subject">
            <Input placeholder="Enter Subject" />
          </Form.Item>

          <Form.Item label="Description" name="description">
            <TextArea placeholder="Enter description" rows={4} />
          </Form.Item>
        </Form>

        <div className="flex gap-x-2 pt-4">
          <Button
            variant="secondary"
            text="Send"
            onClick={() => setOpen(false)}
          />
          <Button
            variant="primary"
            className="border border-gray-300"
            text="Cancel"
            onClick={() => setOpen(false)}
          />
        </div>
      </Modal>
    </div>
  );
};

export default EmailComposeModal;
