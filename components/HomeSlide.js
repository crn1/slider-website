import { useContext } from 'react'
import ScrollContext from './ScrollContext'

import { motion, useTransform } from 'framer-motion'
import { styled } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import Slide from './Slide'

import grey from '@material-ui/core/colors/grey'

const VideoSlide = props => {

	const { scrollYProgress } = useContext(ScrollContext)

	return (
		<Slide>
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
		</Slide>
	)
}

export default VideoSlide
