import Navigation from '../components/Navigation'
import BaseLayout from '../components/BaseLayout'
import BackgroundContainer from '../components/BackgroundContainer'
import HomeSlide from '../components/HomeSlide'
import AboutSlide from '../components/AboutSlide'

const Index = () => (
	<BaseLayout>
		<Navigation />
		<HomeSlide />
		<AboutSlide />
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
