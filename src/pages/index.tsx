import { Box, Grid, TextField, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import type { NextPage } from 'next'
import Image from 'next/image';

import brandImg from '../assets/brand.png';
import Button from '../components/Button';
import Input from '../components/Input';
import PasswordInput from '../components/PasswordInput';

const Home: NextPage = () => {
  const theme = useTheme();

  return (
    <Box sx={{
      display: 'flex',
      bgcolor: theme.COLORS.TITLE,
      height: "100vh",
    }}>
      <Grid container sx={{
        padding: '2%',
        bgcolor: theme.COLORS.PRIMARY_900,
      }}>
        <Grid item xs={6} sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: "100%",
          fontSize: 50,
          fontFamily: theme.FONTS.TITLE,
          color: theme.COLORS.TITLE,
        }}>
          <Image src={brandImg} />
        </Grid>
        <Grid item xs={6} sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          // justifyContent: 'center',
          width: "100%",

        }}>
          <Typography
            sx={{
              marginTop: 10,
              fontSize: 50,
              fontFamily: theme.FONTS.TITLE,
              color: theme.COLORS.TITLE,
            }}
          >
            GoPizza
          </Typography>
          <Typography
            sx={{
              marginTop: 5,
              fontSize: 30,
              fontFamily: theme.FONTS.TITLE,
              color: theme.COLORS.TITLE,
            }}
          >
            Login
          </Typography>
          <Input
            error=''
            label='E-mail'
          />

          <PasswordInput
            error=''
            label='Senha'
          />

          <Typography
            sx={{
              marginTop: 5,
              fontSize: 15,
              fontFamily: theme.FONTS.TITLE,
              color: theme.COLORS.TITLE,
            }}
          >
            Esqueci minha senha
          </Typography>
          <Button text='Entrar' />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Home
