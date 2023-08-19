"use client";
import { useState } from "react";
import styled from "styled-components";
import useForm from "@/hooks/useForm";
import Button from "./ui/button/Button";
import Input from "./ui/input/Input";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface AuthFormProps {
  fields: AuthField[];
  onSubmit: (formData: { [key: string]: string }) => void;
  onCancel?: () => void;
  submitButtonText?: string;
  loading: boolean;
}

export interface AuthField {
  name: string;
  label: string;
  type: string;
}

const AuthFormContainer = styled.div`
  /* Add your styling for the container here */
`;

const AuthFormTitle = styled.h2`
  /* Add your styling for the title here */
  margin-bottom: 30px;
`;

const AuthFormWrapper = styled.form`
  /* Add your styling for the form wrapper here */
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const AuthFormFieldWrapper = styled.div`
  /* Add your styling for the field wrapper here */
`;

const AuthFormAlternateRoute = styled.div`
  /* Add your styling for the alternate route section here */
`;

const AuthFormSmall = styled.small`
  /* Add your styling for the small element here */
`;

const AuthForm: React.FC<AuthFormProps> = ({
  fields,
  onSubmit,
  onCancel,
  submitButtonText = "Submit",
  loading = false
}) => {
  const initialState = fields.reduce<{ [key: string]: string }>(
    (acc, field) => ({
      ...acc,
      [field.name]: "",
    }),
    {}
  );

  const path = usePathname();

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    }
  };

  const { formData, handleChange, handleSubmit, resetForm, errors } = useForm(
    initialState,
    onSubmit
  );



  return (
    <AuthFormContainer>
      <AuthFormTitle>Sign In</AuthFormTitle>
      <AuthFormWrapper onSubmit={handleSubmit}>
        {fields.map((field) => (
          <AuthFormFieldWrapper  key={field.name}>
            <Input
              label={field.label}
              name={field.name}
              type={field.type}
              id={field.name}
              value={formData[field.name]}
              onChange={(e) => handleChange(e, field.name)}
              error={errors[field.name]}
              showPasswordToggle={field.type === "password"}
            />
          </AuthFormFieldWrapper>
        ))}
        <AuthFormAlternateRoute className="alternate__route mb-2 float-right">
          {path === "/signin" ? (
            <AuthFormSmall className="text-[12px]">
              Don&#39;t have an account?{" "}
              <Link href={"/signup"} className="text-primary">
                Sign Up
              </Link>
            </AuthFormSmall>
          ) : (
            <AuthFormSmall className="text-[12px]">
              Already have an account?{" "}
              <Link href={"/signin"} className="text-primary">
                Sign In
              </Link>
            </AuthFormSmall>
          )}
        </AuthFormAlternateRoute>
        <Button size="medium" color="primary" disabled={loading}>
          {loading ? " loading..." : submitButtonText}
          
        </Button>
      </AuthFormWrapper>
    </AuthFormContainer>
  );
};

export default AuthForm;
