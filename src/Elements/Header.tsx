import '../css/Header.css'
import { Link, useLocation } from 'react-router-dom'

export function PageName() {
    const location = useLocation();

    const segments = location.pathname.split("/").filter(Boolean);

    const pageName = segments.length > 0 ? segments[segments.length - 1] : "home";

    return (
        <div>
            <a className='blink' style={{cursor: "default", textDecoration: "none"}}>&#x3E;</a>
        <span className='blink' style={{ marginLeft: "1em" }}>{pageName}</span>
        </div>
    );
}

export default function Header() {
    return (
        <>
        <section>
            <div className="Nav">
                <PageName></PageName>
                <Link to="/" className='navbtn' data-text="Home">Home</Link>
                <Link to="/About" className='navbtn' data-text="About">About</Link>
                <Link to="/" className='navbtn' data-text="MyWork">My Work</Link>
            </div>
        </section>
        </>
    );
}