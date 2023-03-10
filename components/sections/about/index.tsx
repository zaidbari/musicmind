import { Children } from 'react'
import { AboutHeaderSection } from './header'
import { AboutTeamSection } from './team'
import { AboutTestimonialSection } from './testimonials'
export const AboutSections = ({ children }: { children: any }) => {
	let subComponentList = Object.keys(AboutSections)

	let subComponents = subComponentList.map((key) =>
		Children.map(children, (child) => (child.type.name === key ? child : null))
	)

	return <>{subComponents.map((component) => component)}</>
}

const Header = () => <AboutHeaderSection />
AboutSections.Header = Header

const Team = () => <AboutTeamSection />
AboutSections.Team = Team

const Testimonials = () => <AboutTestimonialSection />
AboutSections.Testimonials = Testimonials

export default AboutSections
