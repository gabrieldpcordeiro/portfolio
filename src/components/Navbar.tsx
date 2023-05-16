import React from 'react';
import {Link} from 'react-scroll/modules'
import '../styles/Navbar.css';

interface MenuItem {
    label: string;
    url: string;
}

interface MenuProps {
    links: MenuItem[];
}

const Navbar: React.FC<MenuProps> = ({links}) => {
    return (
        <nav className='navbar'>
            <ul>
                {links.map((link) => (
                    <li className="menu-item" key={link.url}>
                        <Link to={link.url} smooth={true} duration={500}>
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
