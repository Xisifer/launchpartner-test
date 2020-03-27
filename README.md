# launchpartner-test
Mini Coding Project done as a test of ability for LaunchPartner.

# Difficulties
This took significantly longer than just 4 hours (as optimistically outlined in the design doc). I had difficulty finding a hosting solution that could be used with Heroku that could host user-uploaded images, for starters. First I looked into whether MySQL could hold images (turns out it can, but only up to 1MB in size), but then I started planning out where we need to make the calls to pass the data down to the child components and realized the data handoffs might be more complicated than I expected.

Aside from being rusty, this exercise has revealed to me that my overall coding style is rather on the slow side of things. I understand what it is I need to do, but executing on that is slow and painstaking and involves a lot of debugging and research and Googling and etc.

In the end, I decided to do a bit of re-prioritizing and re-orient the image uploading, the part I'm least confident on, to the last, and just focus on getting the custom API creation working, and getting the backend up and talking for the Name and Description.

Historically, on group projects, I typically volunteered to work on the Front End sections of the app, since I find it easier to work on and visualize things that I can see instead of grappling with more abstract data-forms. This has come back to bite me, since my backend skills have become somewhat rusty, and needing to produce a fully working Full Stack app in 48 hours is proving to be a daunting task.
