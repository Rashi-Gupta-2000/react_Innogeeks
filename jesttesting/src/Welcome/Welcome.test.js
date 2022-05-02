import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import Welcome from './Welcome';

describe("Welcome", () => {
    test("renders hello world", () => {
        render(<Welcome />);
        // const hello_world =screen.getByText("Good morning"); //This text has to be exact same with h2 tag in Welcome.js
        const hello_world =screen.getByText("hello",{exact:false}); 
        expect(hello_world).toBeInTheDocument();
    });
    
    test("renders good morning", () => {
        render(<Welcome />);
        const hello_world =screen.getByText("good",{exact:false}); 
        // will pass the test case because in the output only one good will be displayed at a time
        expect(hello_world).toBeInTheDocument();
    });

    test("renders if button is not clicked", () => {
        render(<Welcome />);
        const notclicked =screen.getByText("morning",{exact:false}); 
        expect(notclicked).toBeInTheDocument();
    });

    test("renders if button is clicked", () => {
        render(<Welcome />);
        const buttonElement =screen.getByRole('button'); 
        userEvent.click(buttonElement);

        const changedText = screen.getByText('Night',{exact: false})
        expect(changedText).toBeInTheDocument();
    });

    test("removes good morning when button is clicked ", () => {
        render(<Welcome />);
        const buttonElement =screen.getByRole('button'); 
        userEvent.click(buttonElement);

        const changedText = screen.queryByText('morning',{exact: false})
        expect(changedText).toBeNull();
    })
})


/**
 * 3 A's
 * 1. Arrange -> set up test env
 * 2. Act -> run logic, run action
 * 3. Assert -> 
 */