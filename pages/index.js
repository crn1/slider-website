import Navigation from '../components/Navigation'
import BaseLayout from '../components/BaseLayout'
import BackgroundContainer from '../components/BackgroundContainer'
import HomeSlide from '../components/HomeSlide'
import AboutSlide from '../components/AboutSlide'
import ServicesSlide from '../components/ServicesSlide'
import ContactSlide from '../components/ContactSlide'
import NextSlideButton from '../components/NextSlideButton'
import Statue from '../components/Statue'
import Overlay from '../components/Overlay'

const Index = () => (
	<BaseLayout>
		<Navigation />
		<HomeSlide />
		<Overlay />
		<AboutSlide />
		<ServicesSlide />
		<ContactSlide />
		<Statue />
		<NextSlideButton />
		<BackgroundContainer name='home'>
		</BackgroundContainer>
		<BackgroundContainer name='about'>
		</BackgroundContainer>
		<BackgroundContainer name='services'>
		</BackgroundContainer>
		<BackgroundContainer name='contact'>
		</BackgroundContainer>
	</BaseLayout>
);

export default Index;
