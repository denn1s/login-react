import Button from './Button'
import { fn } from '@storybook/test'


const meta = {
  component: Button
}

export default meta

export const Default = {
  args: {
    text: 'CLICK ME!',
    onClick: fn(),
  }
}

export const Max10Chars = {
  args: {
    text: 'THIS HAS MORE THAN 10 CHARACTERS'
  }
}

