function makeAnagram(a, b) {
    var aMap = {};
    var bMap = {}
    for(var i = 0; i < a.length ; i++){
        aMap[a[i]] = (aMap[a[i]] || 0) + 1;
    }
    for(var i = 0; i < b.length ; i++){
        bMap[b[i]] = (bMap[b[i]] || 0) + 1;
    }
    debugger
    var counter = 0;
    Object.keys(aMap).forEach((key, val)=>{
        counter += Math.abs(aMap[key] -( bMap[key] || 0));
    });

    return counter;
 //return {aMap, bMap};

}