# GG-Companion
**Repository description**: Back-end files for a mobile 'companion' app for Call of Duty: Black Ops 3 zombies mode. Front-end was mainly wordpress plus some HTML/CSS changes I made to personalize the website to better suit the application.

**Application description**: GG Companion allows Black Ops 3 players to keep track of their gobblegum probabilities throughout their match. Gobblegums are one of the most essential gameplay aspects of BO3 zombies, so this takes some of the guesswork out of the gobblegum consumption process.

**What is a gobblegum?**

A gobblegum is a consumable booster-type item in Call of Duty: Black Ops 3 zombies mode. You select five unique gobblegums before starting a match, and during the match you can receive up to three of those per round. The first gobblegum is free, and the second two are priced according to how many "rounds" or "waves" you have made it into the game. Gobblegums follow a uniform probability pattern, meaning that if you roll a particular gobblegum you won't roll it again until all the other four gobblegums have been rolled. Once the five distinct gobblegums have been consumed, all gums become available to roll once again. 

<br>
## File Descriptions

CompanionConfig.js: allows users to configure the app, namely entering the five gobblegums they want to keep track of.

CompanionWake.js: functionality written to ensure that users have an option to set their device to "no sleep" mode, allowing the companion app to stay awake. This is largely powered by a script written by github user 'richtr' called 'NoSleep.js'. His github page is cited within this file.

Companion.js: core app logic that monitors gobblegum probability and allows users to "consume" a gobblegum.
