import githublogo from '../assets/githublogo.svg'
import linkedinlogo from '../assets/linkedinlogo.svg'
import maillogo from '../assets/maillogo.svg'

import "../css/Footer.css"

export default function Footer() {
    return (
        <>
        <section className='contact'>
            <p>feel free to contact me via,</p>
            <div className='socials-card'>
                <a href="https://github.com/yoshiappel" target="_blank">
                <img src={githublogo} className="logo" alt="Github logo" />
                </a>
                <a href="&#109;&#097;&#105;&#108;&#116;&#111;&#058;&#112;&#105;&#101;&#116;&#104;&#098;&#111;&#116;&#101;&#114;&#104;&#111;&#101;&#107;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;" target="_blank">
                <img src={maillogo} className="logo" alt="Mail logo" />
                </a>
                <a href="https://linkedin.com/in/piethendrikboterhoek" target="_blank">
                <img src={linkedinlogo} className="logo" alt="Linkedin logo" />
                </a>
            </div> 
        </section>
        <p className="footer">
            developed by <a className='ghlink' href='https://github.com/yoshiappel'>https://github.com/yoshiappel</a> ©{new Date().getFullYear()}
        </p>
        </>
    );
}