import { useContext } from "react"
import { WorkoutsContext } from "../context/WorkoutsContext"

export const useWorkoutsContext = () => {
    const context = useContext(WorkoutsContext)

    console.log('useWorkoutContext', context.workouts)

    if (!context) {
        throw Error('useWorkoutsContext must be used inside an WorkoutsContextProvider')
    }
    return context
}