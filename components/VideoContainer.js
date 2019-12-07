import { motion } from 'framer-motion'
import { styled } from '@material-ui/core/styles'

import BackgroundContainer from '../components/BackgroundContainer'

import grey from '@material-ui/core/colors/grey'

const VideoContainer = styled(BackgroundContainer)({
	overflow: 'hidden',
	boxShadow: 'inset 0px -15px 10px -7px rgba(0,0,0,1)',
	backgroundColor: grey[900],
})

const Container = props => (
	<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5, }}
	>
		<VideoContainer name='home'>
			<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, delay: 0.5 }}
			>
				<video src='static/movie.mp4' autoPlay loop muted
					style={{
						objectFit: 'fill',
						marginLeft: '50vw',
						transform: 'translate(-50%)',
					}}
				/>
			</motion.div>
		</VideoContainer>
	</motion.div>
)

export default Container
