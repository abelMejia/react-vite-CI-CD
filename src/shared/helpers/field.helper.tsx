import { CheckBoxInput, SelectInput, TextFieldInput } from "@components/inputFields";
import { IField } from "@interfaces/IField";

const FieldHelper = (field: IField) => {
   const { control, controlType, key } = field
   if (!control) { return }

   const controlTypes: { [key: string]: JSX.Element } = {
      textField: <TextFieldInput key={key} currentField={field} control={control}/>,
      checkbox:  <CheckBoxInput key={key} currentField={field} control={control}/>,
      selectField: <SelectInput key={key} currentField={field} control={control}/>
   }

   return controlTypes[controlType]
}

export default FieldHelper
