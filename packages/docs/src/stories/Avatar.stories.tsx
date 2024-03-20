import { Meta, StoryObj } from "@storybook/react"
import { Avatar, AvatarProps } from "@snowfall-ignite-ui/react"

const meta: Meta<AvatarProps> = {
  title: "Data Display/Avatar",
  component: Avatar,
  args: {
    src: "https://github.com/lucasneves20.png",
    alt: "Lucas Neves"
  },
  argTypes: {
    src: {
      control: {
        type: 'text'
      }
    }
  }
}

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined
  }
}

export default meta