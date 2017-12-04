# MidnightPharmacy Website

Development process

Background 

This Pharmacy website was created for a real client based in Nottingham. 

My local chemist Midnight Pharmacy would like to introduce the idea of having a front end informative website to reach out to a vast number of customers from their branches both in Nottingham and Bradford. 

The website will strive to produce a user-friendly front-end pharmacy website so the client is able to advertise his business. The project will be done using HTML5, JAVA and CSS using Visual Studio Code.  

The website will have a series of different pages which will include different content. 

To start the development of the website, I created 7 html pages each being a page of the website. I then from the index.html page created each page to be hyperlinked to each other. 

Problem and issues solved

One major issue which I faced was when I was creating the google map APIs for one the “about us.html” web page. The error which I was getting was “you have included google map APIs multiple times on this page. This may cause unexpected errors”. When this error occurred, one of the google maps would disappear from the HTML page and the other one would only show as an image and not as a JavaScript map. (see image 1). It took me approximately 6 hours to resolve this problem after conducting hours of research. This problem was occurring because I was trying to include two google maps on one html page with two APIs. In order to resolve this, I had to create two separate DIVs. One for each map and then put both the DIVs using a VAR function (see image 2). I was then able to use one API for the VAR which had two separate DIVs. Within the DIVs I had two separate locations being used by using different longitude and latitude numbers. 



Image 1 – API problem (see images tab "api error.jpg)
 

Image 2 – API problem resolved (see images folder "Api problem resolved").
 









References used 

http://guidefaq.com/a.php?qid=33736

https://gist.github.com/zdne/5f8295642af18aff27ec

https://www.elastic.co/guide/en/elasticsearch/reference/current/docs-multi-get.html

https://stackoverflow.com/questions/22766547/multiple-instances-of-google-api-client

https://stackoverflow.com/questions/4074520/how-to-display-multiple-google-maps-per-page-with-api-v3

https://codereview.stackexchange.com/questions/98451/multiple-google-maps-using-v3-api

https://uk.mathworks.com/matlabcentral/answers/232016-how-to-add-two-functions-as-callback-in-uicontrol?requestedDomain=www.mathworks.com



