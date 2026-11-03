import { Link } from "react-router-dom";

const Header = () => {

    return (
        <header className="header">
            <h1>
                <Link to='/'>SPACE SHOP</Link>
            </h1>
            <Link to='/'>상품 목록</Link>
        </header>
    )
}

export default Header;