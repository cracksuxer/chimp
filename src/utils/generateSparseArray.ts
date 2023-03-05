export function generateSparseArray<T>(length: number, limit: number): Array<T | null> {
    const boxes = new Array(length).fill(null);
    const randomNumbers = new Set<number>();

    while (randomNumbers.size < limit) {
      randomNumbers.add(Math.floor(Math.random() * 25));
    }

    Array.from(randomNumbers).forEach((n, i) => (boxes[n] = i + 1));

    return boxes;
}