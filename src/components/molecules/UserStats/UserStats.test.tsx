import React from "react";
import { render} from "@testing-library/react";
import BooksRead from './BooksRead'
import BookReading from './BooksReading'
import TargetPerYear from './TargetPerYear'
import BooksToRead from './BooksToRead'
describe("Topics renders correctly",()=>
{
    test("should match shapshot",()=>{
    const{asFragment}=render(<BooksRead>Ten</BooksRead> );
    expect(asFragment()).toMatchSnapshot()

    });
    test("should match shapshot",()=>{
        const{asFragment}=render(<BookReading>Ten</BookReading> );
        expect(asFragment()).toMatchSnapshot()
    
        });
    test("should match shapshot",()=>{
        const{asFragment}=render(<TargetPerYear>Ten</TargetPerYear> );
        expect(asFragment()).toMatchSnapshot()
        
        });
    test("should match shapshot",()=>{
        const{asFragment}=render(<BooksToRead>Ten</BooksToRead> );
         expect(asFragment()).toMatchSnapshot()
            
        });
})