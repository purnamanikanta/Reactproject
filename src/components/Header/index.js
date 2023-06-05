import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <p className="website-logo">RA</p>
      <ul className="nav-menu">
        <li>
          <img
            className="social-network-img"
            src="https://res.cloudinary.com/de6i9aueb/image/upload/v1685964541/linkedin_imaksn.svg"
            alt="Linked In"
          />
        </li>
        <li>
          <img
            className="social-network-img"
            src="https://res.cloudinary.com/de6i9aueb/image/upload/v1685964761/GitHub-Mark_l807si.png"
            alt="Git Hub"
          />
        </li>
        <li>
          <img
            className="social-network-img"
            src="https://res.cloudinary.com/dmwrugc6z/image/upload/v1621681890/Background_4x_1_bzyjew.png"
            alt="Twitter"
          />
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
