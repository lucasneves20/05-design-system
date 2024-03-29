import { Meta, StoryObj } from "@storybook/react"
import { Box, BoxProps, Text } from "@snowfall-ignite-ui/react"

const meta: Meta<BoxProps> = {
  title: "Surfaces/Box",
  component: Box,
  args: {
    children:
        <Text>Testando algo em tela</Text>
  },
  argTypes: {
    children: {
      control: {
        type: null
      }
    }
  }
}

export const Primary: StoryObj<BoxProps> = {}


export default meta
