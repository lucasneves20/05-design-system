import { Meta, StoryObj } from "@storybook/react"
import { Box, BoxProps, Text } from "@ignite-ui/react"

const meta: Meta<BoxProps> = {
  title: "Surfaces/Box",
  component: Box,
  args: {
    children:
        <Text>Testando algo em tela</Text>
  }
}

export const Primary: StoryObj<BoxProps> = {}


export default meta
