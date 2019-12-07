import { styled } from '@material-ui/core/styles'
import { motion } from 'framer-motion'

const StyledMotionDiv = styled(motion.div)({
	position: 'fixed',
	width: '100vw',
})

const Slide = props => (
	<StyledMotionDiv {...props}>
		{ props.children }
	</StyledMotionDiv>
)

export default Slide
