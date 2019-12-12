import { styled, useTheme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Hidden from '@material-ui/core/Hidden'

import grey from '@material-ui/core/colors/grey'

const MainHeader = props => {

	const HeaderStyle = styled(Typography)(({theme}) => ({
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
		backgroundColor: `${props.backgroundColor ?
			props.backgroundColor :
			theme.palette.secondary.main}D9`,
	}))

	return (
		<HeaderStyle {...props}>
			{ props.children }
		</HeaderStyle>
	)
}

export default MainHeader
