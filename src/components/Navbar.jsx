import { FilledInput } from '@mui/material'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { sendText } from '../redux/actions'
import { useDispatch } from 'react-redux'

const Navbar = () => {
  const dispatch = useDispatch()

  const [text, setText] = useLocalStorage('text', '')

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(sendText(text))
    setText('')
  }

  return (
    <div style={{ backgroundColor: 'red' }}>
      <Grid
        container
        direction='row'
        justifyContent='center'
        alignItems='center'
        component='form'
        onSubmit={handleSubmit}
      >
        <Grid item md={5} padding={2}>
          <FilledInput
            fullWidth
            placeholder='Insert Text'
            disableUnderline
            value={text}
            onChange={handleChange}
            style={{
              backgroundColor: 'white',
              borderRadius: '0.5rem',
              height: '3rem'
            }}
          />
        </Grid>
        <Grid item md={1} sd={2}>
          <Button
            variant='contained'
            type='submit'
            style={{
              paddingLeft: '1.5rem',
              paddingRight: '1.5rem',
              backgroundColor: 'blue'
            }}
          >Send
          </Button>
        </Grid>
      </Grid>
    </div>
  )
}

export default Navbar
