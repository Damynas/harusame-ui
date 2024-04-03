import type { Meta, StoryObj } from '@storybook/react';
import { DataTable } from './data-table';
import { DataTableHeader } from './data-table-header';
import { DataTableBody } from './data-table-body';
import { DataTableRow } from './data-table-row';
import { DataTableCell } from './data-table-cell';

const meta: Meta<typeof DataTable> = {
  title: 'Components/Data Display/Data Table',
  component: DataTable,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded'
  },
  argTypes: {
    __TYPE: {
      table: { disable: true }
    },
    loading: {
      control: { type: 'boolean' },
      defaultValue: { summary: false }
    },
    autoFooter: {
      control: { type: 'boolean' },
      defaultValue: { summary: false }
    },
    hoverable: {
      control: { type: 'boolean' },
      defaultValue: { summary: false }
    },
    rowHeight: {
      control: { type: 'text' },
      defaultValue: { summary: '2.5rem' }
    },
    margin: {
      control: { type: 'text' },
      defaultValue: { summary: '0.5rem' }
    },
    borderRadius: {
      control: { type: 'text' },
      defaultValue: { summary: '0.25rem' }
    }
  },
  args: {
    loading: false,
    autoFooter: true,
    hoverable: true,
    rowHeight: '2.5rem',
    margin: '0.5rem',
    borderRadius: '0.25rem'
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

type User = {
  firstName: string;
  lastName: string;
  age: number;
};

const users: User[] = [
  {
    firstName: 'Testy',
    lastName: 'McTesty',
    age: 25
  },
  {
    firstName: 'Rupert',
    lastName: 'Brown',
    age: 25
  },
  {
    firstName: 'Jacob',
    lastName: 'Ironside',
    age: 25
  }
];

const Template: Story = {
  render: (args) => {
    const renderRow = (user: User) => {
      return (
        <DataTableRow>
          <DataTableCell
            alignment='left'
            variant='body'
          >
            {user.firstName}
          </DataTableCell>
          <DataTableCell
            alignment='left'
            variant='body'
          >
            {user.lastName}
          </DataTableCell>
          <DataTableCell
            alignment='right'
            variant='body'
          >
            {user.age}
          </DataTableCell>
        </DataTableRow>
      );
    };
    return (
      <DataTable {...args}>
        <DataTableHeader>
          <DataTableRow>
            <DataTableCell
              variant='header'
              alignment='left'
            >
              First Name
            </DataTableCell>
            <DataTableCell
              variant='header'
              alignment='left'
            >
              Last Name
            </DataTableCell>
            <DataTableCell
              variant='header'
              alignment='right'
            >
              Age
            </DataTableCell>
          </DataTableRow>
        </DataTableHeader>
        <DataTableBody>{users.map(renderRow)}</DataTableBody>
      </DataTable>
    );
  }
};

const Example: Story = {
  ...Template
};

export { Example };
