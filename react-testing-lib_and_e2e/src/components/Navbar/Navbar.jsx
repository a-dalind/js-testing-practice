import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <Link to="/" data-testid="main-link">main</Link>
            <Link to="/about" data-testid="about-link">about</Link>
            <Link to="/users" data-testid="users-link">users</Link>
            <Link to="/e2e-example" data-testid="e2e-example-link">e2e-example</Link>
        </div>
    );
};

export default Navbar;
