import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';

const ContactPage: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.init(import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY);
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current!
      );
      setSubmitStatus('success');
      if (formRef.current) formRef.current.reset();
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageWrapper>
      <PageHeader>
        <Heading>Get in Touch</Heading>
        <Underline />
      </PageHeader>

      <FormContainer>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="from_name">Full Name</Label>
            <Input
              type="text"
              id="from_name"
              name="from_name"
              required
              placeholder="Enter your full name"
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="from_email">Email Address</Label>
            <Input
              type="email"
              id="from_email"
              name="from_email"
              required
              placeholder="Enter your email address"
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="subject">Subject</Label>
            <Input
              type="text"
              id="subject"
              name="subject"
              required
              placeholder="Enter message subject"
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="message">Message</Label>
            <TextArea
              id="message"
              name="message"
              required
              placeholder="Enter your message"
              rows={5}
            />
          </FormGroup>

          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </SubmitButton>

          {submitStatus === 'success' && (
            <StatusMessage $success>Message sent successfully!</StatusMessage>
          )}
          {submitStatus === 'error' && (
            <StatusMessage>Failed to send message. Please try again.</StatusMessage>
          )}
        </Form>
      </FormContainer>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  min-height: 100vh;
  background-color: #ffffff;
  padding: 4rem 2rem;
  
  @media (max-width: 640px) {
    padding: 2rem 1rem;
  }
`;

const PageHeader = styled.header`
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
`;

const Heading = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #000000;
  margin-bottom: 1rem;
  letter-spacing: -0.025em;
  
  @media (max-width: 640px) {
    font-size: 2.25rem;
  }
  
  animation: fadeInDown 0.8s ease-out;
  
  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Underline = styled.div`
  height: 4px;
  width: 120px;
  background: linear-gradient(90deg, #6d28d9 0%, #a78bfa 100%);
  margin: 0 auto;
  border-radius: 2px;
  
  animation: expandWidth 1s ease-out forwards;
  
  @keyframes expandWidth {
    from {
      width: 0;
    }
    to {
      width: 120px;
    }
  }
`;

const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  
  animation: fadeIn 0.8s ease-out;
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: #000000;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #6d28d9;
    box-shadow: 0 0 0 3px rgba(109, 40, 217, 0.1);
  }
`;

const TextArea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  font-size: 1rem;
  resize: vertical;
  min-height: 120px;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #6d28d9;
    box-shadow: 0 0 0 3px rgba(109, 40, 217, 0.1);
  }
`;

const SubmitButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #6d28d9;
  color: #ffffff;
  border: none;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #4c1d95;
    transform: translateY(-2px);
  }
  
  &:disabled {
    background-color: #9ca3af;
    cursor: not-allowed;
    transform: none;
  }
`;

const StatusMessage = styled.p<{ $success?: boolean }>`
  text-align: center;
  padding: 0.75rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  background-color: ${props => props.$success ? '#dcfce7' : '#fee2e2'};
  color: ${props => props.$success ? '#166534' : '#991b1b'};
`;

export default ContactPage;