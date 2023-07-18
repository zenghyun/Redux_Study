import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import { CounterStatesType } from "../features/counter/counterSlice";

export type RootStateType = {
  counter: CounterStatesType;
};

const store = configureStore({
  reducer: { 
    counter : counterReducer
   },
});

export default store;
 