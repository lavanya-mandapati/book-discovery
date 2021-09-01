
import { Props } from "./BooksReading";
import BookReading from './BooksReading'
import { Story, Meta } from "@storybook/react";
export default{
    title:'MOLECULE/UserStats/BookReading',
    component:BookReading
}as Meta;

const Template:Story<Props>=(args)=> <BookReading {...args}/>;


export const PrimaryA = Template.bind({});
PrimaryA.args={
    children:'6'
}
export const PrimaryB = Template.bind({});
PrimaryB.args={
    children:'10'
}