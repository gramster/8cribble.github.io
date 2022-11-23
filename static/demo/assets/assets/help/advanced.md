# Advanced Search

Underlying all of the Wordfinder General's searches is the advanced search engine.
Learning to use advanced search will give you the most power over finding word matches. If you are familiar at all with [regular expressions](https://en.wikipedia.org/wiki/Regular_expression) you should find much of the below quite familiar but there are some differences; the WordFinder General's regular expression is custom-built for 
match problems typical in word puzzles.

The basic concept is not too difficult: we try to find words that match a 
regular-expression-like template, using only letters drawn from one of two pools: 
a pool of letters that *must all* be used and a pool of letters that 
*may optionally* be used. The template itself may contain some pre-populated 
letters already, so only some positions need to be completed from the pools.

To specify the template:

- Upper-case letters represent themselves, and don't come from the pools; ':' represents any single letter (A through Z), not from the pools
- Lower-case letters represent themselves, but must come from the pools (you may wonder why we would include these in the template, but that will become clear below when we discuss letter ranges); '.' represents any single letter (A through Z) that must come from one of the two letter pools
- | or , is used to separate words
- A subsequence of letters can be surrounded by parentheses. You can refer to a prior sequence with /1, /2, etc. So 'B(AN)/1A' is the same as 'BANANA'.
- any letter specifier can be followed by a number which is a *cryptogram* restriction. All letters with such restrictions and the same number must match the same letter. For example, to find all six-letter palindromes you can use ':1:2:3:3:2:1'.

Instead of letters, you can use letter ranges, surrounded by square brackets. For example:

- \[AEIOU\] - represents any single vowel, not from the pools
- \[abcde\] - represents one of the letters A, B, C, D or E, that must come from a pool
- \[a-e\] - is the same as \[abcde\]
- \[^AEIOU\] - ^ inverts a range, so this represents a consonant

Once again, upper-case letters don't come from the pools. You can't mix and match
pool and non-pool letters in a letter range; to address this we use the convention that the case of the first letter in the range determines the usage; thus '\[Abc\]' is equivalent to '\[ABC\]' and '\[aBC\]' is
equivalent to '\[abc\]'.

A letter or letter range usually represents a single letter, but that can be modified by following the latter or letter range with a *count specifier*:

- \+ means one or more
- \* means zero or more
- ? means 0 or 1
- @n means n (e.g. 'O@3' is the same as 'OOO')

Many of the same conventions can be used in the pools, although letter case has no meaning. That is, 
the pools can include literal letters, letter ranges, '.' (or ':'; both are treated as equivalent to '\[A-Z\]'), and count specifiers. Apart from letter case being significant, a difference between the template and pools is that in the template, order is important, but in the pools it is not.

You can use the cryptogram restrictions in the template to place alphabetical position constraints on letter
matches by using '+' or '-' for simple 'additions' and 'subtractions'. For example, to find all three-letter words where the letters are adjacent to each other alphabetically but in reverse order you can use ':1:1-1:1-2'.

As another example, this comes from NPR's Sunday Puzzle: Think of a five-letter word. Change the first letter to the next letter of the alphabet, and you'll get a new word that doesn't share any sounds with the first one. Then change its first letter to the next letter of the alphabet, and you'll get a third word that doesn't share any sounds with either of the first two. What words are these?

We can find candidates for this puzzle with the pattern ':1:2:3:4:5|:1+1:2:3:4:5|:1+2:2:3:4:5'.
That pattern says we are looking for 3 5-letter words where all the letters are the same except
for the first letter; in that case the first letter of the second word comes on position later in the alphabet than that of the first word, and the first letter of the third word comes two positions later.

You can use the word length sliders to set the minimum and maximum allowed
word lengths for results. These are by default set to min 1 and max 25, so
don't constrain anything (as the dictionaries contain words from one up to
25 characters long).
