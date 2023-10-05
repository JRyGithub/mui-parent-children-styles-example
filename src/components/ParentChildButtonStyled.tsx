import { Stack, Typography, styled } from '@mui/material'
import StyledButton from './StyledButton'

const NeoBrutalismStack = styled(Stack)(() => ({
  backgroundColor: 'white',
  color: 'black',
  borderRadius: 4,
  border: 'black 2px solid',
  boxShadow: '3px 5px 0 0 black',
}))

const NeoBrutalismButtonChild = styled(StyledButton)(() => ({
  backgroundColor: 'rgb(186,255,201)',
  '&:hover': {
    backgroundColor: 'rgb(186,255,201,0.9)',
  },
}))

const ParentChildButtonStyled = () => {
  return (
    <NeoBrutalismStack padding={5} gap={2}>
      <Typography variant='button'>I am the parent component!</Typography>
      <NeoBrutalismButtonChild message='Controlled by my Parents' />
    </NeoBrutalismStack>
  )
}

export default ParentChildButtonStyled
