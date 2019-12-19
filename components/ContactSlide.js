import { useContext } from 'react'
import ScrollContext from './ScrollContext'

import { styled, ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import { motion, useTransform } from 'framer-motion'

import Slide from './Slide'
import MainHeader from './MainHeader'

import lightGreen from '@material-ui/core/colors/lightGreen'
import grey from '@material-ui/core/colors/grey'

const ContactGrid = styled(Grid)(({theme}) => ({
	paddingTop: theme.spacing(4),
}))

const ContactTheme = createMuiTheme({
  palette: {
		primary: { main: grey[50], },
		text: { primary: grey[50], },
  },
});

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
					Lorem ipsum dolor sit amet consectetur adipiscing elit nibh nascetur.
					<ThemeProvider theme={ContactTheme}>
						<ContactGrid container spacing={2}>
							<Grid item xs={12} sm={6}>
								<TextField
									fullWidth
									variant='filled'
									label='Full Name'
									color='primary'
									InputLabelProps={{ style: { color: grey[50], }, }}
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									fullWidth
									variant='filled'
									label='Your E-mail'
									color='primary'
									InputLabelProps={{ style: { color: grey[50], }, }}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									fullWidth
									variant='filled'
									label='Your message'
									color='primary'
									InputLabelProps={{ style: { color: grey[50], }, }}
									multiline
									rows={7}
								/>
							</Grid>
							<Grid item xs={12}>
								<Button variant='outlined' style={{ backgroundColor: '' }} color='primary'>
									Send message
								</Button>	
							</Grid>
						</ContactGrid>	
					</ThemeProvider>
				</MainHeader>
			</motion.div>
		</Slide>
	)
}

export default ContactSlide
