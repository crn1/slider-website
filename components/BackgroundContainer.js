import { Element } from 'react-scroll'
import { styled } from '@material-ui/core/styles'


const BackgroundContainer = (props) => {

	const ElementContainer = styled(Element)({
		height: '100vh',
		marginTop: `${props.topVh ? props.topVh : 0}vh`,
	})

	return (
		<ElementContainer {...props}>
			{ props.children }
		</ElementContainer>	
	)

}

export default BackgroundContainer
