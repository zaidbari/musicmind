import { Children } from 'react'
import { FooterComponent } from './footer'
import { NavbarComponent } from './navbar'

export const Layout = ({ children }: { children: any }) => {
	let subComponentList = Object.keys(Layout)

	let subComponents = subComponentList.map((key) =>
		Children.map(children, (child) => (child.type.name === key ? child : null))
	)

	return <>{subComponents.map((component) => component)}</>
}

const Navbar = () => <NavbarComponent />
Layout.Navbar = Navbar

const Footer = () => <FooterComponent />
Layout.Footer = Footer

export default Layout
