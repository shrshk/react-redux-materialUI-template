// @flow
import { createAndCombineSliceReducer } from '../../../utils';

export const sliceName = 'testSlice';

export type testSlice = {
};

const initialState: testSlice = {
    isLoading: 'false',
    data : []
};

export const testReducer = createAndCombineSliceReducer(
    sliceName,
    initialState
);
