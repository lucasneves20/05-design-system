import { Meta, StoryObj } from "@storybook/react"
import { Text, TextProps } from "@ignite-ui/react"

const meta: Meta<TextProps> = {
  title: "Typography/Text",
  component: Text,
  args: {
    size: 'md',
    children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor repudiandae sapiente beatae corrupti ipsam quaerat. Labore a iste autem voluptate modi quos, error, et iusto reprehenderit ea molestias soluta inventore?"
  },
  argTypes: {
    size: {
      control: { type: 'inline-radio' },
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'],
    },
  }
}

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: "Strong Text",
    as: "strong"
  }
}

export default meta