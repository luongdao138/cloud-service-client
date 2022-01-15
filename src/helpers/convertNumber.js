export const convertAverageRating = (rating) => {
  const values = [0, 1, 2, 3, 4, 5, 0.5, 1.5, 2.5, 3.5, 4.5];
  let result = 0;
  let min = 100000;
  values.forEach((num) => {
    const dif = Math.abs(num - rating);
    if (dif < min) {
      result = num;
      min = dif;
    }
  });

  return result;
};

export const convertRatingDistribution = (rating_distribution) => {
  const total = rating_distribution.reduce((acc, current) => {
    return acc + current.count;
  }, 0);

  if (total) {
    let new_distribution = rating_distribution.map((r) => {
      return { ...r, percent: Math.round((r.count * 100) / total) };
    });
    [1, 2, 3, 4, 5].forEach((num) => {
      const x = new_distribution.find((r) => Number(r.name) === num);
      if (!x) {
        new_distribution.push({
          name: num.toString(),
          count: 0,
          percent: 0,
        });
      }
    });
    return new_distribution;
  } else {
    return [
      { name: '1', count: 0, percent: 0 },
      { name: '2', count: 0, percent: 0 },
      { name: '3', count: 0, percent: 0 },
      { name: '4', count: 0, percent: 0 },
      { name: '5', count: 0, percent: 0 },
    ];
  }
};

const INTERGER_FORMATTER = new Intl.NumberFormat('en-us', { maximumFractionDigits: 0 });

export const formatInterger = (integer) => {
  return INTERGER_FORMATTER.format(integer);
};
