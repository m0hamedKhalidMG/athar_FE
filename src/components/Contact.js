// Contact.js
import React, { useState } from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  font-family: '29LT Riwaya', sans-serif;
  padding: 20px;
  direction: rtl;
  background-color: #f1ede1;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1024px) {
    padding: 40px;
  }
`;

const Title = styled.h2`
  color: #3b1112;
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;

  @media (min-width: 1024px) {
    font-size: 48px;
  }
`;

const Form = styled.form`
  background-color: #fff;
  padding: 20px;
  border-radius: 15px;
  width: 100%;
  max-width: 600px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (min-width: 1024px) {
    padding: 30px;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #ddd;
  font-size: 16px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #ddd;
  font-size: 16px;
  min-height: 150px;
`;

const SubmitButton = styled.button`
  background-color: #3b1112;
  color: #f1ede1;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #986c4a;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // من هنا يمكن إضافة منطق إرسال البيانات إلى السيرفر أو البريد الإلكتروني
    console.log(formData);
    alert('تم إرسال الرسالة بنجاح!');
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <ContactContainer>
      <Title>تواصل معنا</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="اسمك"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="بريدك الإلكتروني"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextArea
          name="message"
          placeholder="رسالتك"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <SubmitButton type="submit">إرسال</SubmitButton>
      </Form>
    </ContactContainer>
  );
};

export default Contact;
