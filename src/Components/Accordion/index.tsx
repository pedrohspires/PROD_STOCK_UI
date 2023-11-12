import React from 'react';
import * as AccordionRadix from '@radix-ui/react-accordion';
import classNames from 'classnames';
import { BsChevronDown } from 'react-icons/bs';

const Accordion = ({ children, collapsible, defaultValue }: { children: React.ReactNode, collapsible?: boolean, defaultValue?: any }) => (
    <AccordionRadix.Root className="AccordionRoot w-full" type="single" defaultValue={defaultValue} collapsible={collapsible}>
        {children}
    </AccordionRadix.Root>
);

const AccordionItem = ({ children, value }: { children: React.ReactNode, value: any }) => (
    <AccordionRadix.Item className="AccordionItem" value={value}>
        {children}
    </AccordionRadix.Item>
);

AccordionItem.Trigger = React.forwardRef(({ children, className, ...props }: any, forwardedRef) => (
    <AccordionRadix.Header className="AccordionHeader">
        <AccordionRadix.Trigger
            className={classNames('AccordionTrigger w-full', className)}
            {...props}
            ref={forwardedRef}
        >
            {children}
            <BsChevronDown className="AccordionChevron" aria-hidden />
        </AccordionRadix.Trigger>
    </AccordionRadix.Header>
));

AccordionItem.Content = React.forwardRef(({ children, className, ...props }: any, forwardedRef) => (
    <AccordionRadix.Content
        className={classNames('AccordionContent', className)}
        {...props}
        ref={forwardedRef}
    >
        <div className="AccordionContentText">{children}</div>
    </AccordionRadix.Content>
));

Accordion.Item = AccordionItem;
export default Accordion;