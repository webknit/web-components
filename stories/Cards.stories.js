import { Cards } from './Cards';

export default {
  title: 'Example/Cards',
  argTypes: {
    bgColor: { 
        control: { type: 'color' } 
    },
  },
};

const Template = (args) => Cards(args);
export const Primary = Template.bind({});
Primary.args = {
  title: 'This is the title in here',
  bgColor: 'lightpink',
};
