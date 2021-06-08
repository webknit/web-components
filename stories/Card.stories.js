import { Card } from './Card';

export default {
  title: 'Example/Card',
  argTypes: {
    theme: { 
        options: ['default', 'pink', 'green'],
        control: { type: 'select' } 
    },
  },
};

const Template = (args) => Card(args);

export const Primary = Template.bind({});
Primary.args = {
  title: 'This is the title in here',
  theme: 'pink',
  img: "https://images.unsplash.com/photo-1623009070764-45002990256e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
};
