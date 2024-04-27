import React, { useState } from "react";
import Input from "@components/ui/input";
import Button from "../ui/button";

type FormProps = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  comment: string;
};

const Form = () => {
  const [form, setForm] = useState<FormProps>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    comment: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
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
          />
          <Input
            label="Last Name"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
          />
          <Input
            label="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          <Input
            label="Phone Number"
            name="phoneNumber"
            value={form.phoneNumber}
            onChange={handleChange}
          />
          <Input
            label="Comment"
            name="comment"
            value={form.comment}
            onChange={handleChange}
            textarea
          />
          <div className="mt-3">
            <Button type="submit" name="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
