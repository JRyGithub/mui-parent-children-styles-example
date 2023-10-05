import { Stack, Typography } from '@mui/material'

type ButtonBoxProps = {
  description: string
  children: React.ReactNode
}
const ButtonBox = ({ description, children }: ButtonBoxProps) => {
  return (
    <Stack gap={2}>
      <Typography>{description}</Typography>
      {children}
    </Stack>
  )
}

export default ButtonBox
