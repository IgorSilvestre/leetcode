/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function (target, position, speed) {
    let cars = position.map((p, i) => [p, speed[i]])
    cars.sort((a, b) => b[0] - a[0])

    let fleets = []

    for (let [p, s] of cars) {
        let time = (target - p) / s

        if (fleets.length === 0 || time > fleets[fleets.length - 1]) fleets.push(time)
    }

    return fleets.length
}
