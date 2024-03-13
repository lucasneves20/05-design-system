import { Meta, StoryObj } from "@storybook/react"
import { Heading, HeadingProps } from "@ignite-ui/react"

const meta: Meta<HeadingProps> = {
  title: "Typography/Heading",
  component: Heading,
  args: {
    children: "Custom title"
  }
}

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: "H1 Heading",
    as: "h1"
  },
  parameters: {
    docs: {
      description: {
        story: "por padrão o heading sempre será `h2`, mas podemos alterar isso com a propriedade `as`."
      }
    }
  }
}

export default meta