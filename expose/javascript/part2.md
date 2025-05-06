# Part 2 Questions

1. at line 12 the number 3 will be printed. This is because the variable i was declared as a var instead of let, this makes it so that i has scope over the whole function rather than just the for block and does not cause an error when it is referenced outside of its decalred scope. 
2. it will print 150. Discounted price is declared with var so it still can be used after the for block. The number 150 comes from 300 * (1 - 0.5)
3. 150 will be printed. Var is used so it would work without error anywhere in the function, however, finalPrice was declared in the same scope as it is used, so there wouldn;t be an error even if let was used.
4. it will return an array containing [50, 100, 150]. The function discountPrices creates an array of called discounted by modifying values in a given array called prices. After giving them the appropriate discount, it pushes them to the back of the array discounted. Finally, it returns the completed array. 
5. It will through an error. The variable i is created with let in the scope of the for loop. This means that when it is called outside of the for loop, there is no such variable and an error occurs. 
6. Another error will be thrown since discountedPrices was created using let and console.log tries to use it outside of the scope of the for looop in which it was declared. 
7. No errors here! although finalPrice was created using let, it was used in the appropriate scope within the function. It prints 150. 
8. No errors again! It will return the appropriate array [50, 100, 150]. Although discounted was declared with let, it is used in the correct scope so there is no error. 
9. The variable i is still outside the scope of of line 11. So, an error is thrown. 
10. length is declared in the scope of its use in line 12, so 3 is printed.
11. Surprisingly, it returns the appropriate array. I would have thought that none of this function would work since we continuously try to modify a const variable, but it worked when I ran it to double check my answers. 
12. 
    1.  student.name
    2.  student['Grad Year']
    3.  student.greeting()
    4.  student['Favorite Teacher'].name
    5.  student.courseLoad[0]
13.  Arithmetic
     1. '3' + 2 = '32'
     2. '3' - 2 = 1
     3. 3 + null = 3
     4. '3' + null = '3null'
     5. true + 3 = 4
     6. false + null = 0
     7. '3' + undefined = '3undefined'
     8. '3' - undefined = NaN 
14. Comparison
    1.  '2' > 1 = true
    2.  '2' < '12' = false
    3.  2 == '2' = true
    4.  true == 2 = false
    5.  true === Boolean(2) = true
15. == and === are both comparison operators that check if things are equal to eachother. == utilizes the weak typing to make those comparisons where === requires both sides to be of the same type. 
16. 