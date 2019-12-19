import { useContext } from 'react'
import ScrollContext from './ScrollContext'

import { styled, ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import { motion, useTransform } from 'framer-motion'

import Slide from './Slide'

import grey from '@material-ui/core/colors/grey'

const ContactSlide = props => {

	const { scrollYProgress } = useContext(ScrollContext)

	const mainHeadingOpacity = useTransform(scrollYProgress, [0.05, 0.12], [1, 0])
	const mainHeadingScale = useTransform(scrollYProgress, [0.1199, 0.12], [1, 0])

	return (
		<Slide>
			<motion.div
				style={{
					opacity: mainHeadingOpacity,
					scale: mainHeadingScale,
					marginTop: '40vh',
					marginRight: '-30px',
				}}
			>
				<Grid container item spacing={2}
						justify='center' alignItems='center' xs
						style={{
							borderBottom: `3px solid ${grey[50]}`,
							backgroundColor: `${grey[900]}D9`,
							marginLeft: '-16px',
						}}
				>
					<Grid item>
						<Typography style={{ fontWeight: 'bold' }} color='primary' variant='h2' component='h1'>
							LI
						</Typography>
					</Grid>
					<Grid item>
						<Typography style={{ fontWeight: 'bold', fontSize: 24, }} color='primary' variant='button' component='h1'>
							Lorem Ipsum
						</Typography>
					</Grid>
				</Grid>
			</motion.div>
		</Slide>
	)
}

export default ContactSlide

