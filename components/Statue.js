import { useContext, useEffect, useState } from 'react'
import ScrollContext from './ScrollContext'

import { useTheme } from '@material-ui/core/styles'
import Hidden from '@material-ui/core/Hidden'

import { motion, useTransform } from 'framer-motion'

const Statue = () => {

	const theme = useTheme()
	const { scrollYProgress } = useContext(ScrollContext)

	const statueX = useTransform(scrollYProgress, [0.13, 0.25], [-489, theme.spacing(4)])
	const statueInvertRaw = useTransform(scrollYProgress, [0.68, 0.75], [0, 1])
	const [statueInvert, setStatueInvert] = useState(statueInvertRaw.get()) 
	const statueOpacity = useTransform(scrollYProgress, [0.13, 0.25], [0, 1])

	statueInvertRaw.onChange(latest => {
		setStatueInvert(latest)
	})

	return (
		<Hidden mdDown>
			<motion.img
				style={{
					x: statueX,
					opacity: statueOpacity,
					height: '92vh',
					bottom: 0,
					position: 'fixed',
					filter: `invert(${statueInvert})`,
					WebkitFilter: `invert(${statueInvert})`,
				}}
				src='static/statue.png'
			/>
		</Hidden>
	)
}

export default Statue
