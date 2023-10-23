
const navLinks : string[] = ['About', "Experience", "Projects", "Contacts"];

const Navbar = () => (
    <nav>
        <div>
            <ul className = "list-none m-0 p-0 overflow-hidden bg-slate-800">
                {navLinks.map((link : string) =>
                    (<li className = "float-left">
                        <a 
                        className = "block text-white text-center p-14 16 decoration-0 hover:text-red" 
                        href = "#">{link}
                        </a>
                    </li>)
                )}
            </ul>
        </div>
    </nav>
)

export default Navbar