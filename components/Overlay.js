import { useContext } from 'react'
import ScrollContext from './ScrollContext'

import { motion, useTransform } from 'framer-motion'
import { styled, useTheme } from '@material-ui/core/styles'

import Slide from './Slide'
import grey from '@material-ui/core/colors/grey'

const OverlayDiv = styled(Slide)(({theme}) => ({
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
}))

const Overlay = props => {

	const { scrollYProgress } = useContext(ScrollContext)

	const overlayScaleX = useTransform(scrollYProgress, [0, 0.25], [0, 1])
	const overlayOpacity = useTransform(scrollYProgress, [0, 0.07], [0, 1])

	return (
		<OverlayDiv
			style={{
				scaleX: overlayScaleX,
				opacity: overlayOpacity,
			}}
		/>
	)
}

export default Overlay
