import { Button } from '@mui/material'
import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()({
  neoBrutalism: {
    backgroundColor: 'rgb(186,225,255)',
    color: 'black',
    borderRadius: 4,
    border: 'black 2px solid',
    boxShadow: '3px 5px 0 0 black',
    '&:hover': {
      backgroundColor: 'rgb(186,225,225,0.9)',
      boxShadow: '0px 0px 0 0 black',
      borderColor: 'black',
    },
    '&:focus, &:active': {
      outline: 'none',
    },
  },
})

type TssStylesButtonProps = {
  message?: string
  className?: string
}

const TssStylesButton = ({ message, className = '' }: TssStylesButtonProps) => {
  const { classes } = useStyles()

  return (
    <Button className={`${classes.neoBrutalism} ${className}`}>
      {message ?? 'Tss Styles Button'}
    </Button>
  )
}

export default TssStylesButton
