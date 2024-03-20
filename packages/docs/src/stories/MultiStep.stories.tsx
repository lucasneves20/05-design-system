import { Meta, StoryObj } from "@storybook/react"
import { Box, MultiStep, MultiStepProps } from "@snowfall-ignite-ui/react"

const meta: Meta<MultiStepProps> = {
  title: "Form/Multi Step",
  component: MultiStep,
  decorators: [
    (Story) => {
      return (
        <Box as="label" css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
          {Story()}
        </Box>
      )
    }
  ]
}

export const Primary: StoryObj<MultiStepProps> = {
  args: {
    size: 4,
    currentStep: 2
  },
}

export const Full: StoryObj<MultiStepProps> = {
  args: {
    size: 4,
    currentStep: 4
  },
}

export default meta