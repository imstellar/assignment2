# Website Overview
Over this page, I aim to document my Designs, Developements, Testing and Provide an Evaluation for my website project assignment. There are 4 distinct sections that have their own sub-sections which aim to describe and fulfil a specific portion of the criteria described in the assignment brief.

## 1 - Design
Within this section, I aim to use the requirements as specified in the brief to produce designs including Colour Themes, Styles, Layouts and other relevant documentation. With these designs I am able to establish how the website will Look, Flow and Function. 

### 1.1 - Analysing client requirements
To properly analyse the client requirements we can take a look at the Scenario and Task 1 content which outlines all relevant information. To start with, the company, "Hot Beans Web" has hired us as a junior web developer and have requested a website which aims to recruit more web developers.

Moving on to the target audience, the brief states it is as follows;
> People who have completed training courses or qualifications related to web developent and are now looking for a job as a web developer.

This is a rather simple description and as such it allows for us to have freedom when creating the upcoming designs, we should however make sure the website outlines the company's targets, allows for visitors to send applications and is not confusing in it's structure, content or layout while utilising well thought out styling including font sizes, font colours, background colours, buttons and such.

### 1.2 - Colour schemes & Typography
Moving on to our Colours, Font styling and any other relevant styling that will be used within our design, I am utilising tools such as Adobe Photoshop and Adobe Colours to produce colour palletes and to edit or create illustrations that will be utilised within the website.

To get a good colour theme set up, I have noticed the image assets provided, specifically the [logo.png](assets/images/logo.png) file contains a background colour already, this will allow us to utilise the colour which is `#597A5E`, bringing this colour 2 shades up utilising Adobe Colors Complementary colour wheel we get `#A9DBB2`, we can then use this colour as our core for the Complemetary wheel producing a full-fledged set of colours that can now be used within the design and website, the full colour theme is available [here](/assets/design/Colour%20Pallete.png). To conclude this section, I wanted to also note that my main focus will be to utilise clear spacing utilising black and white components and backgrounds however the white colour will be `#E8E8E8` rather than `#FFFFFF` to prevent excessive eye strain. Lastly, another change made was to the colour pallete, changed the `#5E8665` to `#4F7051` to fit within the accessibility contrast guidance bringing the contrast ratio of the background `#E8E8E8` and text `#4F7051` to 4.55:1. 

To add to this section, I also want to consider my font styling that I will use throughout the website, this will be the Montserrat font family which brings out an appealing feeling while maintaining accessibility and ensuring text is easy to read.

With this concluded, I believe this brings out a well outlined colour scheme that is appealing to most people while fitting within accesibility and design guidelines, we can now move onto using the colour scheme for our Mockups and Website design.

### 1.3 - Wireframe
Before doing the wireframe I want to produce a sitemap that will allow me to map out the website's pages utilised within the end product, to do so I will use [https://draw.io](https://draw.io), the exported sitemap file is also available [sitemap.png](assets/design/sitemap.png).

