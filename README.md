# Userscripts

Collection of some userscripts I use regularly, mainly to fix annoying websites.


## `moodle-search`
Add a search bar to Moodle course pages. Instead of scrolling through miles of toggles and topics, I can just type what I want and it surfaces the relevant activities.

It works by cloning every `<div>` which contains an activity into the search results if they match a query. That way, there's no backend and searches take place instantly, as you type.

## `moodle-dispatch`
Changes some useless parts of Moodle's navigation into color-coded links to your courses. Quicker navigation, as it's easier to locate a color than to scan through a long list of course names.

## `quizlet-typo-shortcut`
Currently, Quizlet doesn't have a keyboard shortcut for the "Override: I got this right!" button. This script binds backspace to a `.click()` on that button when on learn pages.
