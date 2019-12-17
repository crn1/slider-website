import { styled, useTheme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Hidden from '@material-ui/core/Hidden'

import grey from '@material-ui/core/colors/grey'

const PaddingTypography = styled(Typography)(({theme}) => ({
	[theme.breakpoints.down('sm')]:
	{
		padding: theme.spacing(2),
	},
}))

const MainHeader = props => {

	const HeaderStyle = styled(Typography)(({theme}) => ({
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
		backgroundColor: `${props.bgColor ?
			props.bgColor :
			theme.palette.secondary.main}D9`,
	}))

	return (
		<>
			<HeaderStyle align='center' variant='h1' component='h1'>
				{ props.title }
			</HeaderStyle>
			<Grid container justify='center'>
				<Grid item xs={12} md={8} lg={5} xl={4}>
					<PaddingTypography align='center' variant='h6' color='primary'>
						{ props.children }
					</PaddingTypography>
				</Grid>
			</Grid>
		</>
	)
}

export default MainHeader
