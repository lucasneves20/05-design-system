import { Meta, StoryObj } from "@storybook/react"
import { Heading, HeadingProps } from "@ignite-ui/react"

const meta: Meta<HeadingProps> = {
  title: "Typography/Heading",
  component: Heading,
  args: {
    children: "Custom title",
    size: 'md'
  },
  argTypes: {
    size: {
      control: { type: 'inline-radio' },
      options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
    },
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