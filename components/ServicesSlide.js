import { useContext } from 'react'
import ScrollContext from './ScrollContext'

import { motion, useTransform } from 'framer-motion'

import Slide from './Slide'
import MainHeader from './MainHeader'

import purple from '@material-ui/core/colors/purple'

const AboutSlide = props => {

	const { scrollYProgress } = useContext(ScrollContext)

	const mainHeadingOpacity = useTransform(scrollYProgress, [0.42, 0.5, 0.67, 0.75], [0, 1, 1, 0])
	const mainHeadingY = useTransform(scrollYProgress, [0.42, 0.5], [150, 0])
	const mainHeadingScale = useTransform(scrollYProgress, [0.4199, 0.42, 0.7499, 0.75], [0, 1, 1, 0])

	return (
		<Slide>
			<motion.div
				style={{
					opacity: mainHeadingOpacity,
					y: mainHeadingY,
					scale: mainHeadingScale,
				}}
			>
				<MainHeader bgColor={purple[500]} title='Services'>
					Lorem ipsum dolor sit amet consectetur adipiscing elit nibh nascetur, vestibulum dui in montes etiam iaculis et orci. Malesuada pellentesque taciti fusce diam sociosqu facilisis tempor tellus eleifend velit cursus, purus inceptos venenatis molestie habitasse vestibulum mi dui conubia at himenaeos, augue ridiculus nam massa quisque cum enim blandit mauris vivamus. Hendrerit arcu proin penatibus aenean justo lacus auctor, eu mattis suspendisse platea viverra tellus ridiculus, vestibulum vivamus elementum varius facilisi dictum.
				</MainHeader>
			</motion.div>
		</Slide>
	)
}

export default AboutSlide
