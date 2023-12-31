import * as React from "react";

import { CSSModule } from "./utils";

export interface FormGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  [key: string]: any;
  row?: boolean;
  check?: boolean;
  switch?: boolean;
  inline?: boolean;
  noMargin?: boolean;
  floating?: boolean;
  disabled?: boolean;
  tag?: React.ElementType;
  cssModule?: CSSModule;
}

declare class FormGroup extends React.Component<FormGroupProps> {}
export default FormGroup;
