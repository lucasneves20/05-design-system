import { Meta, StoryObj } from "@storybook/react"
import { Box, Text, TextArea, TextAreaProps } from "@ignite-ui/react"

const meta: Meta<TextAreaProps> = {
  title: "Form/Text Area",
  component: TextArea,
  decorators: [
    (Story) => {
      return (
        <Box as="label" css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
          <Text size='sm'>Observations</Text>
          {Story()}
        </Box>
      )
    }
  ]
}

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Add any observations ...'
  }
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true
  }
}

export default meta