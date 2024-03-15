import { Meta, StoryObj } from "@storybook/react"
import { Button, ButtonProps } from "@ignite-ui/react"
import { ArrowRight } from "phosphor-react"

const meta: Meta<ButtonProps> = {
  title: "Form/Button",
  component: Button,
  args: {
    children: "Send"
  },
  argTypes: {
    onClick: {
      action: 'click',
    }
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

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    variant: 'primary',
    disabled: true,
    children: 'Send'
  }
}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Próximo Passo
        <ArrowRight weight="bold" />
      </>
    )
  }
}

export default meta