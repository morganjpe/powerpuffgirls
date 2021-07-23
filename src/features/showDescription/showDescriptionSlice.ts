import { createSlice } from '@reduxjs/toolkit';

export const showDescriptionSlice = createSlice({
  name: 'showDescription',
  initialState: {
    status: 'idle',
    error: null,
    data: [],
  },
  reducers: {},
});
