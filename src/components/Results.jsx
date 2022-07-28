import { useSelector } from 'react-redux'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Card from './Card'

const Results = () => {
  const texts = useSelector(store => store)
  return (
    <div>
      <Paper
        elevation={2}
        sx={{
          height: '80ch',
          width: '70lw',
          marginTop: 5,
          borderRadius: 0,
          overflow: 'scroll',
          overflowX: 'hidden'
        }}
      >
        <Grid container>
          <Grid
            item
            md={2}
            marginLeft={4}
            marginTop={2}
            sx={{
              position: 'fixed',
              width: '100vw'
            }}
          >
            <h1>Results:</h1>
          </Grid>
          <Grid
            item
            md={2}
            marginLeft={4}
            marginTop={12}
          >
            <Grid
              container
              direction='row'
              justifyContent='center'
              alignItems='center'
              height='100%'
              width='60vw'
            >
              {
                texts.map((e, i) => {
                  return (
                    <Grid item margin={1} key={i}>
                      <Card text={e.text} palindrome={e.palindrome} />
                    </Grid>
                  )
                })
              }

            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default Results
