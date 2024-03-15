import { Meta, StoryObj } from "@storybook/react"
import { Box, Text, Checkbox, CheckboxProps } from "@ignite-ui/react"

const meta: Meta<CheckboxProps> = {
  title: "Form/Checkbox",
  component: Checkbox,
  decorators: [
    (Story) => {
      return (
        <Box as="label" css={{ display: 'flex', gap: '$2' }}>
          {Story()}
          <Text size='sm'>Accept therms of use</Text>
        </Box>
      )
    }
  ]
}

export const Primary: StoryObj<CheckboxProps> = {}

export const Disabled: StoryObj<CheckboxProps> = {
  args: {
    disabled: true
  }
}

export default meta