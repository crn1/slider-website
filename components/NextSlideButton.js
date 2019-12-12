import { useState } from 'react'
import IconButton from '@material-ui/core/IconButton'

import ArrowIconRaw from '@material-ui/icons/KeyboardArrowDown'

import { styled } from '@material-ui/core/styles'
import grey from '@material-ui/core/colors/grey'

const ArrowButton = styled(IconButton)(({theme}) => ({
	bottom: theme.spacing(1),	
	color: grey[50],
	position: 'fixed',
	marginLeft: '50vw',
	transform: 'translate(-50%)',
}))

const ArrowIcon = styled(ArrowIconRaw)({
	fontSize: 36,
})

const NextSlideButton = () => {

	const handleClick = () => {
		return
	}

	return (
		<ArrowButton onClick={handleClick} color='secondary' variant='outlined'>
			<ArrowIcon />
		</ArrowButton>
	)
}

export default NextSlideButton
