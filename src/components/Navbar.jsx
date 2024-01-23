import IconCart from "../assets/images/icon-cart.svg";
import Avatar from "../assets/images/image-avatar.png";

export const Navbar = () => {
  return (
    <div className="container">
      <div className="logo">
        <h1>sneakers</h1>
        <ul className="links">
          <li>
            <a href="/">Collections</a>
          </li>
          <li>
            <a href="/men">Men</a>
          </li>
          <li>
            <a href="/women">Women</a>
          </li>
          <li>
            <a href="/About">About</a>
          </li>
          <li>
            <a href="/Contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="icons">
        <img src={IconCart} alt="cart" className="cart" />
        <img src={Avatar} alt="avatar" className="avatar" />
      </div>
    </div>
  );
};
