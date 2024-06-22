import { initializeTimes, updateTimes } from './Main';

test('initializeTimes returns correct times', () => {
    const times = initializeTimes();
    expect(times).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
});

test('updateTimes returns same times for UPDATE action', () => {
    const initialState = initializeTimes();
    const newState = updateTimes(initialState, { type: 'UPDATE', date: '2024-06-22' });
    expect(newState).toEqual(initialState);
});
