import { Meta, StoryObj } from "@storybook/react"
import { Button, ButtonProps } from "@ignite-ui/react"

const meta: Meta<ButtonProps> = {
  title: "Button",
  component: Button,

  args: {
    children: "Enviar"
  }
}

export const Primary: StoryObj<ButtonProps> = {
  args: {
    size: 'small'
  }
}

export const Big: StoryObj<ButtonProps> = {
  args: {
    size: 'big'
  }
}

export default meta