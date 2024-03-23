import type { Meta, StoryObj } from '@storybook/react';
import { useEffect, useState } from 'react';
import { Snackbar } from './snackbar';
import { SnackbarConstants } from './snackbar.constants';
import { commonColors, feedbackColors } from '../../common/theme';
import { Button } from '../inputs';
import { BoxLayout } from '../layouts';

const meta: Meta<typeof Snackbar> = {
  title: 'Components/Feedback/Snackbar',
  component: Snackbar,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    message: {
      control: { type: 'text' }
    },
    variant: {
      control: { type: 'select' },
      options: Object.getOwnPropertyNames(SnackbarConstants.SNACKBAR_VARIANTS),
      defaultValue: {
        summary: SnackbarConstants.DEFAULT_SNACKBAR_VARIANT
      }
    },
    position: {
      control: { type: 'select' },
      options: Object.getOwnPropertyNames(SnackbarConstants.SNACKBAR_POSITIONS),
      defaultValue: {
        summary: SnackbarConstants.DEFAULT_SNACKBAR_POSITION
      }
    },
    margin: {
      control: { type: 'text' },
      defaultValue: {
        summary: '0.5rem'
      }
    },
    padding: {
      control: { type: 'text' },
      defaultValue: {
        summary: '0.5rem'
      }
    },
    height: {
      control: { type: 'text' },
      defaultValue: {
        summary: '3.125rem'
      }
    },
    width: {
      control: { type: 'text' },
      defaultValue: {
        summary: '18.75rem'
      }
    },
    messageColor: {
      control: { type: 'color' },
      defaultValue: {
        summary: commonColors.black
      }
    },
    backgroundColor: {
      control: { type: 'color' },
      defaultValue: {
        summary: [
          commonColors.white,
          feedbackColors.info500,
          feedbackColors.success500,
          feedbackColors.warning500,
          feedbackColors.error500
        ]
      }
    },
    borderRadius: {
      control: { type: 'text' },
      defaultValue: {
        summary: '0.25rem'
      }
    },
    closeButtonColor: {
      control: { type: 'color' },
      defaultValue: {
        summary: commonColors.black
      }
    }
  },
  args: {
    isOpen: false,
    message: SnackbarConstants.DISPLAY_NAME,
    variant: SnackbarConstants.DEFAULT_SNACKBAR_VARIANT,
    position: SnackbarConstants.DEFAULT_SNACKBAR_POSITION,
    margin: '0.5rem',
    padding: '0.5rem',
    height: '3.125rem',
    width: '18.75rem',
    borderRadius: '0.25rem',
    closeButtonHidden: false,
    onActionButtonClick: () => alert('Action button clicked.')
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
      <BoxLayout
        horizontalAlignment='center'
        verticalAlignment='center'
        width='50rem'
        height='25rem'
      >
        <>
          <Button
            text='Open Snackbar'
            onClick={() => setIsOpen(true)}
          />
          <Snackbar
            {...args}
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
          />
        </>
      </BoxLayout>
    );
  }
};

const Default: Story = {
  ...Template
};

const Info: Story = {
  ...Template,
  args: {
    message: 'Info Snackbar',
    variant: 'info'
  }
};

const Success: Story = {
  ...Template,
  args: {
    message: 'Success Snackbar',
    variant: 'success'
  }
};

const Warning: Story = {
  ...Template,
  args: {
    message: 'Warning Snackbar',
    variant: 'warning'
  }
};

const Error: Story = {
  ...Template,
  args: {
    message: 'Error Snackbar',
    variant: 'error'
  }
};

export { Default, Info, Success, Warning, Error };
