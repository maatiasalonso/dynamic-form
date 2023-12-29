import { FormField } from "../../types";
import { RadioInput, SelectInput, TextInput } from "./collection";

interface FormInputProps {
  input: FormField;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const inputComponents = {
  TextInput,
  Select: SelectInput,
  Radio: RadioInput,
};

export const FormInput = ({ input, onChange }: FormInputProps) => {
  const InputComponent = inputComponents[input.type];
  return InputComponent && <InputComponent input={input} onChange={onChange} />;
};
