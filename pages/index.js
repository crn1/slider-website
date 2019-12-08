import Navigation from '../components/Navigation'
import BaseLayout from '../components/BaseLayout'
import BackgroundContainer from '../components/BackgroundContainer'
import VideoSlide from '../components/VideoSlide'

const Index = () => (
	<BaseLayout>
		<Navigation />
		<VideoSlide />
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
