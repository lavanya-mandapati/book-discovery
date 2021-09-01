import { Props } from "./BooksToRead";
import BookToRead from './BooksToRead'
import { Story, Meta } from "@storybook/react";
export default{
    title:'MOLECULE/UserStats/bookstoread',
    component:BookToRead
}as Meta;

const Template:Story<Props>=(args)=> <BookToRead{...args}/>;


export const PrimaryA = Template.bind({});
PrimaryA.args={
    children:'12'
}
export const PrimaryB = Template.bind({});
PrimaryB.args={
    children:'24'
}