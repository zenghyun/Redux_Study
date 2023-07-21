import { createSlice } from '@reduxjs/toolkit'

export type UserStateType = {
    id: string;
    name: string;
}

export type UserListType = {
    users: Array<UserStateType>
}
const initialState = [
  { id: '0', name: 'Tianna Jenkins' },
  { id: '1', name: 'Kevin Grant' },
  { id: '2', name: 'Madison Price' }
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {}
})

export default usersSlice.reducer