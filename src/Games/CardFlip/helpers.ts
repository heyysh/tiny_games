const getRandomPairCardList = (pairNum: number): string[] => {
  if (pairNum > 26) return [];
  const randomCards = getRandomPairCards(pairNum);
  const shuffledRandomCards = arrayShuffle(randomCards);
  return shuffledRandomCards;
}

const getRandomPairCards = (pairNum: number): string[] => {
  if (pairNum > 26) return [];
  let randomCardIndices: number[] = [];
  for (let i = 0; i < pairNum; i++) {
    let currIndex = Math.floor(Math.random() * 26);
    while (randomCardIndices.includes(currIndex)) currIndex = Math.floor(Math.random() * 26);
    randomCardIndices = [...randomCardIndices, currIndex, currIndex];
  }
  return randomCardIndices.map(item => String.fromCharCode(item + 65));
}

const arrayShuffle = <T>(arr: T[]): T[] => {
  let i = arr.length;
  while (--i) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[j], arr[i]] = [arr[i], arr[j]];
  }
  return arr;
}

export { getRandomPairCardList };
