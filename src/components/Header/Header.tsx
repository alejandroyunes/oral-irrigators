import { useState } from "react"
import { useLocation, useNavigate, Outlet, ScrollRestoration, Link } from "react-router-dom"
import logo from "./images/logo.png"
import { HeaderContainer, Logo, NavContainer, NavItems, HamburgerMenu } from "./header.styled"
import ColorSwitcher from "../ThemeSwitcher/colorSwitcher"

interface LinkItemProps {
  headerProps: {
    links: {
      link: string;
      path: string;
    }[],
    arialLabel: string
  }
}

export default function Header({ headerProps }: LinkItemProps) {

  const { links, arialLabel } = headerProps

  let navigate = useNavigate()
  const location = useLocation()
  const { pathname } = location

  const [isActive, setIsActive] = useState(false)

  const handleClick = (path: string, isMobile?: boolean) => {
    if (isMobile) {
      setIsActive(false)
    }
    navigate(path)
  }
  return (
    <>
      <HeaderContainer>
        <Link to='/'>
          <Logo className="nav-logo">
            <img src={logo} alt="Dental Irrigators" />
            <h3>Dental Irrigator</h3>
          </Logo>
        </Link>
        <NavContainer>
          <ColorSwitcher />
          <NavItems>
            <ul>
              {links.map((link) => (
                <li
                  key={link.path}
                  onClick={() => handleClick(link.path)}
                  className={pathname === link.path ? 'active' : ''}
                >
                  {link.link}
                </li>
              ))}
            </ul>
            <ScrollRestoration />
          </NavItems>
          <HamburgerMenu>
            <div id="toggleMenu">
              <label htmlFor="menu-switcher" className="visually-hidden">{arialLabel}</label>
              <input
                type="checkbox"
                id="menu-switcher"
                checked={isActive}
                onChange={() => setIsActive(!isActive)}
              />
              <span></span>
              <span></span>
              <span></span>
              <ul id="menu">
                {links.map((link) => (
                  <li key={link.path} onClick={() => handleClick(link.path, true)}>
                    {link.link}
                  </li>
                ))}
              </ul>
            </div>
          </HamburgerMenu>
        </NavContainer>
      </HeaderContainer >
      <Outlet />
    </>
  )
}