import { Stack, Typography } from '@mui/material'
import TssStylesButton from './TssStylesButton'
import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()({
  neoBrutalismStack: {
    backgroundColor: 'white',
    color: 'black',
    borderRadius: 4,
    border: 'black 2px solid',
    boxShadow: '3px 5px 0 0 black',
  },
  neoBrutalismButtonChild: {
    backgroundColor: 'rgb(255,179,186)',
    '&:hover': {
      backgroundColor: 'rgb(255,179,186,0.9)',
    },
  },
})

const ParentChildButtonTssStyled = () => {
  const { classes } = useStyles()

  return (
    <Stack padding={5} gap={2} className={classes.neoBrutalismStack}>
      <Typography variant='button'>I am the parent component!</Typography>
      <TssStylesButton
        message='Controlled by my parents'
        className={classes.neoBrutalismButtonChild}
      />
    </Stack>
  )
}

export default ParentChildButtonTssStyled
