import {
  FormControl,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { FormField } from "../../types";
import { useState } from "react";

interface FormInputProps {
  input: FormField;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextInput = ({ input, onChange }: FormInputProps) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    if (input.validation === "email") {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      setEmailError(!emailRegex.test(event.target.value));
    }
    onChange(event);
  };

  return (
    <TextField
      label={input.label}
      name={input.name}
      required={input.isRequired}
      disabled={input.disabled}
      type={input.validation}
      value={input.value || email}
      variant="standard"
      fullWidth
      sx={{ mb: 2 }}
      error={emailError}
      onChange={handleEmailChange}
      helperText={emailError ? "Email no se encuentra en formato correcto" : ""}
    />
  );
};

export const SelectInput = ({ input, onChange }: FormInputProps) => (
  <TextField
    select
    label={input.label}
    disabled={input.disabled}
    required={input.isRequired}
    variant="standard"
    helperText={`Por favor seleccione ${input.label}`}
    fullWidth
    onChange={onChange}
    name={input.name}
  >
    {input.items?.map((item) => (
      <MenuItem key={item.id} value={item.value}>
        {item.value}
      </MenuItem>
    ))}
  </TextField>
);

export const RadioInput = ({ input, onChange }: FormInputProps) => (
  <FormControl
    style={{
      alignContent: "start",
      justifyContent: "start",
      display: "flex",
      marginTop: "1rem",
    }}
  >
    <FormLabel style={{ textAlign: "start" }}>{input.label}</FormLabel>
    <RadioGroup name={input.name} onChange={onChange}>
      {input.items?.map((item) => (
        <FormControlLabel
          key={item.id}
          value={item.value}
          control={<Radio />}
          label={item.value}
        />
      ))}
    </RadioGroup>
  </FormControl>
);
