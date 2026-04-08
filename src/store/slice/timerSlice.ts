import { createSlice } from "@reduxjs/toolkit";

interface timerSlice {
    timeLeft: number;
    isActive: boolean;
    isWarning: boolean;
    isStopped: boolean;
}

const initialState: timerSlice = {
    timeLeft: 120,
    isActive: false,
    isWarning: false,
    isStopped: false,
}

const timerSlice = createSlice({
    name: 'timer',
    initialState,
    reducers: {
        startTimer: (state) => {
            state.isActive = true;
            state.isStopped = false;
        },
        stopTimer: (state) => {
            state.isActive = false;
        },
        tickTimer: (state) => {
            if(state.timeLeft > 0 ) {
                state.timeLeft -= 1

                state.isWarning = state.timeLeft <= 30

                if (state.timeLeft === 0) {
                    state.isActive = false;
                    state.isStopped = true;
                    state.isWarning = false;
                }
            }
        }
    }
})

export const {
    startTimer,
    stopTimer,
    tickTimer,
} = timerSlice.actions;
export default timerSlice.reducer;
