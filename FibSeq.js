function maybeFib(input) {
    let numLow = 0;
    let numHigh = 1;
    console.log(numHigh);
    while(input > 0) {
        numLow += numHigh;
        numHigh += numLow;
        console.log(numLow + "\n" + numHigh);
        input--
    }
}

maybeFib(10);
