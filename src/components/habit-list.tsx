import { Box, Button, Grid, Paper, Typography } from "@mui/material"
import { RootState } from "../store/store"
import { useDispatch, useSelector } from "react-redux"
import { removeHabit, toggleHabit } from "../store/habit-slice"

const HabitList :React.FC = () => {

    const {habits} = useSelector((state:RootState) => state.habits)
    const dispatch = useDispatch()

    const today = new Date().toISOString().split("T")[0]

  return (
   <>
    <Box
        sx={{
            display: "flex",
            flexDirection:"column",
            gap:2,
            mt:4
        }}
    >
        {habits.map((habit) => (
            <Paper
                key={habit.id}
                elevation={2}
                sx={{p:2}}
            >
                <Grid 
                    container 
                    alignItems="center" 
                >
                    <Grid
                        xs={12}
                        sm={6}
                    >
                        <Typography
                            variant="h6"
                        >
                            {habit.name}
                        </Typography> 
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{textTransform: 'capitalize'}}
                        >
                            {habit.frequency}
                        </Typography> 
                    </Grid>
                    <Grid 
                        xs={12} 
                        sm={6}
                    >
                        <Box
                            sx={{display : "flex" , justifyContent : "flex-end" , gap : 1}}
                        >
                            <Button
                                onClick={() => dispatch(toggleHabit({id: habit.id, date: today}))}
                                variant="outlined"
                                color={
                                    habit.completedDates.includes(today)
                                    ? "success"
                                    : "primary"
                                }
                            >
                                {habit.completedDates.includes(today)
                                    ? "Completed"
                                    : "Mark Completed"}
                            </Button>
                            <Button
                                onClick={() => dispatch(removeHabit({id : habit.id}))}
                                variant="outlined"
                                color="error"
                            >   
                                Delete Habbit
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
        ))}
    </Box>
   </>
  )
}

export default HabitList
