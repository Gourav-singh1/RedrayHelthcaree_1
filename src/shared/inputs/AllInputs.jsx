import InputLayout from "./InputLayout";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";

export function CustomForm({ children, ...props }) {
  return (
    <div className="grid grid-nogutter contact-form " {...props}>
      {children}
    </div>
  );
}

// custom input  ======================>
export const CustomInput = ({
  label,
  name,
  data,
  value,  
  onChange,
  errorMessage,
  extraClassName,
  required,
  col,
  inputClass,
  maxLength,
  placeholder,
  ...props
}) => {
  return (
    <InputLayout
      col={col || 6}
      label={label}
      name={name}
      required={required}
      extraClassName={extraClassName}
      data={data}
      errorMessage={errorMessage}
      maxLength={maxLength}
    >
      <InputText
        id={name}
        name={name}
        placeholder={placeholder}
        value={value || data?.[name]}
        onChange={(e) =>
          onChange &&
          onChange({
            ...e,
            name: e.target.name,
            value: e.target.value.slice(0, maxLength),
          })
        }
        className={`w-full p-2 text-sm  input-underline ${
          inputClass ? inputClass : ""
        } ${errorMessage ? "p-invalid" : ""}`}
        {...props}
      />
    </InputLayout>
  );
};
// CustomTextArea =================
export const CustomTextArea = ({
    label,
    name,
    onChange,
    data,
    value,
    errorMessage,
    extraClassName,
    required,
    col,
    inputClass,
    maxLength,
    ...props
}) => {
    return (
        <InputLayout
            col={col || 12}
            label={label}
            name={name}
            required={required}
            extraClassName={extraClassName}
            data={data}
            errorMessage={errorMessage}
            maxLength={maxLength}
        >
            <InputTextarea
                id={name}
                name={name}
                value={value || data?.[name]}
                onChange={(e) => onChange && onChange({ name: e.target.name, value: e.target.value.slice(0, maxLength), ...e })}
                className={`w-full p-2 text-sm  input-underline ${inputClass ? inputClass : ""} ${errorMessage ? "p-invalid" : ""}`}
                {...props}
            />
            {errorMessage ? <small className="p-error">{errorMessage}</small> : null}
        </InputLayout>
    );
};