/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let minTemps = []
    let idx
    for (let i = 0; i < temperatures.length; i++) {
        if (minTemps.length === 0) {
            minTemps.push(i)
            continue
        }
        
        while (minTemps.length !== 0 && temperatures[i] > temperatures[minTemps[minTemps.length - 1]]) {
            idx = minTemps.pop()
            temperatures[idx] = i - idx
        }
        minTemps.push(i)
    }

    while (minTemps.length !== 0) {
        temperatures[minTemps.pop()] = 0
    }
    
    return temperatures
};
