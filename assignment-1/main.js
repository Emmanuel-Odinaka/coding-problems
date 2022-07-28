for (let i=0; i<=200; i++) {
    // check for divisible by 8 and 6 first
    if (i%8 == 0 && i%6 == 0) {
        console.log("ShamsTIIDELAB");
    } else if (i%8 == 0) {
        console.log("TIIDELAB");
    } else if (i%6 == 0) {
        console.log("Shams");
    } else {
        console.log(i);
    }
}