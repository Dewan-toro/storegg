import { Meta } from '@storybook/react';
import Input, { InputProps } from '../../../../components/atoms/Input';

export default {
  title: 'Components/Atoms/Input',
  component: Input,
} as Meta;

function Template(args: InputProps) {
  return <Input {...args} />;
}

export const Default = Template.bind({});
Default.args = {
  label: 'Nama Lengkap',
};
