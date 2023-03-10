import { Children } from 'react'
import { HomeAboutSection } from './about'
import { HomeHeaderSection } from './header'
import { HomeHistorySection } from './history'
import { HomePlaylistSection } from './playlists'
import { HomeIdeaSection } from './idea'
import { HomeWorkSection } from './work'

export const HomeSections = ({ children }: { children: any }) => {
	let subComponentList = Object.keys(HomeSections)

	let subComponents = subComponentList.map((key) =>
		Children.map(children, (child) => (child.type.name === key ? child : null))
	)

	return <>{subComponents.map((component) => component)}</>
}

const About = () => <HomeAboutSection />
HomeSections.About = About

const Idea = () => <HomeIdeaSection />
HomeSections.Idea = Idea

const Header = () => <HomeHeaderSection />
HomeSections.Header = Header

const History = () => <HomeHistorySection />
HomeSections.History = History

const Playlist = () => <HomePlaylistSection />
HomeSections.Playlist = Playlist

const Work = () => <HomeWorkSection />
HomeSections.Work = Work

export default HomeSections
