import { useState } from 'react'
import { Link } from 'react-scroll'

import { styled } from '@material-ui/core/styles'
import Drawer from './Drawer'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import Button from '@material-ui/core/Button'

import MenuIconRaw from '@material-ui/icons/Menu'

import grey from '@material-ui/core/colors/grey'

const Container = styled(Grid)(({theme}) => ({
	position: 'fixed',
	[theme.breakpoints.up('sm')]: {
		paddingTop: theme.spacing(2),
		paddingLeft: theme.spacing(4),
		paddingRight: theme.spacing(4),
	},
	[theme.breakpoints.down('sm')]: {
		paddingTop: theme.spacing(1),
		paddingLeft: theme.spacing(2),
		paddingRight: theme.spacing(2),
	},
	paddingDown: 0,
	zIndex: 1,
}))

const NavigationButton = styled(Button)(({theme}) => ({
	fontWeight: 'bold',
	fontSize: 16,
	cursor: 'pointer',
	paddingLeft: theme.spacing(6),
	paddingRight: theme.spacing(6),
}))

const MenuIcon = styled(MenuIconRaw)({
	color: grey[50],
})

const Logo = () => (
	<Grid container item spacing={2} alignItems='center' xs>
		<Grid item>
			<Typography style={{ fontWeight: 'bold' }} color='primary' variant='h4' component='h1'>
				LI
			</Typography>
		</Grid>
		<Grid item>
			<Typography style={{ fontWeight: 'bold' }} color='primary' variant='button' component='h1'>
				Lorem Ipsum
			</Typography>
		</Grid>
	</Grid>
)

const NavigationList = () => (
	<Hidden smDown>
		<Grid item>
			<Link to='home' smooth>
				<NavigationButton color='primary'>
					Home
				</NavigationButton>
			</Link>
		</Grid>
		<Grid item>
			<Link to='about' smooth>
				<NavigationButton color='primary'>
					About
				</NavigationButton>
			</Link>
		</Grid>
		<Grid item>
			<Link to='services' smooth duration={1500}>
				<NavigationButton color='primary'>
					Services
				</NavigationButton>
			</Link>
		</Grid>
		<Grid item>
			<Link to='contact' smooth>
				<NavigationButton color='primary'>
					Contact
				</NavigationButton>
			</Link>
		</Grid>
	</Hidden>
)

const Navigation = () => {
	
  const [drawerOpen, setDrawerOpen] = useState(false)

  const toggleDrawer = open => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }

    setDrawerOpen(open)
  };

	const MenuButton = () => (
		<Hidden mdUp>
			<Grid item>
				<IconButton color='inherit' onClick={toggleDrawer(!drawerOpen)}>
					<MenuIcon />
				</IconButton>
			</Grid>
		</Hidden>
	)

	return (
		<Container container alignItems='center' spacing={1}>
			<Logo />
			<NavigationList />
			<MenuButton />
			<Drawer
				drawerOpen={drawerOpen}
				setDrawerOpen={setDrawerOpen}
				toggleDrawer={toggleDrawer}
			/>
		</Container>
	)

}

export default Navigation;
