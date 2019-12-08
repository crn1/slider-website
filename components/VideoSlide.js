import { useContext } from 'react'
import ScrollContext from './ScrollContext'

import { motion, useTransform } from 'framer-motion'
import { styled } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import Slide from './Slide'

import grey from '@material-ui/core/colors/grey'

const Overlay = styled(Slide)({
	background: `${grey[900]}D9`,
	height: '100vh',
})

const VideoSlide = props => {

	const { scrollYProgress } = useContext(ScrollContext)
	const overlayScaleX = useTransform(scrollYProgress, [0, 0.25], [0, 1])
	const overlayOpacity = useTransform(scrollYProgress, [0, 0.07], [0, 1])

	const VideoContainer = () => (
			<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, delay: 0.5 }}
			>
				<video src='static/movie.mp4' autoPlay loop muted
					style={{
						marginLeft: '50vw',
						transform: 'translate(-50%)',
						minHeight: '100%',
						minWidth: '100%',
					}}
				/>
			</motion.div>
	)

	const OverlayContainer = () => (
		<Grid container>
			<Grid item xs={12} md={6}>
			</Grid>
			<Grid item xs={12} md={6}>
				<Overlay
					style={{
						scaleX: overlayScaleX,
						opacity: overlayOpacity,
					}}
				>
					<Typography color='primary'>
						Alo
					</Typography>	
				</Overlay>
			</Grid>
		</Grid>
	)

	return (
		<>
			<Slide>
				<VideoContainer />
			</Slide>
			<Slide>
				<OverlayContainer />		
			</Slide>
		</>
	)

}

export default VideoSlide
