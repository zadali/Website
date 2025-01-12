# Midnight Pharmacy Website

 <u> Background </U>

This Pharmacy website was created for a real client based in Nottingham. 

My local chemist Midnight Pharmacy would like to introduce the idea of having a front end informative website to reach out to a vast number of customers from their branches both in Nottingham and Bradford. 

The website will strive to produce a user-friendly front-end pharmacy website so the client is able to advertise his business. The project will be done using HTML5, JAVA and CSS using Visual Studio Code.  

The website will have a series of different pages which will include different content. 

To start the development of the website, I created 8 html pages each being a page of the website. I then from the index.html page created each page to be hyperlinked to each other. 

1. <strong> <u> Development process </strong> </u>

<strong> Problem and issues solved </strong>

Whilst I have been creating the website, I have come across numerous problems; some harder to fix than others. 

One major issue which I faced was when I was creating the google map APIs for one the “about us.html” web page. The error which I was getting was “you have included google map APIs multiple times on this page. This may cause unexpected errors”. When this error occurred, one of the google maps would disappear from the HTML page and the other one would only show as an image and not as a JavaScript map. (See image 1). It took me approximately 6 hours to resolve this problem after conducting hours of research. This problem was occurring because I was trying to include two google maps on one html page with two APIs. In order to resolve this, I had to create two separate DIVs. One for each map and then put both the DIVs using a VAR function (See image 2). I was then able to use one API for the VAR which had two separate DIVs. Within the DIVs I had two separate locations being used by using different longitude and latitude numbers. 


Image 1 – API problem (see below)
 ![](Validation/apierror.jpeg) 

Image 2 – API problem resolved (see below).
 
![](Validation/apiproblemresolved.png) 


Another error which I had was with the Javascript console error. I had a search form on one of the pages but the console was looking for a search form on all of the HTML pages. 

![](Validation/searchformerror.PNG) 

The way I fixed this was that I added the Javascript into a IF statement so that the webpage triggers the javascript if it finds the search form on the HTML. 

![](Validation/searchformfixed.PNG)


2. <strong>  Storyboard </strong> 

I have included wire-frames of the website in the storyboard folder. I have also attached them below with the hyperlinks. 

<strong> Mobile view </strong>
![](Storyboards/mobile.jpg) 

<strong> Tablet view </strong>
![](Storyboards/tablet.jpg) 

<strong> Desktop view </strong>

<u> Index page </u>
![](Storyboards/page1.jpg) 

<u> Our services page </u>
![](Storyboards/page2.jpg)

<u> Prescriptions page </u>  
![](Storyboards/page3.jpg) 

<u> About us page </u>
![](Storyboards/page4.jpg) 

<u> Contact us page </u>  
![](Storyboards/page5.jpg) 

<u> Leaflets page  </u>
![](Storyboards/page6.jpg) 

<u> Feedback page </u>
![](Storyboards/page7.jpg) 




3.  <strong> <u> User Testing </strong> </u>

Testing questionnaire 
![](Testing/Questionnaire.png)


 <strong>Testing results </strong>

I have also conducted user testing of my website to see what users have to say about my website and if there are any improvments which I can make. I have created a questionaire and gave it to 5 users to test. One of the main improvements which I recieved was that I should consider having a footer on my website. This is because it would give the website a better look and feel of a good professional website. I have taken this on board and have decided to create a footer for my website. 

<strong> Improvement 1 - Footer improvement  </strong>
![](Testing/footer.png)

Another improvement was for the "leaflets page". The download links for the leaflet pdf were just text and an improvment from some of the users were that I should consider using images as downlaod images instead of text. I have therefore changed this and have included images as the download links for the pdf leaflets.

<strong> Improvement 2 - Leaflet improvement </strong>
![](Testing/leaflet_page.png)

Another improvement highlighted by a few of the users was that I should change the name of the final page from "Report" to "feedback". This is because the users didn't identify any prolems with the website so instead thought it would be better to change the name of the webpage to feedback which of course can be on going and feedback is always welcome on board. 

<strong> Improvement 3 - Name change </strong>
![](Testing/Feedback.png)


Response 1  
![](Testing/tester1.jpg)


Response 2  
![](Testing/tester2.jpg)


Response 3  

![](Testing/tester3.jpg)


Response 4  
![](Testing/tester4.jpg)


Response 5  
![](Testing/tester5.jpg)


4. <u> <strong> Changes after user testing opinions </strong> </u>


CHANGE 1 - Footer  

![](Testing/footeradded.PNG)

CHANGE 2 - leaflet  

![](Testing/leafletadded.PNG)

CHANGE 3 - Name change 

![](Testing/feedbackadded.PNG)





5. <strong> <u> HTML Validation </strong> </u>

Below the the screen shots to show that I have 0 errors for my HTML and CSS code.

Index Page 
![](Validation/index.PNG)


About Us  
![](Validation/aboutus.PNG)


Contact Us 
![](Validation/contactus.PNG)


Feedback  
![](Validation/feedback.PNG)


Leaflet Page 
![](Validation/leaflet.PNG)


Medicine Page 
![](Validation/medicine.PNG)


Our Services page 
![](Validation/ourservices.PNG)


Prescription page 
![](Validation/prescription.PNG)


Css code 
![](Validation/css.PNG)







6. <strong> <u> References used </strong> </u>

http://guidefaq.com/a.php?qid=33736

https://gist.github.com/zdne/5f8295642af18aff27ec

https://www.elastic.co/guide/en/elasticsearch/reference/current/docs-multi-get.html

https://stackoverflow.com/questions/22766547/multiple-instances-of-google-api-client

https://stackoverflow.com/questions/4074520/how-to-display-multiple-google-maps-per-page-with-api-v3

https://codereview.stackexchange.com/questions/98451/multiple-google-maps-using-v3-api

https://uk.mathworks.com/matlabcentral/answers/232016-how-to-add-two-functions-as-callback-in-uicontrol?requestedDomain=www.mathworks.com

