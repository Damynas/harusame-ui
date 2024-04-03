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

const Template: Story = {
  render: (args) => (
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
      <DataTableBody>
        {/* <DataTableRow>
          <DataTableCell
            variant='body'
            alignment='left'
          >
            Testy
          </DataTableCell>
          <DataTableCell
            variant='body'
            alignment='left'
          >
            McTesty
          </DataTableCell>
          <DataTableCell
            variant='body'
            alignment='right'
          >
            25
          </DataTableCell>
        </DataTableRow>
        <DataTableRow>
          <DataTableCell
            variant='body'
            alignment='left'
          >
            Rupert
          </DataTableCell>
          <DataTableCell
            variant='body'
            alignment='left'
          >
            Brown
          </DataTableCell>
          <DataTableCell
            variant='body'
            alignment='right'
          >
            30
          </DataTableCell>
        </DataTableRow>
        <DataTableRow>
          <DataTableCell
            variant='body'
            alignment='left'
          >
            Jacob
          </DataTableCell>
          <DataTableCell
            variant='body'
            alignment='left'
          >
            Ironside
          </DataTableCell>
          <DataTableCell
            variant='body'
            alignment='right'
          >
            20
          </DataTableCell>
        </DataTableRow> */}
      </DataTableBody>
    </DataTable>
  )
};

const Example: Story = {
  ...Template
};

export { Example };
