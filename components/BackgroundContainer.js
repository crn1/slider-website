import { Element } from 'react-scroll'
import { styled } from '@material-ui/core/styles'

import grey from '@material-ui/core/colors/grey'

const BackgroundContainer = (props) => {

	const ElementContainer = styled(Element)({
		height: '100vh',
		marginTop: props.topVh ? `${props.topVh}vh` : '0vh',
		backgroundColor: props.bgColor ? props.bgColor : grey[900],
	})

	return (
		<ElementContainer {...props}>
			{ props.children }
		</ElementContainer>	
	)

}

export default BackgroundContainer
