import { Form, Input, Modal } from "antd";

interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const LoginModal = ({ isOpen, setIsOpen }: Props) => {
  console.log("🚀 ~ LoginModal ~ isOpen:", isOpen)
  const [form] = Form.useForm();

  const onSubmitHandler = (values: any) => {
    console.log("Form Submitted:", values);
  };

  return (
    <Modal
      open={isOpen}
      onCancel={() => setIsOpen(false)} // Close modal on cancel
      onOk={() => form.submit()} // Submit form on modal's OK button
      title="Login"
      centered
    >
      <div>
        <Form
          form={form}
          onFinish={onSubmitHandler}
          layout="vertical"
        >
          <Form.Item
            name={"username"}
            label="User Name"
            rules={[{ required: true, message: "This field is required." }]}
          >
            <Input type="text" placeholder="Username" />
          </Form.Item>
          <Form.Item
            name={"password"}
            label="Password"
            rules={[{ required: true, message: "This field is required." }]}
          >
            <Input.Password type="password" placeholder="Password" />
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
};

export default LoginModal;
