const hasDuplicate = arr => new Set(arr).size != arr.length;

const vowelCount = (str) => {
    const vowels = 'aeiou';
    var vowelMap = new Map();
    for (let letter of str) {
        let lowerLetter = letter.toLowerCase();
        if (vowels.includes(lowerLetter)) {
            if (!vowelMap.has(lowerLetter)) {
                vowelMap.set(lowerLetter, 1);
            } else {
                vowelMap.set(lowerLetter, vowelMap.get(lowerLetter) + 1);
            }
        }
    }
    return vowelMap;
}