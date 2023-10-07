export const getRandomNumber = (max) => {
    return Math.floor(Math.random() * (max + 1));
  };
  
export const getRandomElements = (array, count) => {
    const copiedArray = [...array];
    const suffledArray = copiedArray.sort(() => 0.5 - Math.random());
  
    return suffledArray.slice(0, count);
  };
  