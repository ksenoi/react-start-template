import type { Meta } from '@storybook/react';

import { Logo } from '../components/Logo/Logo';

const meta: Meta<typeof Logo> = {
  title: 'Example/Logo',
  component: Logo,
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;

export const LogoComponent = {
};