import {
  getRandomPairCardList,
  getRandomPairCards,
  arrayShuffle,
  timerFormatter
} from '../helpers';

test('getRandomPairCardList', () => {
  const exceedMaxPairNumResult = getRandomPairCardList(30);
  expect(exceedMaxPairNumResult).toEqual([]);

  const normalResult = getRandomPairCardList(10);
  expect(normalResult.length).toEqual(20);

})

test('getRandomPairCards', () => {
  const exceedMaxPairNumResult = getRandomPairCards(30);
  expect(exceedMaxPairNumResult).toEqual([]);
})

test('arrayShuffle', () => {
  const rawData = ['A', 'B', 'C', 'D', 'E'];
  const shuffledData = arrayShuffle(rawData);

  expect(rawData.length === shuffledData.length).toBeTruthy();

  for (let i = 0; i < shuffledData.length; i ++) {
    expect(rawData.includes(shuffledData[i])).toBeTruthy();
  }
})

test('timerFormatter', () => {
  const resultLessThenTenSeconds = timerFormatter(9);
  expect(resultLessThenTenSeconds).toEqual('00 : 09');

  const resultLessThenMinute = timerFormatter(59);
  expect(resultLessThenMinute).toEqual('00 : 59');

  const resultGreaterThenTenMinutes = timerFormatter(659);
  expect(resultGreaterThenTenMinutes).toEqual('10 : 59');
})