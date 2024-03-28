function countWordFrequency(input, query) {
    const frequencyMap = {};

    for (const word of input) {
        frequencyMap[word] = (frequencyMap[word] || 0) + 1;
    }

    const output = [];
    for (const word of query) {
        output.push(frequencyMap[word] || 0);
    }

    return output;
}

const input = ['xc', 'dz', 'bbb', 'dz'];
const query = ['bbb', 'ac', 'dz'];

const result = countWordFrequency(input, query);
console.log(result);
