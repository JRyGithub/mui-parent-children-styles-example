import './App.css'
import { Stack } from '@mui/material'
import ButtonBox from './components/ButtonBox'
import StyledButton from './components/StyledButton'
import ParentChildButtonStyled from './components/ParentChildButtonStyled'
import ParentChildButtonTssStyled from './components/ParentChildButtonTssStyled'
import TssStylesButton from './components/TssStylesButton'

function App() {
  return (
    <Stack height={'100%'} width={'100%'} justifyContent={'center'} alignItems={'center'}>
      <Stack direction='row' flexWrap={'wrap'} gap={5}>
        <ButtonBox description='@mui/material styled'>
          <StyledButton />
        </ButtonBox>
        <ButtonBox description='Parent & Child @mui/material styled'>
          <ParentChildButtonStyled />
        </ButtonBox>
        <ButtonBox description='@tss-react/mui'>
          <TssStylesButton />
        </ButtonBox>
        <ButtonBox description='Parent & Child @tss-react/mui'>
          <ParentChildButtonTssStyled />
        </ButtonBox>
      </Stack>
    </Stack>
  )
}

export default App
