import { Button, styled } from '@mui/material'

const NeoBrutalismStyledButton = styled(Button)(() => ({
  backgroundColor: 'rgb(255,255,186)',
  color: 'black',
  borderRadius: 4,
  border: 'black 2px solid',
  boxShadow: '3px 5px 0 0 black',
  '&:hover': {
    backgroundColor: 'rgb(255,255,186,0.9)',
    boxShadow: '0px 0px 0 0 black',
    borderColor: 'black',
  },
  '&:focus, &:active': {
    outline: 'none',
  },
}))

type StyledButtonProps = {
  message?: string
}

const StyledButton = ({ message, ...rest }: StyledButtonProps) => {
  return <NeoBrutalismStyledButton {...rest}>{message ?? 'Styled Button'}</NeoBrutalismStyledButton>
}

export default StyledButton
