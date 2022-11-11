import * as React from 'react';
import { CSSModule } from './utils';

export interface AccordionItemProps extends React.HTMLAttributes<HTMLElement> {
  tag?: React.ElementType;
  cssModule?: CSSModule;
  ref?: React.Ref<HTMLElement>;
  innerRef?: React.Ref<HTMLElement>;
}

declare class AccordionItem extends React.Component<AccordionItemProps> {}
export default AccordionItem;
