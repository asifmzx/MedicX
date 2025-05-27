"use client";
import React, { useState } from "react";
import { Modal, Input, Typography, Form, Select } from "antd";
import Button from "../Button/Button";
import { GoPlus } from "react-icons/go";
import FirstMedication from "@/Components/Pages/Prescriptions/CreatePrescription/Medications/FirstMedication/FirstMedication";

const { TextArea } = Input;
const { Title, Text } = Typography;

const NewMedicineTemplateModal = () => {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  return (
    <div>
      <Button
        variant="secondary"
        Icon={GoPlus}
        text="New Template"
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
        <div className="mb-6">
          <Title level={4}>Add New Specialization</Title>
          <Text type="secondary">
            Create a new medical specialization for your clinic.
          </Text>
        </div>

        <Form form={form} layout="vertical">
          <Form.Item
            label="Template Name"
            name="templateName"
            rules={[{ required: true, message: "Please enter template name" }]}
          >
            <Input placeholder="Enter template name" />
          </Form.Item>

          <Form.Item label="Category" name="category">
            <Select placeholder="Select category">
              <Select.Option value="Endocrine">Endocrine</Select.Option>
              <Select.Option value="Allergy">Allergy</Select.Option>
              <Select.Option value="Neurology">Neurology</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label="Description" name="description">
            <TextArea placeholder="Enter description" rows={3} />
          </Form.Item>

          <FirstMedication />
        </Form>

        <div className="flex gap-x-2 pt-4">
          <Button
            variant="secondary"
            text="Save Specialization"
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

export default NewMedicineTemplateModal;
