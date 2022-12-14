# Dom Manipulation Assignment

1. Webiste Name: [Dev To](https://dev.to/)

### Topics

    - Query Selctory, Inner HTML

### Sample Image

![Sample One](./Pic1.png)

### Tasks

        Target the Top description div and change the DEV Community to <Your_Name> and description to your passion

### Output

![Output](./Pic2.png)

### Code
```JavaScript
document.querySelector(".side-bar h2").innerHTML = "Abin Jacob";
document.querySelector(".side-bar P").innerHTML = "I am a tech enthusiast aiming to become a full stack developer.";
```
![Answer 1](./Answer1.png)

2. Website Name: [Apple](https://support.apple.com/en-in)

### Task

![Store](./Picture_3.png)

### Fetch all the product name and store in an array

### Output

['iPhone', 'Mac', 'iPad', 'Watch', 'AirPods', 'Music', 'TV']

### Code
```JavaScript
let apple_products = Array.from(document.querySelectorAll("span.as-imagegrid-item-title")).map((el) => el.textContent.replace(' Support',''));
console.log(apple_products);
// ['iPhone', 'Mac', 'iPad', 'Watch', 'AirPods', 'Music', 'TV']
```

3. Webiste Name: [Youtube Support](https://support.google.com/youtube/)

### Topics

    - Get Element By Id, Create Element, Create Text Node, Append Child

### Sample Image

![Sample One](./Pic4.png)

### Tasks

     Add another FAQ 'My New FAQ' to the list

### Output

![Output](./Pic5.png)

### Code
```JavaScript
let main_content = document.querySelector(".accordion-homepage");
// Duplicate last child and append it
main_content.appendChild(main_content.firstChild.cloneNode(true));
// Change the h3 without effecting inner html
main_content.lastChild.querySelector("h3").innerHTML = main_content.firstChild.querySelector("h3").innerHTML.replace(main_content.firstChild.querySelector("h3").textContent,"My New FAQ");
```
![Answer 4](./Answer3.png)

4. Webiste Name: [OnePlus](https://www.oneplus.in/support)

### Topics

     Query Selector, InnerText

### Sample Image

![Sample One](./Pic6.png)

### Tasks

      Change the contact number

### Output

![Output](./Pic7.png)

### Code
```JavaScript
document.querySelector('[tm-eventlabel="Phone call"]').innerHTML = document.querySelector('[tm-eventlabel="Phone call"]').innerHTML.replace(/\+\d+.*/,'+91 9896484135');
```
![Answer 4](./Answer4.png)

5. Webiste Name: [Samsung](https://www.samsung.com/in/offer/online/samsung-fest/)

### Topics

       getElementById, createElement, InnerText, append, setAttribute

### Sample Image

![Sample One](./Pic8.png)

### Tasks

     Target the main div of card and change the Button text to Check out


### Output

![Output](./Pic9.png)

### Code
```JavaScript
document.querySelector(".feature-column-carousel__button a").innerHTML = document.querySelector(".feature-column-carousel__button a").innerHTML.replace("Buy now","Check out");
```
![Answer 5](./Answer5.png)

6. Webiste Name: [Adidas](https://www.adidas.co.in/)

### Topics

    -   Query Selector, Event listeners, Changing Styles

### Sample Image

![Sample One](./Pic10.png)



### Tasks

     Target the search box and on hover change thebackground color to red.

### Output
![Output](./Pic11.png)

### Code
```JavaScript
document.querySelector('[placeholder="Search"]').addEventListener('mouseover',(event) => document.querySelector('[placeholder="Search"]').style.backgroundColor = 'red');
```
![Answer 6](./Answer6.png)

7. Webiste Name: [MDN Web Docs](https://developer.mozilla.org/en-US/)

### Topics

       Form, Value, Submit

### Sample Image

![Sample One](./Pic12.png)

### Tasks

     To Search a topic in the MDN Search bar.
     First add a text to search in the search bar and then hit the submit search button to search the docs using DOM

### Output

![Output](./Pic13.png)

### Code
```JavaScript
document.querySelector("#top-nav-search-input").value = "CSS selectors";
document.querySelector('[action="/en-US/search"]').submit();
```
![Answer 7](./Answer7.png)
8. Webiste Name: [Google](https://www.google.com/)

### Topics

       Remove Elements

### Sample Image

![Sample One](./Pic14.png)

### Tasks

     Remove alternate languages from the home page languages listed

### Output

![Output](./Pic15.png)

### Code
```JavaScript
Array.from(document.querySelector("#SIvCob").childNodes).forEach((el,ind) => {if(ind !== 0){el.remove()}});
```
![Answer 8](./Answer8.png)

9. Webiste Name: [Code Wars](https://www.codewars.com/)

### Topics

       Change Font Family, Color of Text.

### Sample Image

![Sample One](./Pic16.png)

### Tasks

    Change the font family of the text to monospace and text color to the logo???s background color.

### Output

![Output](./Pic17.png)

### Code
```JavaScript
let btn = document.querySelector("#start-coding-btn");
// Get Accent Color
let accent_color = window.getComputedStyle( btn ,null)['background-color'];
// Change font family to monospace
document.querySelector("h1").style.fontFamily = 'monospace'; 
```
![Answer 9](./Answer9.png)

10. Webiste Name: [Freecodecamp](https://www.freecodecamp.org/)

### Topics

       querySelector, mouseover, click eventListener,  callback function, style,

### Sample Image

![Sample One](./Pic18.png)

### Tasks

    Target the button and change background colour on mouseover

### Output

![Output](./Pic19.png)

### Code
```JavaScript
document.querySelector(".btn-cta-big").addEventListener("mouseover",()=> document.querySelector(".btn-cta-big .login-btn-text").style.backgroundColor = "red");
```
![Answer 10](./Answer10.png)

11. Webiste Name: [realme](https://www.realme.com/in/)

### Topics

       querySelector,style,background-image

### Sample Image

![Sample One](./Pic20.png)

### Tasks

    change the realme logo to ineuron logo

### Output

![Output](./Pic21.png)

### Code
```JavaScript
// Remove class which displays icon
document.querySelector(".icon.icon-logo.in").classList.remove("icon-logo");
// Add img tag to inner html of span
document.querySelector(".icon.in").innerHTML = `<img src="https://ineuron.ai/images/ineuron-logo.png" alt="ineuron" style="width: 100px;">`;
```
![Answer 11](./Answer11.png)

12. Webiste Name: [Github](https://github.com/)

### Topics

       querySelector,style,background-Color

### Sample Image

![Sample One](./Pic22.png)

### Tasks

     change the background colour of the button to blue.

### Output

![Output](./Pic23.png)

### Code
```JavaScript
document.querySelector(".btn-primary.btn").style.backgroundColor = "hsl(240, 68%, 48%)";
```
![Answer 12](./Answer12.png)

13. Webiste Name: [Hackerrank](https://www.hackerrank.com/)

### Topics

       querySelector,innerHtml

### Sample Image

![Sample One](./Pic24.png)

### Tasks

Target the top description and change ???Matching developers with great companies??? to ???JSBOOTCAMP???.

### Output

![Output](./Pic25.png)

### Code
```JavaScript
document.querySelector(".fl-heading-text").innerHTML = "JSBOOTCAMP";
```
![Answer 13](./Answer13.png)

14. Webiste Name: [Asus](https://www.asus.com/in/)

### Topics

      querySelector,style,font-size

### Sample Image

![Sample One](./Pic26.png)

### Tasks

       change the fontsize of ???Hot Deals??? to 80px

### Output

![Output](./Pic27.png)

### Code
```JavaScript
document.querySelector(".HotDealsAll__Heading__2fIbe").style.fontSize = "80px";
```
![Answer 14](./Answer14.png)


15. Webiste Name: [Dell](https://www.dell.com/en-in/shop/deals/laptop-deals?gacd=10415953-9016-5761040-285981356-0&dgc=ST&gclid=Cj0KCQjwguGYBhDRARIsAHgRm4-XUDMhhVNyHXb3s1gY4ZBzORr_d9Se-buhJwy7asyUe7YdqEA11eEaAt6UEALw_wcB&gclsrc=aw.ds&nclid=BxjBlpBQsX6pjSHh-L8YYSU77EpfXRkG1AGMB5Wbeu386ykspfrPDnfx_DdFau20)

### Topics

      querySelector,style.textAlign

### Sample Image

![Sample One](./Pic28.png)

### Tasks

       Convert the text ???G15 Gaming Laptop??? from left to right

### Output

![Output](./Pic29.png)

### Code
```JavaScript
Array.from(document.querySelectorAll(".ps-title")).forEach((el) => {if (el.textContent.toLowerCase().includes("g15"))el.style.textAlign = "right"});
```
![Answer 15](./Answer15.png)

16. Webiste Name: [Vercel](https://vercel.com/)

### Topics

     querySelector,innerHTMl

### Sample Image

![Sample One](./Pic30.png)

### Tasks

      change the heading ???Start with the developer??? to ???Start with Scratch???

### Output

![Output](./Pic31.png)

### Code
```JavaScript
document.querySelector(".section-title_title__VEDfK").textContent = "Start with Scratch";
```
![Answer 16](./Answer16.png)

17. Webiste Name: [Sony](https://www.sony.co.in/)

### Topics

    querySelector,innerHTMl

### Sample Image

![Sample One](./Pic33.png)

### Tasks

     change the button text To current Date.

### Output

![Output](./Pic32.png)
### Code
```JavaScript
let now = new Date();
document.querySelector(".btn-container").innerHTML = now;
```
![Answer 17](./Answer17.png)

18. Webiste Name: [Philips](https://www.philips.co.in/)

### Topics

     querySelector,style,backgroundcolor

### Sample Image

![Sample One](./Pic34.png)

### Tasks

    change the background colour blue to orange

### Output

![Output](./Pic35.png)

### Code
```JavaScript
document.querySelector("footer").style.background = "hsl(39, 100%, 50%)";
```
![Answer 18](./Answer18.png)

19. Webiste Name: [Canon](https://in.canon/)

### Topics

          querySelector,src

### Sample Image

![Sample One](./Pic36.png)

### Tasks

    extract the canon logo

### Output

![Output](./Pic37.png)

### Code
```JavaScript
console.log(document.querySelector(".navbar-brand img").src);
// 'https://in.canon/assets/brand/logo-300-002e45a4aec98fd92899838da9d5560f.png'
```

20. Webiste Name: [Oppo](https://www.oppo.com/in/)

### Topics

          querySelector,style,color

### Sample Image

![Sample One](./Pic38.png)

### Tasks

      Change the description colour black to orange

### Output

![Output](./Pic39.png)

### Code
```JavaScript
document.querySelector(".desc").style.color = "orange";
```
![Answer 20](./Answer20.png)
