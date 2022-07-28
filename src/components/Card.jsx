import Paper from '@mui/material/Paper'

const Card = ({ text, palindrome }) => {
  return (
    <div>
      <Paper
        elevation={4}
        sx={{
          height: '1.6rem',
          width: '30vw',
          border: '1px solid grey',
          display: 'flex',
          alignItems: 'center',
          padding: 1
        }}
      >
        <p>{text}: {palindrome ? 'Es un palíndromo' : 'No es palíndromo'}</p>
      </Paper>
    </div>
  )
}

export default Card
