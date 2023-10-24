
const navLinks : string[] = ["ABOUT", "EXPERIENCE", "PROJECTS", "CONTACTS"];

const Navbar = () => (
    <nav>
        <div className = "flex justify-center">
            <ul className = "list-none m-0 p-0 overflow-hidden bg-transparent">
                {navLinks.map((link : string) =>
                    (<li className = "inline-flex justify-center">
                        <a 
                        className = "block text-gray-200 text-xl text-center font-mono py-4 px-10 decoration-0 hover:text-green-200" 
                        href = "#">{link}
                        </a>
                    </li>)
                )}
            </ul>
        </div>
    </nav>
)

export default Navbar