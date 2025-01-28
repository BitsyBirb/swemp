// Just contains the name and the navbar
import '../styles/terminal.css'
import NameBar from "./NameBar"
import NavBar from "./NavBar"

export default function Header(){
    return(
        <div className="ShellHeader">
            <NameBar location={"Home"} />
            <NavBar />
        </div>

    )
}