// DO NOT MODIFY
var genericNumberArray = [1, 2, 3, 4, 5];
var colors = ['Blue', 'Red', 'Yellow', 'Charlie'];
var scrambledWords = ['win', 'the', 'for', 'burritos'];
var phoneNumber = [9, 0, 3, 5, 7, 6, 8];
var orderQueue = [{ takeOut: 'Ice Cream' }, { takeOut: 'Medium Salad'}, { takeOut: 'Burger'}];
var mixedNums = [5, 81, 40, 4, 805, 10, 76, 21, 3, 2, 7, 1, 7];
var mixedWords = ['Dont', 'You', 'Forget', 'About', 'Me'];
var fruitCollection = ['Apple', 'Scissors', 'Pug', 'Lady Bug', 'Banana', 'Pear'];
var gemBox = ['Ruby', 'Diamond', 'Diamond', 'Emerald', 'Moonstone', 'Pizza', 'Sneaker', 'Sapphire', 'Baby', 'Jeans', 'Soda Can', 'Boat'];
var upToTen = [1, 2, 9, 10];
var brownOnly = ['brown', 'brownish', 'ad8fy7iuhj23nrsf', 9813, {}, undefined,  'brown'];
var orderedValues = [4, 5, 6, 7, 8, 9, 10];
var friends = ['Todd', 'Jacoby', 'Miko', 'Joseph', 'Kevin', 'Todd C.'];
var monthNames = ['Jan', 'Feb', 'Mar', 'Apr'];
var bulkNumbers = [5, 5, 6, 6, 9, 9, 2, 2, 2, 5, 2];

// do your work below!

var nameArray = [];
var insertName = nameArray.push('Janelle', 'Hirano');

var insertNum = genericNumberArray.push(6, 7, 8, 9, 10);

var popResult = colors.pop();

var scrambledArray = scrambledWords.reverse();

var correctPhone = phoneNumber.reverse();

var nextOrder = orderQueue.shift();

var sortNums = mixedNums.sort();

var sortWords = mixedWords.sort();

var newFruits = fruitCollection.splice(1,3);
var notFruit = newFruits;


// NEED TO FINISH:
// var gemBox = ['Ruby', 'Diamond', 'Diamond', 'Emerald', 'Moonstone', 'Pizza', 'Sneaker', 'Sapphire', 'Baby', 'Jeans', 'Soda Can', 'Boat'];
var onlyGems = gemBox.splice(5,7);
// ['Ruby', 'Diamond', 'Diamond', 'Emerald', 'Moonstone', 'Sapphire', 'Baby', 'Jeans', 'Soda Can', 'Boat'];
var onlyGems2 = onlyGems.splice(6, 10);
var newGems = gemBox;

// var upToTen = [1, 2, 9, 10];
var insertNums = upToTen.splice(2,0, 3, 4, 5, 6, 7, 8);

// var brownOnly = ['brown', 'brownish', 'ad8fy7iuhj23nrsf', 9813, {}, undefined,  'brown'];
var onlyBrown = brownOnly.splice
