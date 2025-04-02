# Website Overview
Over this page, I aim to document my Designs, Developements, Testing and Provide an Evaluation for my website project assignment. There are 4 distinct sections that have their own sub-sections which aim to describe and fulfil a specific portion of the criteria described in the assignment brief.

## 1 - Design
Within this section, I aim to use the requirements as specified in the brief to produce designs including Colour Themes, Styles, Layouts and Such. With these designs I am able to establish how the website will Look, Flow and Function. 

### 1.1 - Analysing client requirements
To properly analyse the client requirements we can take a look at the Scenario and Task 1 content which outlines all relevant information. To start with, the company, "Hot Beans Web" has hired us as a junior web developer and have requested a website which aims to recruit more web developers.

Moving on to the target audience, the brief states it is as follows,
> People who have completed training courses or qualifications related to web developent and are now looking for a job as a web developer.

This is a rather simple description and as such it allows for us to have freedom when creating the upcoming designs, we should however make sure the website outlines the company's targets, allows for visitors to send applications and is not confusing in it's structure, content or layout while utilising well thought out styling including font sizes, font colours, background colours, buttons and such.

### 1.2 - Colour schemes & Typography
Moving on to our Colours, Font styling and any other relevant styling that will be used within our design, I am utilising tools such as Adobe Photoshop, Adobe Colours and Adobe Photoshop to produce colour palletes and to edit or create illustrations that will be utilised within the website.

To get a good colour theme set up, I have noticed the image assets provided, specifically the [logo.png](assets/images/logo.png) file contains a background colour already, this will allow us to utilise the colour which is `#597A5E`, bringing this colour 2 shades up utilising Adobe Colors Complementary colour wheel we get `#A9DBB2`, we can then use this colour as our core for the Complemetary wheel producing a full-fledged set of colours that can now be used within the design and website, the full colour theme is available [here](assets/images/Adobe Colour pallete.png). To conclude this section, I wanted to also note that my main focus will be to utilise clear spacing utilising black and white components and backgrounds however the white colour will be `#E8E8E8` rather than `#FFFFFF` to prevent eye strain. Lastly, another change made was to the colour pallete, changed the `#5E8665` to `#4F7051` to fit within the accessibility contrast guidance. 

With this concluded, I believe this brings out a well outlined theme that is appealing to most people while fitting within accesibility and design guidelines, we can now move onto using the colours and created plans to develop mockups and wireframes.

### 1.3 - Wireframe
Before doing the wireframe I want to produce a sitemap that will allow me to map out the website's pages utilised within the end product, to do so I will use [https://draw.io](https://draw.io), the exported sitemap file is also available [sitemap.png](assets/design/sitemap.png).

Now, I can create a wireframe that should allow me to create the design for the website, which is available here, [Wireframe.rp](assets/design/Wireframe.rp) and the published project is here [https://zcvky9.axshare.com/?g=4](https://zcvky9.axshare.com/?g=4).

### 1.4 - Mockup
Here, I aim to create a functioning design prototype and create a fully laid out website along with its featured pages, this will allow me to effectively establish the colours, layout and features of the website before having to worry about trial and error when writing the code making the process more straightforward. Overall, this should be the design im going to use when creating the website itself.

With that all complete, I can confidently say there is a concrete mockup created that will allow me to now build a fully fledged website that looks, functions and flows well, the project file is available at [Mockup.rp](assets/design/Mockup.rp) and is also published at [https://9c3qq3.axshare.com/?code=6226de0c00075d1ada792b7f84699b73&g=4](https://9c3qq3.axshare.com/?code=6226de0c00075d1ada792b7f84699b73&g=4).

## 2 - Developement
Within this section, I will aim to create the code and make the website functional similar to the mockup created previously, before I begin making the layouts and adding components I want to start by creating a framework of sorts, rather than using Bootstrap I would like to create my own variables and properties that contain colours, font styles and sizing as I have done in the mockup. 

### 2.1 - Code layout
Utilising Bootstrap's CSS and JS frameworks I can make styles such as buttons be easy to implement, I can also customise each part of the element to fit the style which is needed to get the same look as seen in the mockup. Other styles that are not stored within `bootstrap.css` are instead going to be stored in `base.css`, this is where the Navigation bar, Footer and colours will be stored to persist on each page.

Here is an outline of what this looks like in the file structure;

`page.html` has the following files associated, `base.css`, `page.css`, `script.js` and optionally `page.js`, I will only reference the necessary files within the specific pages, this will reduce the amount of code that is loaded when its not required, which helps to speed up loading. Another reason for using this type of layout also allows me to create more fragmented and stable code meaning parts of code are less likely to break other parts. 
> Note, the "page" in the file names is a placeholder, which is replaced by the names as specified in the sitemap file, such as `index.css` or `jobs.js`.

### 2.2 - Important coding decisions made

As I have outlined earlier, My footer and navigation bar elements are static through each page however, im using the `script.js` to determine the current page the user is on and highlight the matching button to keep the user informed of what part of the website they are on right now.

## 3 - Testing
### 3.1 - Test plan

### 3.2 - Bugs

### 3.3 - Feedback

## 4 - Evaluation
### 4.1 - Final Evaluation

### 4.2 - Potential future improvements

### 4.3 - Reviewing actions taken based on feedback

## References
- Adobe Colors, Available at [https://color.adobe.com](https://color.adobe.com/)
- Draw.io, Available at [https://draw.io/](https://draw.io/)
- Freepik, Available at [https://freepik.com/](https://freepik.com/)