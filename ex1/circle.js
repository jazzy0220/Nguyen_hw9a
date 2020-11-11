const pi = Math.PI;
const circumference = radius => {
    var circum = 2*radius*pi;
    return (`The circumference of a circle of radius ${radius} is ${circum}`);
}

const area = radius => {
    var are = radius*radius*pi;
    return (`Its area is ${are}`);
}

module.exports.circumference = circumference;
module.exports.area = area;