// created a factorial function using recursive method 
function factorial(n){
    // the base case is 0 
    if(n==0){
        return 1;
    }else{
        // should keep subtracting till reaches base case 
        return n * factorial(n-1)
    }
}








