

import { render} from "@testing-library/react";
import UserStatsComplete from './UserStatsComplete'


describe("UserStats renders correctly",()=>
{
    test("should match shapshot",()=>{
    const{asFragment}=render(<UserStatsComplete />);
    expect(asFragment()).toMatchSnapshot()

    })
})