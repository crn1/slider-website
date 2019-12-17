import { useContext } from 'react'
import ScrollContext from './ScrollContext'

import { motion, useTransform } from 'framer-motion'

import Slide from './Slide'
import MainHeader from './MainHeader'

import lightGreen from '@material-ui/core/colors/lightGreen'

const ContactSlide = props => {

	const { scrollYProgress } = useContext(ScrollContext)

	const mainHeadingOpacity = useTransform(scrollYProgress, [0.75, 0.83], [0, 1])
	const mainHeadingY = useTransform(scrollYProgress, [0.75, 0.83], [150, 0])
	const mainHeadingScale = useTransform(scrollYProgress, [0.7499, 0.75], [0, 1])

	return (
		<Slide>
			<motion.div
				style={{
					opacity: mainHeadingOpacity,
					y: mainHeadingY,
					scale: mainHeadingScale,
				}}
			>
				<MainHeader bgColor={lightGreen[500]} title='Contact'>
					Contact slide
				</MainHeader>
			</motion.div>
		</Slide>
	)
}

export default ContactSlide
