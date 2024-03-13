import { Meta, StoryObj } from "@storybook/react"
import { Text, TextProps } from "@ignite-ui/react"

const meta: Meta<TextProps> = {
  title: "Typography/Text",
  component: Text,
  args: {
    children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor repudiandae sapiente beatae corrupti ipsam quaerat. Labore a iste autem voluptate modi quos, error, et iusto reprehenderit ea molestias soluta inventore?"
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