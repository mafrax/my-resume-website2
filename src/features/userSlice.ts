import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  name: string;
  achievements: string[];
}

const initialState: UserState = {
  name: '',
  achievements: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setAchievements: (state, action: PayloadAction<string[]>) => {
      state.achievements = action.payload;
    },
  },
});

export const { setName, setAchievements } = userSlice.actions;

export default userSlice.reducer;
