import { Meta, StoryObj } from "@storybook/react"
import { Button, ButtonProps } from "@ignite-ui/react"

const meta: Meta<ButtonProps> = {
  title: "Form/Button",
  component: Button,
  args: {
    children: "Send"
  }
}

export const Primary: StoryObj<ButtonProps> = {}

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
    children: 'Small'
  }
}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    children: 'Create new'
  }
}

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
    children: 'Cancel'
  }
}

export default meta