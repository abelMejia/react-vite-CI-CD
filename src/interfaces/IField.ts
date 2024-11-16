/* eslint-disable @typescript-eslint/no-explicit-any */
import { Control } from "react-hook-form";
import { Rule } from "./Rule"

interface IInputLabelProps {
  shrink: boolean,
}

interface InputProps {
    variant?: string
    label: string;
    fullWidth?: boolean
    margin?: string;
    autoFocus?: boolean
    disabled?: boolean
    required?: boolean
    autoComplete?: string
    InputLabelProps?: IInputLabelProps
    type?: string,
    InputProps?: {
      startAdornment?: JSX.Element;
      endAdornment?: JSX.Element,
      SelectProps?: { native: boolean },
      readOnly?: boolean
    }
    multiline?: boolean
    maxRows?: number
    placeholder?: string
    minRows?: number
    select?: boolean
    SelectProps?: { native: boolean }
    size?: string
    color?: string
    defaultChecked?: boolean
    icon?: JSX.Element
    checkedIcon?: JSX.Element
    indeterminate?: boolean
    options?: any
    sx?: any
    onChange?: (evt: any) => void
}

export interface IField {
  key: string
  rules?: Rule
  inputProps: InputProps
  controlType: string
  options?: JSX.Element[]
  control?: Control<any>
}
