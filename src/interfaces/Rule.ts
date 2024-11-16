/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Rule {
  required: boolean | string
  maxLength?: number
  minLength?: number
  min?: number
  max?: number
  pattern?: any
}
