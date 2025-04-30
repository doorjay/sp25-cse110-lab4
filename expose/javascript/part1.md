# Part 1 Questions

1. values added: 20
2. final result: 20
3. You should not use var to create variables that are used in this way because you are abusing their scope. In other languages you would not be able to access result outside of the scope of the if statement. Here, if you wanted to access result, you should declare it outside of the if statement and use let instead of var. 
4. values added: 20
5. An error is given becuase the variable result is referenced outside of the scope in which it is created. Since, let contains the scope of result to within the if block, no such varaible exists by line 13. 
6. There is an error. Since we declared result as a const, we cannot change it as we attempt to do on line 7. Therefore, no message is printed.
7. Since there is an error, no message is printed. Previous to line 13, an attempt was made to change a const variable which is not allowed!