import { createReducer } from '@reduxjs/toolkit';
import { changeFeaturedData, getTendingNow } from '../actions/moves';
import { FeaturedItem, TrendingItem } from '../../types';
import Utils from '../../helpers/Utils';

type TVState = {
  tendingNow: TrendingItem[];
  featured: FeaturedItem | null;
  sequenceIds: string[];
};

const initialState: TVState = {
  tendingNow: [],
  sequenceIds: [],
  featured: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getTendingNow.fulfilled, (state, { payload }) => {
      const selectedId = Utils.getSelectedId();

      const sortedByDateData = payload.TendingNow.sort(
        (a, b) => new Date(b.Date).getTime() - new Date(a.Date).getTime()
      ).slice(0, 50);

      state.sequenceIds = sortedByDateData.map((item: TrendingItem): string => item.Id);

      if (selectedId) {
        const selectedItemIndex = sortedByDateData.findIndex((d) => d.Id === selectedId);

        const tendingNow = Utils.reorderArray(sortedByDateData, selectedItemIndex, 0);

        state.tendingNow = tendingNow;
        state.featured = tendingNow[0];
      } else {
        state.tendingNow = sortedByDateData;
        state.featured = sortedByDateData[0];
      }
    })

    .addCase(changeFeaturedData, (state, { payload }) => {
      const selectedId = Utils.getSelectedId();

      const arr = selectedId
        ? Utils.reorderArray(state.tendingNow, 0, state.sequenceIds.indexOf(selectedId))
        : state.tendingNow;

      const selectedItemIndex = arr.findIndex((item: TrendingItem) => item.Id === payload.Id);

      Utils.setSelectedId(payload.Id);

      state.featured = payload;
      state.tendingNow = Utils.reorderArray(arr, selectedItemIndex, 0);
    });
});

export default reducer;
