import { useContext } from 'react'
import ScrollContext from './ScrollContext'

import { motion, useTransform } from 'framer-motion'
import { styled } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Hidden from '@material-ui/core/Hidden'

import Slide from './Slide'

import grey from '@material-ui/core/colors/grey'

const Overlay = styled(Slide)(({theme}) => ({
	width: '200%',
	right: '-100%',
	[theme.breakpoints.up('sm')]:
	{
		borderBottom: `150vh solid ${grey[900]}D9`,
		borderLeft: '30vw solid transparent',
	},
	[theme.breakpoints.down('md')]:
	{
		height: '100vh',
		backgroundColor: `${grey[900]}D9`,
		borderBottom: 0,
		borderLeft: 0,
	},
	zIndex: -1,
}))

const MainHeader = styled(Typography)(({theme}) => ({
	background: 'transparent',
	[theme.breakpoints.up('sm')]:
	{
		marginTop: '20vh', 
		padding: theme.spacing(2),
	},
	[theme.breakpoints.down('sm')]:
	{
		marginTop: theme.spacing(8), 
		padding: theme.spacing(1),
	},
	color: grey[50],
	backgroundColor: `${theme.palette.secondary.main}D9`,
}))

const AboutSlide = props => {

	const { scrollYProgress } = useContext(ScrollContext)
	const overlayScaleX = useTransform(scrollYProgress, [0, 0.25], [0, 1])
	const overlayOpacity = useTransform(scrollYProgress, [0, 0.07], [0, 1])

	const mainHeadingOpacity = useTransform(scrollYProgress, [0.1, 0.25], [0, 1])
	const mainHeadingY = useTransform(scrollYProgress, [0.1, 0.25], [20, 0])

	const statueX = useTransform(scrollYProgress, [0.1, 0.25], [-489, 0])
	const statueOpacity = useTransform(scrollYProgress, [0.1, 0.25], [-489, 0])

	const MainHeading = () => (
		<motion.div
			style={{
				opacity: mainHeadingOpacity,
				y: mainHeadingY,
			}}
		>
			<MainHeader align='center' variant='h1' component='h1'>
				About us	
			</MainHeader>
		</motion.div>
	)

	const Statue = () => (
		<Hidden mdDown>
			<motion.img
				style={{
					x: statueX,
					opacity: mainHeadingOpacity,
					height: '100%',
					bottom: 0,
					zIndex: 2,
					position: 'fixed',
				}}
				src='static/statue.png'
			/>
		</Hidden>
	)

	return (
		<Slide>
			<Overlay
				style={{
					scaleX: overlayScaleX,
					opacity: overlayOpacity,
				}}
			/>
			<MainHeading />
			<Statue />
		</Slide>
	)
}

export default AboutSlide
