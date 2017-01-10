var map;

map = new Map();
map.set("yellow", [
    "1 + 1 = 2",
    "cows are animals",
    "grass is green",
]);
map.set("green", [
    "the moon is made from cheese",
    "the earth is flat",
    "pyramids were made by aliens",
]);


map.forEach(function (value, key) 
{
    console.log(typeOf key, key);
});