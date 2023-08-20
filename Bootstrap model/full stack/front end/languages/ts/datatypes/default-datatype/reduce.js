let numbers = [1, 1, 2, 3, 4, 4];

function unique(array){
  return array.reduce(function(previous, current) {
     if(!previous.find(function(prevItem){
         return prevItem === current;
     })) {
        previous.push(current);
     }
     return previous;
 }, []);
}

unique(numbers);