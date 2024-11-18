import { Provider } from 'react-redux'
import store from './store/store'
import { Container, Typography } from '@mui/material'
import AddHabitForm from './components/add-habit-form'
import HabitList from './components/habit-list'

export default function App() {
  return (
    <Provider store = {store}>
      <Container maxWidth="md">
        <Typography component="h1" variant="h2" align='center'>
          Habbit Tracker
          <AddHabitForm />
          <HabitList/>
        </Typography>
      </Container>
    </Provider>
  )
}

