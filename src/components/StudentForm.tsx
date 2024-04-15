import React from "react";
import axios from "axios";
import { Button, Checkbox, Form, type FormProps, Input, message } from "antd";

const StudentForm = () => {
  type FieldType = {
    studentName?: string;
    mobileNumber?: number;
    email?: string;
  };

  const [form] = Form.useForm();

  const onFinish = async (values:any) => {
    try {
      // Make a POST request to your backend API endpoint
      const response = await axios.post("http://localhost:3000/student/addStudent", values);
      message.success("Student Added Successfully");
      form.resetFields();


      console.log("Success:", response.data);
    } catch (error) {
      message.error("Error while adding student");
      console.error("Error:", error);
    }
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Studen Name"
          name="studentName"
          // rules={[{ required: true, message: "Please input your Name!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="MobileNumber"
          name="mobileNumber"
          // rules={[
          //   { required: true, message: "Please input your mobileNumber!" },
          // ]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Email"
          name="email"
          // rules={[
          //   { required: true, message: "Please input your email!" },
          // ]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default StudentForm;
