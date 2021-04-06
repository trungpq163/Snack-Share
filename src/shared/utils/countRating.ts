export default (ratings: any) =>
    ratings.length === 0
        ? 0
        : Number(
              (
                  ratings.map((x: any) => x.star).reduce((x: any, y: any) => x + y, 0) /
                  ratings.length
              ).toFixed(2)
          );
