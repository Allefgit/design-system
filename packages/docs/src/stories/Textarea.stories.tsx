import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, Textarea, TextareaProps } from '@allef-ignite-ui/react'

export default {
  title: 'Form/Text Area',
  component: Textarea,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Observations</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextareaProps>

export const Primary: StoryObj<TextareaProps> = {
  args: {
    placeholder: 'Type your observations...',
  },
}

export const Disabled: StoryObj<TextareaProps> = {
  args: {
    disabled: true,
  },
}
