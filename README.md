# pwp
Personal Website Project for Deep Dive Coding Boot Camp  
This is milestone one of the PWP project. It contains a purpose, audience, goal, persona, and use case.

## Milestone 1 Feedback
I remember that we talked about doing a multi-page project to accommodate the larger number of portfolio items you want to feature. This is something that should be detailed in the Use Case, for future reference. Overall what you have is a good start, but there is plenty of room for additional detail here, especially in your Use Case. Your Persona is good but the purpose, audience, goal and use case could be more specifically defined, especially in light of your gallery of past work.

Since you are looking at a multi-page layout, think very carefully about your content strategy and layout choices. Start with two pages: A home/landing page, and a content page. Only consider 3 or more pages if absolutely necessary. Remember that mobile and full-screen wireframes will be required for each unique page layout. Create no more than two layouts, max. 

Your HTML and CSS looks great. One very nitpicky note on CSS: It's a bit cleaner to put each comma-separated CSS Selector on its own line. Have a look at Edits &amp; Suggestions below for a note on your file structure.

Overall, very nice work. Your Milestone 1 passes at [Tier III](https://bootcamp-coders.cnm.edu/projects/personal/rubric/). You're clear to begin Milestone 2&alpha;

### Edits &amp; Suggestions
- It would be a good idea to move all of your images and graphics inside an `/images` directory inside `/public_html`. Additionally, if you would like even more separation of concerns you can create an `/images` directory inside of `/documentation`, for your PWP Milestones only.

## Milestone 2&alpha; Feedback
These wireframes are excellent and your content strategy is succinct and well defined. Nice work! 

I see some *copypasta* and a few other minor issues in your HTML - but otherwise good work here. See Edits &amp; Suggestions below. Onto the wireframes...

I think featuring a link for each and every one of your projects would be overkill in the navbar. That would be a ton of links, and even if you use dropdowns that would be a bit much. I would limit the navbar links to just the major sections of your site. Regarding your galleries, my thought is that having 3 Flickity galleries on one page might be too cluttered. Especially on mobile. What you might want to consider is building a separate gallery page for each category of your past work, and then put those links in a dropdown under a "My Work" or "Portfolio" option. Of course the choice is ultimately up to you. Bootstrap has many pre-built navbar options, including animated dropdowns, that you can use. Have a look here: http://getbootstrap.com/components/#navbar

I see that your navbar is placed up top on the full-screen layout, and at the bottom on mobile screens. There are a couple of ways to do this: You can create two different navbars and selectively show/hide them based on screen with (Bootstrap already has pre-built CSS and classes for this!), or you can create one navbar and alter the CSS based on a @media query. Explore your options. 

Nice work getting Flickity up and running! If you wrap your Flickity `<img>` tags inside an `<a>` tag, you can link your images to their corresponding demo pages.

It shouldn't be difficult at all to `require_once();` your header/navbar onto each demo page. Here's a link to a sample multi-page project that uses this method and the PHP Relative Path, have a look here: https://github.com/rlewis2892/simple-template Your project will use the same methodology.

Nice work here! Your Milestone 2&alpha; passes at [Tier III](https://bootcamp-coders.cnm.edu/projects/personal/rubric/). Looking forward to seeing this project take shape!

### Edits &amp; Suggestions
- FYI - you don't need two `$(document).ready(function(){});` functions. Both of your click functions can live inside the first. Ideally, this jQuery should live in an external js file BTW.
- Lines 83, 84, 134, 135, 185, 186 are copypasta. You've already loaded these dependencies in the `<head>`, so remove them in the `<body>`.
- Don't forget the `alt` attributes on lines 75 and 79.
- Ideally, your custom CSS on line 7 should be loaded AFTER Flickity's CSS... just in case you need to override it. I like to group all my CSS links together in one section in the `<head>` just so it's easier to keep an eye on the order.
