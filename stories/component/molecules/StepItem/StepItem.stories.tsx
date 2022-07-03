import { Meta } from '@storybook/react';
import StepItem, { StepItemProps } from '../../../../components/molecules/StepItem';

export default {
  title: 'Components/Molecules/StepItem',
  component: StepItem,
} as Meta;

function Template(args: StepItemProps) {
  return <StepItem {...args} />;
}

export const Default = Template.bind({});
Default.args = {
  title: '1. Start',
  icon: 'step1',
  desc1: 'pilih salah satu game',
  desc2: 'yang ingin kamu top up',
};
