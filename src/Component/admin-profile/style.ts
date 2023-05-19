export const style = {
  width: '100%',
  '& .MuiOutlinedInput-root': {
    '&:active fieldset': {
      borderColor: 'secondary.main'
    }
  }
};
export const Input = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  opacity: 0,
  cursor: 'pointer',
  zIndex: -1

}
export const Box = {
  padding:'34px 10px',
  display: 'flex',
  overflow: 'hidden'

}
