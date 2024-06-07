import Input from "./Input";
import Label from "./Label";

const InputForm = (props) => {
    const {htmlFor,label, name, type, placeholder} = props;
  return (
    <div className="mb-6">
      <Label htmlFor={htmlFor}>{label}</Label>
      <Input name={name} type={type} placeholder={placeholder} />
    </div>
  );
}
export default InputForm;