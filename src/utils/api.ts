import { FormProps } from "@/components/form";

const API_BASE_URL = "https://jsonplaceholder.typicode.com";

export const submitFormData = async (formValues: FormProps) => {
  try {
    const response = await fetch(`${API_BASE_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        formValues,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to submit form data");
    }

    return response.json();
  } catch (error) {
    throw new Error("Failed to submit form data");
  }
};

export const recaptchaPost = async (form: FormProps, recaptchaToken: any) => {
  try {
    const response = await fetch("/api/recaptchaSubmit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: form,
        recaptchaToken,
      }),
    });
    return response.json();
  } catch (error) {
    console.error("Error submitting ReCaptcha token", error);
  }
};
