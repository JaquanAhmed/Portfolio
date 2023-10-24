
const navLinks : string[] = ["About", "Experience", "Projects", "Contacts", "dfjhhgd"];

const Navbar = () => (
    <nav>
        <div>
            <ul className = "list-none m-0 p-0 overflow-hidden bg-slate-800">
                {navLinks.map((link : String) =>
                    (<li className = "float-left">
                        <a 
                        className = "block text-white text-center py-4 px-16 decoration-0" 
                        href = "#">{link}
                        </a>
                    </li>)
                )}
            </ul>
        </div>
    </nav>
)

export default Navbar