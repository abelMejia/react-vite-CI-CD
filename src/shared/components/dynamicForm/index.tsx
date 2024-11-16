/* eslint-disable @typescript-eslint/no-explicit-any */
import { Control } from "react-hook-form";
import Grid from '@mui/material/Grid2'
import FieldHelper from "src/shared/helpers/field.helper";
import { IField } from "@interfaces/IField";

interface Iprops {
  fields: IField[];
  control?: Control<any>;
  breakpoints?: { xs: number; }
}

const DynamicForm = ({fields, control, breakpoints = { xs: 12 } }: Iprops) =>  {
    return <>
      <Grid container spacing={2}>
        {fields.map((field: IField) => {
            field = {...field, control }
            return  <Grid size={breakpoints} key={field?.key}>{FieldHelper(field)}</Grid>
        })}
      </Grid>
    </>
}

export default DynamicForm;
