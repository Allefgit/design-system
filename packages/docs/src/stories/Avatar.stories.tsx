import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@allef-ignite-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/allefgit.png',
    alt: 'Allefgit',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const Secondary: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
