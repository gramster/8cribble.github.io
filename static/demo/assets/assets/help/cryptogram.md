# Cryptogram Search

For cryptogram searches, any letter can instead be represented by a number; 
all letters with such restrictions and the same number must match the same 
letter. Furthermore, the associations of letters and numbers must be unique; 
you can't have a latter match more than one number (to do that, you need to 
use the Advanced Search).

For example, to find all six-letter palindromes you can use '1 2 3 3 2 1'. 
You can still use letters so to restrict the above to 6-letter palindromes
starting with A you can use 'A 1 2 2 1 A'.

More powerful versions of cryptogram searches are possible using the advanced search function.

## (Advanced): Relationship to Advanced Search

The cryptogram search functionality is a convenience; under the hood it uses the advanced search engine and instead of separating the options with spaces, uses ':' in front of each number, with an unlimited 'can use' pool and empty 'must use' pool. Our example above would be converted to the template 'A:1:2:2:1A'.
