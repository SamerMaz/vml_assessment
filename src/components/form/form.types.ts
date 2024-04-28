export type FormProps = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  comment: string;
};

export type FormErrors = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  comment?: string;
};