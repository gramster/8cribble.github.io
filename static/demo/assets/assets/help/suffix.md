# Suffix Search

Suffix search finds words that end with a specific suffix.
For example, if you enter 'cat' as your suffix, we will find
all words that end with 'cat'.

You can include '.' in your suffix constraint if the letter 
is not fixed. For example, to find words that end with 't' 
where the third-last letter is 'c', you can use the suffix 'c.t'.

It's also possible to use letter ranges (for more details on
letter ranges, see the advanced search help). For example, to
find words that end with two vowels, you could use suffix
'\[aeiou\]\[aeiou\]'.

You can use the word length range sliders to constrain the length
of the matching words (but note that the full suffix must be matched,
so if you set the max allowed word length to shorter than the suffix
length no matches will be found).

## (Advanced): Relationship to Advanced Search

Suffix Search is really just a convenient shortcut that 
simplifies things for users. In practice, it amounts to the
equivalent advanced search where '.*' is prepended to the suffix
string, the must-use pool is empty, and the can-use pool is '.*'
(i.e. there are no pool constraints).
