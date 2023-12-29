interface FormFieldProps {
  label: string;
  name: string;
  isRequired: boolean;
  disabled: boolean;
  type: "TextInput" | "Select" | "Radio";
  items?: Array<{ id: number; value: string }>;
  value: any;
  validation?: string;
}

export type FormFields = FormFieldProps[];

export type FormField = FormFieldProps;
