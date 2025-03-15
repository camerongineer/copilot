function calculateNumbers() {
  const numbers = [];
    for (let i = 0; i < 100; i++) {
        if (i % 2 === 0) {
            numbers.push(i);
        }
        }
    return numbers;
    }