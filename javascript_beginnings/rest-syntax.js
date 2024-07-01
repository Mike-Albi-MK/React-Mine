//Rest arguments (...) syntax is used in function arguments
//when the number of arguments is unknown

    /* function addNumbs(... args) {  //...args converts everything in addNumbs() into an array
        console.log(args);
        //return a + b;
    }

    addNumbs(2, 2, 4, 5, 6); */

    function addNumbs(...numbers) {
        let result = 0;
        for(const num of numbers){
            result += num;
        }
        return result;
    }

    console.log(addNumbs(2, 2, 4, 5, 6));



    function findMax(...numbers) {
        let max = numbers[0];  //variable from array itself, [0] first item
        for (const num of numbers){
            if (num > max) {
                max = num;
            }
        }

        return max;
    }

    findMax(2, 3, 43, 5, 6);

    console.log(findMax(2, 3, 43, 5, 6)); // Output: 43 cos it's the highest number


