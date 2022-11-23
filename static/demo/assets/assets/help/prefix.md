# Prefix Search

Prefix search finds words that start with a specific prefix.
For example, if you enter 'cat' as your prefix, we will find
all words that start with 'cat'.

You can include '.' in your prefix constraint if the letter 
is not fixed. For example, to find words that start with 'c' 
where the third letter is 't', you can use the prefix 'c.t'.

It's also possible to use letter ranges (for more details on
letter ranges, see the advanced search help). For example, to
find words that start with two vowels, you could use prefix
'\[aeiou\]\[aeiou\]'.

You can use the word length range sliders to constrain the length
of the matching words (but note that the full prefix must be matched,
so if you set the max allowed word length to shorter than the prefix
length no matches will be found).

## (Advanced): Relationship to Advanced Search

Prefix Search is really just a convenient shortcut that 
simplifies things for users. In practice, it amounts to the
equivalent advanced search where '.*' is appended to the prefix
string, the must-use pool is empty, and the can-use pool is '.*'
(i.e. there are no pool constraints).
