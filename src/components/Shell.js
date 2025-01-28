// Just the shell to contain the name and the the navbar, as well as the text display/input

// Doesn't need to take anything as of yet. Just outputs stuff and the terminal itself takes stuff.
// I think this guy should hold a lot of the fun stuff that we want to display and play around with like variables. 

import '../styles/terminal.css'
import Header from './Header'
import MainTerminal from './MainTerminal'
import { useState } from 'react'
const Page = {
    Help,
    About,
    Projects,
    Apfel,
}

export default function Shell(){
    // Use a state to keep track of the amount of apples people have found. For now unused but to be used later.

    // Implement to track how many apples have been found in each page to count to 4.
    // 4 is considered bad luck in Chinese culture so that's good enough I think.

    const [apples, setApples] = useState(0); 
    const [page, setPage] = useState(Page.Help);
    // Use it across pages. You must click on the apples outside the window itself.
    // Hence, Bad Apple
    function handleClick(){
        // Inline function or something I think. Lambda?
        setApples(apples => apples+1); 
        // Just increment the amount of apples. If you have enough apples then a new button
        // will appear in the NavBar and the main text displayed by the terminal. Output it and show the option.
        // Scarlet Dream maybe?
    }
    return(
        <div className="ShellWindow">
            <Header />
            <MainTerminal />
        </div>

    )

}