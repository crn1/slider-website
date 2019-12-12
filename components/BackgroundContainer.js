import { Element } from 'react-scroll'
import { styled } from '@material-ui/core/styles'

import grey from '@material-ui/core/colors/grey'

const BackgroundContainer = (props) => {

	const ElementContainer = styled(Element)({
		height: props.height ? props.height : '100vh',
		backgroundColor: props.bgColor ? props.bgColor : grey[900],
	})

	return (
		<ElementContainer {...props}>
			{ props.children }
		</ElementContainer>	
	)

}

export default BackgroundContainer
