import type { Meta, StoryObj } from '@storybook/react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from './accordion';

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'inline-radio',
      options: ['single', 'multiple'],
    },
    defaultValue: {
      control: 'text',
      description: 'Item value(s) opened by default',
    },
    collapsible: {
      control: 'boolean',
    },
  },
  args: {
    type: 'single',
    collapsible: true,
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Option 1</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates,
          distinctio assumenda ipsam labore impedit quis error. Aut harum iure,
          quasi nobis, et similique quidem dolorem, voluptatibus corrupti nemo
          qui recusandae?
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>Option 2</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
          eligendi eos quae maiores enim, ipsum, explicabo laudantium veritatis
          voluptates dolores accusantium quaerat! Vitae id reiciendis corrupti
          nobis optio non fugiat.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger>Option 3</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
          ullam excepturi, aliquid debitis at ab, eius corrupti quasi laudantium
          impedit hic doloremque fuga modi vero. Similique itaque nisi molestiae
          minima?
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const MultipleOpen: Story = {
  args: {
    type: 'multiple',
  },
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Option one</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates,
          distinctio assumenda ipsam labore impedit quis error. Aut harum iure,
          quasi nobis, et similique quidem dolorem, voluptatibus corrupti nemo
          qui recusandae?
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>Option two</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
          eligendi eos quae maiores enim, ipsum, explicabo laudantium veritatis
          voluptates dolores accusantium quaerat! Vitae id reiciendis corrupti
          nobis optio non fugiat.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger>Option three</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
          ullam excepturi, aliquid debitis at ab, eius corrupti quasi laudantium
          impedit hic doloremque fuga modi vero. Similique itaque nisi molestiae
          minima?
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