Now, I can create a wireframe that should allow me to create the design for the website, which is available here, [Wireframe.rp](assets/design/Wireframe.rp) and the published project is here [https://zcvky9.axshare.com/?g=4](https://zcvky9.axshare.com/?g=4).

### 1.4 - Mockup
Here, I aim to create a functioning design prototype and create a fully laid out website along with its featured pages, this will allow me to effectively establish the colours, layout and features of the website before having to worry about trial and error when writing the code making the process more straightforward. Overall, this should be the design im going to use when creating the website itself.

With that all complete, I can confidently say there is a concrete mockup created that will allow me to now build a fully fledged website that looks, functions and flows well, the project file is available at [Mockup.rp](assets/design/Mockup.rp) and is also published at [https://9c3qq3.axshare.com/?code=6226de0c00075d1ada792b7f84699b73&g=4](https://9c3qq3.axshare.com/?code=6226de0c00075d1ada792b7f84699b73&g=4).

## 2 - Developement
Within this section, I will aim to create the code and make the website functional similar to the mockup created previously, before I begin making the layouts and adding components I want to start by creating a framework that I can understand and update easily in addition to using Bootstrap I would also like to create my own variables and properties that contain colours, font styles and sizing as I have done in the mockup. 

### 2.1 - Code layout
Utilising Bootstrap's CSS and JS frameworks I can make styles such as buttons be easy to implement, I can also customise each part of the element to fit the style which is needed to get the same look as seen in the mockup. Other styles that are not stored within `bootstrap.css` are instead going to be stored in `base.css`, this is where the Navigation bar, Footer and colours will be stored to persist on each page.

Here is an outline of what this looks like in the file structure;

`page.html` has the following files associated, `base.css`, `page.css`, `script.js` and optionally `page.js`, I will only reference the necessary files within the specific pages, this will reduce the amount of code that is loaded when its not required, which helps to speed up loading. Another reason for using this type of layout also allows me to create more fragmented and stable code meaning parts of code are less likely to break other parts. 
> Note, the `page` in the file names is a placeholder, which is replaced by the names as specified in the sitemap file, such as `index.css` or `jobs.js`.

### 2.2 - Important coding decisions made

As I have outlined earlier, My footer and navigation bar elements are static through each page however, im using the `script.js` to determine the current page the user is on and highlight the matching button to keep the user informed of what part of the website they are on right now, im doing this instead of changing the button styles per page this is to keep the website modular if any changes are made.

In the main page `index.html`, I have added a carousel using bootstrap, this proved to be a challenge and has taken a long time to make sure the sizing and animations work as intended.

I used @media queries in each page and tools such as flexbox and CSS grid to make the website what I believe is fully responsive to all screen sizes and allow for better navigation on as many devices as possible, even then adding responsiveness to the carousel from bootstrap which proved to be quite difficult and can still may cause issues at times, specifically at smaller screen sizes.

To conclude this section I would also like to bring attention to my html file structure which is; inside each html file you will find the `head` as usual, then the `body` which contains a well thought out foundation consisting of 1 `nav` element, any `section` elements needed for each distinct part of a page and `footer` element. Doing this not only improves code readability but also helps SEO by ensuring each part of the page is split up into parts by anything other than `div` elements, this has evolved into a consistent issue throughout web design where whenever an element needs to be placed, spaced or styled a `div` element is used without further thought. From the start of developement I knew that I wanted try and make sure to use the least amount of div elements where possible and looking at my code, I can gladly say the work was worth the time investment.

## 3 - Testing
### 3.1 - Test plan
A test plan can be created to cover the main surface area of the website for bugs and document them easier, this can be done for different browsers, screen sizes and devices, my test plan is available in a google sheets format which can be found here; [https://docs.google.com/spreadsheets/d/1sS5N_qh4y_NzZo35c4cEhRPOALhPSlXmK0X1JeoUv8k/edit?usp=sharing](https://docs.google.com/spreadsheets/d/1sS5N_qh4y_NzZo35c4cEhRPOALhPSlXmK0X1JeoUv8k/edit?usp=sharing)

I have decided to use google's spreadsheets as I believe this is the fastest way to create an easily formatted table and not having to waste time tweaking specific points of the test plan. 

With these tests, I have been able to ensure my website does exactly what is expected and document when it doesn't and why it is so.

### 3.2 - Bugs
As present in the test plan, the scrollbar on some of the employee profiles present inside the `profile` page makes the whole element off centered, this is a browser issue that seems to only persist on brave browser specifically, as I do not use chrome I cannot see whether this is a Chromium-wide issue or brave only.

In an earlier stage, I have experienced an issue with my `scrip.js` code where when viewing the website from the url [https://imstellar.github.io/assignment2/](https://imstellar.github.io/assignment2/), none of the buttons got highlighted, this was due to github not adding `home.html` to the end of the url making the script think it's not a part of any of the pages that are within the navbar, this was easily fixed by checking if that part of the url is empty therefore highlighting the home page button.

### 3.3 - Feedback
To get some feedback from outside sources, I will utilise a google form which will be sent to a couple people outside of college, these users will attempt to use the website from their device(s) and check if it works as expected providing feedback on any issues or hightlighting anything of importance.

[Here](https://docs.google.com/forms/d/1GO5HV33UHa3ijbc8tnEAMPI-NIpiV7nf-pqU4WS0XHg/edit#responses) is the form's responses, these responses are gathered from the people that chose to fill out the questions I have created while making it easy enough to understand each question.

From the feedback gathered, I can confidently say the code in my website works as I expect it to on different devices as shown from the feedback by others. This means I have created a well suited solution for the client and I am happy with the end result.

## 4 - Evaluation
### 4.1 - Final Evaluation
Referencing the above information, with all the steps I have taken up until now in the planning and developement process the project as a whole has concluded into a published and well-suited site for the client that fits their requirements as specified;
- A profile for the company
    - I have met this requirement by implementing a page specifically to cover the company's employees and history present inside the `profile` page, this was done by creating sections that cover; The company history, Employee profiles including profile pictures and The clients the company has worked with.
- Profiles of existing trainee web developers
    - This is the same as the previous point and is fully covered above inside the `profile` website's page.
- Job specifications and required qualification
    - I have done this inside the `jobs` page by creating sections for each position the company is hiring for that contains all relevant information about each position including location, benefits, job description and qualifications required along with an easy to see map of the specified work location.
- An online application form
    - This has also been done from within the `jobs` page, looking towards the bottom side of the web page I have created a fully responsive application form along with a "vacancy code" provided in the above positions that can be provided with the application making it a streamlined and well thought out solution to this requirement.
- Links to web development courses
    - To ensure this criteria is met, I have created a page called `learn` that contains any information about how to apply for courses in college or univerity, what to look for and any only courses available outside of university or college.

My website has focused on meeting the target audience also as we previously have considered in this README file, I have adapted parts of my website to implement some appealing animations and generated well thoughtout layouts while using nice fonts and colour schemes within making my approach perfect for the target audience and furthermore, most other people too as I have used alt text, proper contasting colours and high quality element hierarchy allowing for navigation via screen readers or similar.

Along with this evaluation, I also want to cover how my personal time has been used for this project along with my changes and considerations I have made throughout starting with;
- My commit history, this is available [here](https://github.com/imstellar/assignment2/commits/main/) and showcases a waterfall of my changes spanning over 60 different instances, with this you can also see which days the commits were posted and how well my work has been spread out throughout this project's lifespan.
- I have spent a lot of time just learning new things for this project, including how CSS grid works, how to implement a carousel via Bootstrap, these features required a lot of time and research for me to properly implement, which I have done during this assignment.
- In general, I have attempted to make sure to keep a regular schedule throughout my time away from college to work on this assignment, this has allowed to me to manage my workload dynamically by working on the tasks that are closer to be due at the time.

### 4.2 - Potential future improvements
While I believe my website works really well and is highly responsive there could surely be more improvements and features that could be made;

- Further form handling to allow the form to be submitted to a database or other data structure.
- Higher quality animations could allow even more fluid menus or interactive elements.
- An administrative console, this could be used to allow the company to add new vacancies easily or view form responses.

Im sure there are even better imrovements to be made and they change up the quality of the website for the better however with my current coding experience the website is quite basic with some interactive elements.
## References
- Adobe Colors, Available at [https://color.adobe.com](https://color.adobe.com/)
- Draw.io, Available at [https://draw.io/](https://draw.io/)
- Freepik, Available at [https://freepik.com/](https://freepik.com/)