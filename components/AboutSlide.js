import { useContext } from 'react'
import ScrollContext from './ScrollContext'

import { motion, useTransform } from 'framer-motion'
import { styled, useTheme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Hidden from '@material-ui/core/Hidden'

import Slide from './Slide'
import MainHeader from './MainHeader'

import grey from '@material-ui/core/colors/grey'

const Overlay = styled(Slide)(({theme}) => ({
	width: '210%',
	right: '-105%',
	[theme.breakpoints.up('sm')]:
	{
		borderBottom: `150vh solid ${grey[900]}D9`,
		borderLeft: '35vw solid transparent',
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

const PaddingTypography = styled(Typography)(({theme}) => ({
	[theme.breakpoints.down('sm')]:
	{
		padding: theme.spacing(2),
	},
}))

const AboutSlide = props => {

	const theme = useTheme()

	const { scrollYProgress } = useContext(ScrollContext)
	const overlayScaleX = useTransform(scrollYProgress, [0, 0.25], [0, 1])
	const overlayOpacity = useTransform(scrollYProgress, [0, 0.07], [0, 1])

	const mainHeadingOpacity = useTransform(scrollYProgress, [0.15, 0.25, 0.35, 0.45], [0, 1, 1, 0])
	const mainHeadingY = useTransform(scrollYProgress, [0.15, 0.25], [150, 0])
	const mainHeadingScale = useTransform(scrollYProgress, [0.4999, 0.5], [1, 0])

	const statueX = useTransform(scrollYProgress, [0.15, 0.25], [-489, theme.spacing(4)])
	//const statueInvert = useTransform(scrollYProgress, [0.4, 0.5], ['invert(0)', 'invert(1)'])
	const statueOpacity = useTransform(scrollYProgress, [0.15, 0.25], [0, 1])

	const MainHeading = () => (
		<motion.div
			style={{
				opacity: mainHeadingOpacity,
				y: mainHeadingY,
				scale: mainHeadingScale,
			}}
		>
			<MainHeader align='center' variant='h1' component='h1'>
				About us	
			</MainHeader>
			<Grid container justify='center'>
				<Grid item xs={12} md={8} lg={5} xl={4}>
					<PaddingTypography align='center' variant='h6' color='primary'>
						Lorem ipsum dolor sit amet consectetur adipiscing elit nibh nascetur, vestibulum dui in montes etiam iaculis et orci. Malesuada pellentesque taciti fusce diam sociosqu facilisis tempor tellus eleifend velit cursus, purus inceptos venenatis molestie habitasse vestibulum mi dui conubia at himenaeos, augue ridiculus nam massa quisque cum enim blandit mauris vivamus. Hendrerit arcu proin penatibus aenean justo lacus auctor, eu mattis suspendisse platea viverra tellus ridiculus, vestibulum vivamus elementum varius facilisi dictum.
					</PaddingTypography>
				</Grid>
			</Grid>
		</motion.div>
	)

	const Statue = () => (
		<Hidden mdDown>
			<motion.img
				style={{
					x: statueX,
					opacity: statueOpacity,
					height: '92vh',
					bottom: 0,
					position: 'fixed',
					//filter: statueInvert,
					//WebkitFilter: statueInvert,
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
