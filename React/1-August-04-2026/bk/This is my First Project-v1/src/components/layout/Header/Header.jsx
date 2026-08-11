import reactLogo from '../../../assets/images/react.svg'
import viteLogo from '../../../assets/images/vite.svg'
import heroImg from '../../../assets/images/hero.png'

const Header = () => {
    return (
        <>
            <header className="header">
                <div className="brand-image">
                    <a href="javascript:void(0);">
                    <img src={reactLogo} className="framework" alt="React logo" />
                    </a>
                </div>
                <nav>
                    <ul>
                    <li>
                        <a href="javascript:void(0);">Home</a>
                    </li>
                    <li>
                        <a href="javascript:void(0);">About</a>
                    </li>
                    <li>
                        <a href="javascript:void(0);">Contact Us</a>
                    </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header