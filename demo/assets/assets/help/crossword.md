# Crossword Search

Crossword searches are useful when you known the
length of a word and the characters in some of the
positions. Enter the letters you know, and use '.'
for the ones you don't. For example, to find 4-letter
words that start with 'C' and end with 'T' you can 
enter 'c..t'.

It's also possible to use letter ranges (for more details on
letter ranges, see the advanced search help). For example, to
find 4-letter words that start with a vowel and end with 'k',
you could use '\[aeiou\]..k'.

You can match multi-word results by using '|' or ',' at the 
word boundary.

Alternatively you can use the word count range
sliders to do multi-word matches if you don't care about
the actual split point. Note that these sliders are ignored if you
have used ',' or '|' in the letters.

You can use the word length sliders to set the minimum and maximum allowed
word lengths for results. These are by default set to min 1 and max 25, so
don't constrain anything (as the dictionaries contain words from one up to
25 characters long).

## (Advanced): Relationship to Advanced Search

Under the hood, crossword searches use the advanced search engine, by converting all
letters to upper case, converting '.' to ':', and then using the result as the template,
with an empty 'must use' pool and an unlimited 'can use' pool.
