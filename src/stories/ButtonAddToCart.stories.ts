import type { Meta } from '@storybook/react';

import { ButtonAddToCart } from '../components/ButtonAddToCart/ButtonAddToCart';

const meta: Meta<typeof ButtonAddToCart> = {
  title: 'Example/ButtonAddToCart',
  component: ButtonAddToCart,
  tags: ['autodocs'],
  argTypes: {
    count: { control: 'counter' },
  },
};

export default meta;

export const AddToCart = {
  args: {
    count: 0,
  },
};

export const Quantifier = {
  args: {
    count: 1,
  },
};
