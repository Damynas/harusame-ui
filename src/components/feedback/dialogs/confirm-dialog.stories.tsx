import type { Meta, StoryObj } from '@storybook/react';
import { useEffect, useState } from 'react';
import { ConfirmDialog } from './confirm-dialog';
import { ConfirmDialogConstants } from './confirm-dialog.constants';
import { Button } from '../../inputs';

const meta: Meta<typeof ConfirmDialog> = {
  title: 'Components/Feedback/Confirm Dialog',
  component: ConfirmDialog,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    title: {
      control: { type: 'text' },
      defaultValue: {
        summary: ConfirmDialogConstants.DEFAULT_TITLE_TEXT
      }
    },
    confirmButtonText: {
      control: { type: 'text' },
      defaultValue: {
        summary: ConfirmDialogConstants.DEFAULT_CONFIRM_BUTTON_TEXT
      }
    },
    cancelButtonText: {
      control: { type: 'text' },
      defaultValue: {
        summary: ConfirmDialogConstants.DEFAULT_CANCEL_BUTTON_TEXT
      }
    },
    confirmButtonLoading: {
      control: { type: 'boolean' },
      defaultValue: {
        summary: false
      }
    },
    cancelButtonLoading: {
      control: { type: 'boolean' },
      defaultValue: {
        summary: false
      }
    },
    width: {
      control: { type: 'text' },
      defaultValue: {
        summary: '37.5rem'
      }
    },
    height: {
      control: { type: 'text' },
      defaultValue: {
        summary: '17.5rem'
      }
    }
  },
  args: {
    isOpen: false,
    title: ConfirmDialogConstants.DEFAULT_TITLE_TEXT,
    message: `Are you sure you want to perform this action?
    Press 'Confirm' to continue or 'Cancel' to close the dialog.`,
    confirmButtonText: ConfirmDialogConstants.DEFAULT_CONFIRM_BUTTON_TEXT,
    cancelButtonText: ConfirmDialogConstants.DEFAULT_CANCEL_BUTTON_TEXT,
    confirmButtonLoading: false,
    cancelButtonLoading: false,
    width: '37.5rem',
    height: '17.5rem'
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
          text='Open Confirm Dialog'
          onClick={() => setIsOpen(true)}
        />
        <ConfirmDialog
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
