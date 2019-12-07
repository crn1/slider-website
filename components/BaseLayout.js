import Head from 'next/head'

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import createPalette from '@material-ui/core/styles/createPalette'
import createTypography from '@material-ui/core/styles/createTypography'
import CssBaseline from '@material-ui/core/CssBaseline'

import grey from '@material-ui/core/colors/grey'

const theme = createMuiTheme({
  typography: createTypography(createPalette({}), {
    fontFamily: '"Roboto"'
  }),
	palette: {
		primary: { main: grey[50], contastText: grey[900]}
	}
})

const Layout = props => (
	<html lang='en'>
		<Head>
			<title>Slider Website Example</title>

			<meta name='viewport' content='minimum-scale=1, width=device-width, initial-scale=1, shrink-to-fit=no' />
			<meta name='author' content='Dorde G.' />
			<meta charSet='utf-8' />

			<link href='https://fonts.googleapis.com/css?family=Roboto&display=swap' rel='stylesheet' />
		</Head>
		<body>
			<CssBaseline />
			<MuiThemeProvider theme={theme}>
				{ props.children }	
			</MuiThemeProvider>
		</body>
	</html>
)

export default Layout
