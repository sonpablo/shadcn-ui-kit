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
    collapsible: false, // collapsible only applies to type="single"
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

export const Disabled: Story = {
  args: {
    disabled: true,
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

export const DisabledItem: Story = {
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem value="item-1" disabled={true}>
        <AccordionTrigger>Option one (Disabled)</AccordionTrigger>
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

export const CollapsibleBehavior: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">
          With collapsible=true (default)
        </h3>
        <p className="text-muted-foreground text-sm">
          Click an open item to close it. All items can be closed.
        </p>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Can be closed</AccordionTrigger>
            <AccordionContent>
              This accordion has collapsible=true, so you can close this item by
              clicking it again.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Click to expand</AccordionTrigger>
            <AccordionContent>More content here...</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">With collapsible=false</h3>
        <p className="text-muted-foreground text-sm">
          At least one item must always be open. Clicking an open item won't
          close it.
        </p>
        <Accordion type="single" collapsible={false} defaultValue="item-1">
          <AccordionItem value="item-1">
            <AccordionTrigger>Always one open</AccordionTrigger>
            <AccordionContent>
              This accordion has collapsible=false, so one item must always be
              open. Try clicking this while it's open - nothing happens!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Click to switch</AccordionTrigger>
            <AccordionContent>
              Clicking a closed item will open it and close the other.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  ),
};
