function stringsLength (a,b,c){

    const totalString = (a+b+c).length;
    const avg = totalString / 3;
    console.log(totalString);
    console.log(Math.floor(avg));
}
stringsLength ('chocolate,','ice cream','cake');