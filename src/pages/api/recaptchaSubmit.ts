import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  const token = req.body.recaptchaToken;

  if (!secretKey) {
    return res
      .status(500)
      .json({ message: "Missing RECAPTCHA_SECRET_KEY environment variable" });
  }

  if (!token) {
    return res
      .status(400)
      .json({ message: "Missing recaptchaToken in request body" });
  }

  try {
    const response = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${secretKey}&response=${token}`,
      }
    );

    if (!response.ok) {
      const errorResponse = await response.text();
      throw new Error(`Failed to verify reCAPTCHA: ${errorResponse}`);
    }

    const data = await response.json();

    console.log(data.score);

    if (!data.success) {
      return res.status(400).json({ message: "Failed reCAPTCHA verification" });
    }
    res.status(200).json({ message: "Form submitted successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "An error occurred while processing the request" });
  }
}
