import React, { useState } from "react";
import Input from "@components/ui/input";
import Button from "../ui/button";
import { isValidEmail, validatePhoneNumber } from "@/utils";
import { submitFormData } from "@/utils/api";

export type FormProps = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  comment: string;
};
type FormErrors = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  comment?: string;
};

const initialFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  comment: "",
};

const Form = () => {
  const [form, setForm] = useState<FormProps>(initialFormValues);
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const errors: FormErrors = {};
    if (!form.firstName.trim()) {
      errors.firstName = "First Name is required";
    }
    if (!form.lastName.trim()) {
      errors.lastName = "Last Name is required";
    }
    if (!form.email.trim()) {
      errors.email = "Email is required";
    } else if (!isValidEmail(form.email)) {
      errors.email = "Email is invalid it should include @ and .";
    }
    if (!form.phoneNumber.trim()) {
      errors.phoneNumber = "Phone Number is required";
    } else if (!validatePhoneNumber(form.phoneNumber)) {
      errors.phoneNumber = "Phone Number is invalid";
    }
    if (!form.comment.trim()) {
      errors.comment = "Comment is required";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const submitForm = async (formValues: FormProps) => {
    setLoading(true);
    try {
      const data = await submitFormData(formValues);
      alert(`Form submitted successfully ${JSON.stringify(data)}`);
      setLoading(false);
      setForm(initialFormValues);
      return data;
    } catch (error) {
      console.error("Error submitting form", error);
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) {
      console.error("Form validation errors:", formErrors);
      return;
    }
    submitForm(form);
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (!value.trim()) {
      setFormErrors((prev) => ({ ...prev, [name]: `${name} is required` }));
    } else if (name === "email" && !isValidEmail(value)) {
      setFormErrors((prev) => ({
        ...prev,
        email: "Email is invalid it should include @ and .",
      }));
    } else if (name === "phoneNumber" && !validatePhoneNumber(value)) {
      setFormErrors((prev) => ({
        ...prev,
        phoneNumber: "Phone Number is invalid",
      }));
    } else {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <div className="flex justify-center items-center ">
      <div className="w-full sm:max-w-md md:max-w-lg max-w-lg px-4 py-6 mx-auto border border-gray-300 rounded-lg shadow-lg">
        <h1 className="text-center text-3xl font-bold my-6">Form</h1>
        <form onSubmit={handleSubmit} className="space-y-0">
          <Input
            label="First Name"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            error={formErrors.firstName}
            onBlur={handleBlur}
          />
          <Input
            label="Last Name"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            error={formErrors.lastName}
            onBlur={handleBlur}
          />
          <Input
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            error={formErrors.email}
            onBlur={handleBlur}
          />
          <Input
            label="Phone Number"
            name="phoneNumber"
            type="tel"
            value={form.phoneNumber}
            onChange={handleChange}
            error={formErrors.phoneNumber}
            onBlur={handleBlur}
          />
          <Input
            label="Comment"
            name="comment"
            value={form.comment}
            onChange={handleChange}
            textarea
            error={formErrors.comment}
            onBlur={handleBlur}
          />
          <div className="mt-3">
            <Button type="submit" name="Submit" disable={loading} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
