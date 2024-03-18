import type { Meta, StoryObj } from '@storybook/react';
import { useEffect, useState } from 'react';
import { Dialog } from './dialog';
import { Button } from '../../inputs';

const meta: Meta<typeof Dialog> = {
  title: 'Components/Feedback/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    width: {
      control: { type: 'text' },
      defaultValue: {
        summary: '32rem'
      }
    },
    height: {
      control: { type: 'text' },
      defaultValue: {
        summary: '16rem'
      }
    }
  },
  args: {
    isOpen: false,
    width: '32rem',
    height: '16rem'
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

const Template: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
      setIsOpen(args.isOpen);
    }, [args.isOpen]);

    return (
      <>
        <Button
          text='Open Dialog'
          onClick={() => setIsOpen(true)}
        />
        <Dialog
          width='30rem'
          height='15rem'
          {...args}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
      </>
    );
  }
};

const Example: Story = {
  ...Template
};

export { Example };
