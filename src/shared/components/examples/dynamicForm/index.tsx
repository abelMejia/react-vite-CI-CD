import { Divider } from "@mui/material";
import BasicFormWithBreakpoints from "./basicFormWithBreakpoints";
import BasicFormWithValidation from "./basicFormWithValidation";
import BasicFormWithSections from "./basicFormWithSections";
import SingIn from "@components/singIn";

function DynamicFormExamples() {
  return <>
      <BasicFormWithBreakpoints />
      <Divider />
      <BasicFormWithValidation />
      <Divider />
      <BasicFormWithSections />
      <Divider />
      <SingIn  />
  </>
}

export default DynamicFormExamples
