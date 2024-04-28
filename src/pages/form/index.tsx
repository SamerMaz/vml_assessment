import { Form } from "@/components/form";
import React from "react";
import { ReCaptchaProvider } from "next-recaptcha-v3";

const form: React.FC = () => {
  return (
    <>
      <ReCaptchaProvider
        reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY ?? ""}
      >
        <Form />
      </ReCaptchaProvider>
    </>
  );
};

export default form;
