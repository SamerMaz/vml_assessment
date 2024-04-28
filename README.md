# VML ASSESSMENT
/*
 * web app that captures users data through a form.
 * It includes fields for first name, last name, email, phone number, and comment.
 * The form validates the input and displays error messages if necessary.
 * When the form is submitted, it sends the data to the server and displays a success message.
 */

Built with React, Next.js(pages router),Typescript, Tailwind CSS, and Google reCAPTCHA v3.


## Features

- Responsive web application with form validation
- Integration with Google reCAPTCHA v3 for bot protection
- Submission to a mock API endpoint for demonstration purposes


## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js version 18 or higher
- npm/yarn installed


## Environment Variables
The .env.local file should be on the root level and should contain the following variables:

**NEXT_PUBLIC_RECAPTCHA_KEY**: This is the public reCAPTCHA key, used on the client-side to interact with the reCAPTCHA service.
**RECAPTCHA_SECRET_KEY**: This is the secret reCAPTCHA key, used on the server-side to verify the reCAPTCHA response.
Getting your reCAPTCHA keys
To get your reCAPTCHA keys, you need to register your site with the reCAPTCHA service. Here are the steps:

Go to the reCAPTCHA website: [https://www.google.com/recaptcha/about/](https://www.google.com/recaptcha/about/)
Click on the 'Admin console' button in the upper right corner.
Log in with your Google account if you're not already logged in.
Go to v3 'admin console'
fill the form
Click on the 'Submit' button.
After registering, you'll be taken to a page with your site details. Here, you'll find your site key (public key) and secret key.
Copy these keys and paste them into your .env.local file, like so:
```bash
NEXT_PUBLIC_RECAPTCHA_KEY=your-public-key
RECAPTCHA_SECRET_KEY=your-secret-key
```


## Installation

Clone the repository: 

```bash
git clone https://github.com/SamerMaz/vml_assessment.git
cd your-project-name
npm install
npm run dev
```

## Testing
```bash
npm test 




