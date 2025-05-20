"use client";
import React, { useState } from "react";
import { Modal, Input, Typography, Form } from "antd";
import Button from "../Button/Button";
import { GoPlus } from "react-icons/go";

const { TextArea } = Input;
const { Title, Text } = Typography;

const DoctorSpecializationsModal = () => {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  return (
    <div>
      <Button
        variant="secondary"
        Icon={GoPlus}
        text="Add Specialization"
        className="border border-gray-300 whitespace-nowrap"
        onClick={() => setOpen(true)}
      />

      <Modal
        title={null}
        centered
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
        style={{ top: 20 }}
      
        className="w-[70%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%] max-w-[600px]"
      >
        <div className="mb-6">
          <Title level={4}>Add New Specialization</Title>
          <Text type="secondary">
            Create a new medical specialization for your clinic.
          </Text>
        </div>

        <Form form={form} layout="vertical">
          <Form.Item
            label="Specialization Name"
            name="specializationName"
            rules={[
              { required: true, message: "Please enter specialization name" },
            ]}
          >
            <Input placeholder="Enter specialization name" />
          </Form.Item>

          <Form.Item label="Description" name="description">
            <TextArea placeholder="Enter description" rows={3} />
          </Form.Item>

          <Form.Item label="Department" name="department">
            <Input placeholder="Enter department" />
          </Form.Item>
        </Form>

        <div className="flex gap-x-2">
          <Button
            variant="secondary"
            className=""
            text="Save Specialization"
            onClick={() => setOpen(false)}
          />
          <Button
            variant="primary"
            className="border border-gray-300 "
            text="Cancel"
            onClick={() => setOpen(false)}
          />
        </div>
      </Modal>
    </div>
  );
};

export default DoctorSpecializationsModal;
