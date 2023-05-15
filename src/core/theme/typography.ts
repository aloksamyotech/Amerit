import { Theme } from '@mui/material/styles'
import { FONTS } from './constants'

const Typography = (theme: Theme) => {
  return {
    h1: {
      fontWeight: 500,
      color: theme.palette.text.primary,
      fontFamily: FONTS.EXO2
    },
    h2: {
      fontWeight: 500,
      color: theme.palette.text.primary,
      fontFamily: FONTS.EXO2
    },
    h3: {
      fontWeight: 500,
      color: theme.palette.text.primary,
      fontFamily: FONTS.EXO2
    },
    h4: {
      fontWeight: 500,
      color: theme.palette.text.primary,
      fontFamily: FONTS.EXO2
    },
    h5: {
      fontWeight: 500,
      color: theme.palette.text.primary,
      fontFamily: FONTS.EXO2
    },
    h6: {
      color: theme.palette.text.primary,
      fontFamily: FONTS.EXO2
    }
  }
}

export default Typography
