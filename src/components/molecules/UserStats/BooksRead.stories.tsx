import { Props } from "./BooksRead";
import BookRead from './BooksRead'
import { Story, Meta } from "@storybook/react";
export default{
    title:'MOLECULE/UserStats/booksread',
    component:BookRead
}as Meta;

const Template:Story<Props>=(args)=> <BookRead {...args}/>;


export const PrimaryA = Template.bind({});
PrimaryA.args={
    children:'25'
}
export const PrimaryB = Template.bind({});
PrimaryB.args={
    children:'50'
}