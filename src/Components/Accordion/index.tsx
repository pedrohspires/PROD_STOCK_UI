import React from 'react';
import * as AccordionRadix from '@radix-ui/react-accordion';
import classNames from 'classnames';
import { BsChevronDown } from 'react-icons/bs';

type accordionProps = {
    children: React.ReactNode,
    collapsible?: boolean,
    defaultValue?: any
}

const Accordion = ({ children, collapsible, defaultValue }: accordionProps) => (
    <AccordionRadix.Root className="AccordionRoot w-full" type="single" defaultValue={defaultValue} collapsible={collapsible}>
        {children}
    </AccordionRadix.Root>
);

type accordionItemProps = {
    children: React.ReactNode,
    value: any,
}

const AccordionItem = ({ children, value }: accordionItemProps) => (
    <AccordionRadix.Item className="AccordionItem rounded-md" value={value}>
        {children}
    </AccordionRadix.Item>
);

type accordionTrigger = {
    children: React.ReactNode,
    className: string,
    collapsible: boolean,
}

AccordionItem.Trigger = React.forwardRef(({ children, className, collapsible, ...props }: accordionTrigger & any, forwardedRef) => {
    return (
        <AccordionRadix.Header className="AccordionHeader">
            <AccordionRadix.Trigger
                className={classNames('AccordionTrigger w-full pr-2 hover:bg-gray-100 dark:hover:bg-gray-700 ', className)}
                {...props}
                ref={forwardedRef}
            >
                {children}

                {collapsible && <BsChevronDown className="AccordionChevron text-white" aria-hidden />}
            </AccordionRadix.Trigger>
        </AccordionRadix.Header>
    )
});

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