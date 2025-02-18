import type { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@allef-ignite-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: { size: 'md', children: 'Title Example' },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'Custom Title',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão, o heading sempre será um `h2`, mas pode ser alterado com a propriedade `as`.',
      },
    },
  },
}
