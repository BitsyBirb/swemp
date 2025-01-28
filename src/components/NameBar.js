// Point of this file is just the name of the user and the shell. Based on my own Mint terminal. I think we use BASH?
/*
    Input: N/A
    Output: Just basic text stuff in a relative bar based on the terminal shell.
    Style found in ../styles/terminal.css
*/
import '../styles/terminal.css'
export default function NameBar({location}){

    return(
        <div className="ShellName">
            <text className="ShellHeaderText">
                bitsybirb@SwempSite:~{location}
            </text>
        </div>
    )
}