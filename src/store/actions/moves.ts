import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import data from '../../backend/data.json';
import { ResponseData, TrendingItem } from '../../types';

export const getTendingNow = createAsyncThunk<ResponseData, void>('get/tendingNow', async (_, thunkAPI) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 500));

    return data as ResponseData;
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});

export const changeFeaturedData = createAction<TrendingItem>('update/featuredData');
