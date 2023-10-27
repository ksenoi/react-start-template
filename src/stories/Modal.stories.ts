import type { Meta } from '@storybook/react';

import { Modal } from '../components/Modal/Modal';

const meta: Meta<typeof Modal> = {
  title: 'Example/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;

export const VisibleModal = {
  args: {
    visible: true,
  },
};

export const NotVisibleModal = {
  args: {
    visible: false,
  },
};
