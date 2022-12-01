import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = 'http://localhost:3000';
const GET_DATA = 'GET_DATA';

export const fetchData = createAsyncThunk(GET_DATA, async () => {
  const result = await fetch(url);
  const resultJson = await result.json();
  return resultJson;
});

const dataSlice = createSlice({
  name: 'hello-react-front-end',
  initialState: [],
  extraReducers: {
    [fetchData.fulfilled]: (state, action) => action.payload,
  },
});

export default dataSlice.reducer;
