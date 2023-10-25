import type { Meta } from '@storybook/react';

import { ProductShort } from '../components/ProductShort/ProductShort';

const meta: Meta<typeof ProductShort> = {
  title: 'Example/ProductShort',
  component: ProductShort,
  tags: ['autodocs'],
  argTypes: {
    product: { control: 'product' },
  },
};

export default meta;

export const ProductShortComponent = {
  args: {
    product: {
      title: "Sample product",
      category: 'Product Category',
      imageURL: 'example.png',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur facere, accusantium perferendis sint consectetur temporibus. Culpa praesentium magni dolorum libero nemo assumenda laboriosam. Libero hic sapiente quod itaque quo porro sit, maxime temporibus provident quos modi qui pariatur illum impedit repudiandae tempore commodi earum harum ea nisi et eum! Nemo.',
      price: 1000
    }
  },
};
