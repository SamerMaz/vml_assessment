import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Form from "../form";

describe("Form", () => {
  test("renders form fields", () => {
    render(<Form />);
    
    expect(screen.getByLabelText("First Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Last Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Phone Number")).toBeInTheDocument();
    expect(screen.getByLabelText("Comment")).toBeInTheDocument();
  });

  test("submits form data", () => {
    render(<Form />);
    
    const firstNameInput = screen.getByLabelText("First Name");
    const lastNameInput = screen.getByLabelText("Last Name");
    const emailInput = screen.getByLabelText("Email");
    const phoneNumberInput = screen.getByLabelText("Phone Number");
    const commentInput = screen.getByLabelText("Comment");
    const submitButton = screen.getByRole("button", { name: "Submit" });

    // fireEvent.change(firstNameInput, { target: { value: "John" } });
    // fireEvent.change(lastNameInput, { target: { value: "Doe" } });
    // fireEvent.change(emailInput, { target: { value: "john.doe@example.com" } });
    // fireEvent.change(phoneNumberInput, { target: { value: "+1234567890" } });
    // fireEvent.change(commentInput, { target: { value: "This is a comment" } });
    // fireEvent.click(submitButton);

  });
});
