import Navigation from '../components/Navigation'
import BaseLayout from '../components/BaseLayout'
import BackgroundContainer from '../components/BackgroundContainer'
import VideoContainer from '../components/VideoContainer'

const Index = () => (
	<BaseLayout>
		<Navigation />
		<VideoContainer />
		<BackgroundContainer style={{backgroundColor: 'cyan'}} name='contact'>
		</BackgroundContainer>
		<BackgroundContainer style={{backgroundColor: 'green'}} name='about'>
		</BackgroundContainer>
		<BackgroundContainer style={{backgroundColor: 'orange'}} name='services'>
		</BackgroundContainer>
	</BaseLayout>
);

export default Index;
