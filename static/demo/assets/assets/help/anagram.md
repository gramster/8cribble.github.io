# Anagram Search

Enter the letters that should be used to create the anagram. You
can use '.' for a wild-card letter; for example, entering 'co.t'
will find four-letter anagrams using the letters 'c', 'o', 't' and 
any other single character (assuming you haven't used the word length 
sliders to change the allowed result lengths).

It's also possible to use letter ranges like '\[aeiou\]` (for more details on
letter ranges, see the advanced search help).

For a multi-word anagram you can indicate the position of the word split
using '|' or ','. For example, 'co,.t' would find pairs of two-letter
words made from the letters 'c', 'o', 't', and one other.

Alternatively you can adjust the word count range slider to be
other than one for minimum or maximum number of words. If you do use
explicit word split characters '|' or ',' then the range slider will
be ignored.

You can use the word length sliders to set the minimum and maximum allowed
word lengths for results. These are by default set to min 1 and max 25, so
don't constrain anything (as the dictionaries contain words from one up to
25 characters long).

## (Advanced): Relationship to Advanced Search

Under the hood, anagram searches use the advanced search engine. A template is 
created by changing each letter to '.', and then the original letters are all 
placed in the 'must use' pool.

