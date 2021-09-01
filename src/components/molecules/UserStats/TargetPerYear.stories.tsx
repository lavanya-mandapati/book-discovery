import { Props } from "./TargetPerYear";
import TargetPerYear from './TargetPerYear'
import { Story, Meta } from "@storybook/react";
export default{
    title:'MOLECULE/UserStats/TargetPerYear',
    component:TargetPerYear
}as Meta;

const Template:Story<Props>=(args)=> <TargetPerYear{...args}/>;


export const PrimaryA = Template.bind({});
PrimaryA.args={
    children:'12'
}
export const PrimaryB = Template.bind({});
PrimaryB.args={
    children:'24'
}