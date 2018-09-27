/***Check if any two intervals overlap among a given set of intervals
An interval is represented as a combination of start time and end time. Given a set of intervals, check if any two intervals overlap.

Input:  arr[] = {{1, 3}, {5, 7}, {2, 4}, {6, 8}}
Output: true
The intervals {1, 3} and {2, 4} overlap

suppose we will consider 1 PM to 10 PM is peak hours for customer services

1 
2
3
4
5
6
7
8
9
10

A - {1,3} 
B - {2,4}
C - {2,5}
D - {3,5}

customer service executive we have is 2 how many more we require
C1, C2

1st step is sort array
*****/
function interval(start, end){
    this.start = start,
    this.end = end
}

function sortByTiming(){

}


