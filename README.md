# Welcome to Discovr, a clone of Flickr

## This project was developed utilizing:

* Backend: Python/Flask
* Frontend: React/Redux/JS/HTML/CSS
* DB: SQLAlchemy
* Hosted on Heroku
* [Live Site](https://discov-r.herokuapp.com/)

## How to run Discovr Locally:

* Clone the repository in your terminal: git clone https://github.com/matt-fong/Flickr-Project.git
* cd into Flickr-Project folder and run pipenv install
* Open two terminal paths for both Flickr-Project and react-app.
* Under Flickr-Project run pipenv shell `` then flask run, for react-app run npm install```
* Create a .env file under the root of the backend folder with the following contents:
```
REACT_APP_BASE_URL=http://localhost:5000
```
* In the terminal under Flickr-Project, migrate and seed files as follows:
```
flask db upgrade
flask seed all
```
* Now, run flask run under Flickr-Project and npm start under react-app

### Your local host should be running with full functionality now!

## Features

### Log in or Sign up as a new user
![login](https://user-images.githubusercontent.com/103220965/199836600-33b66758-fc6a-42c7-ab64-a005382713c0.PNG)
* You can use a newly created account to log in.
* You can use a demo user to log in if you do not have an account.

![signup](https://user-images.githubusercontent.com/103220965/199836619-cc86b121-cdcb-450a-93f3-78326206a1be.PNG)
* You can create a new account and have access to all of Discovr's functionality.

### Explore Page
![explorepage](https://user-images.githubusercontent.com/103220965/199837394-32e38585-51e9-499b-9ac4-e34dd708df5f.PNG)
* The explore page allows you to view all the images on the site.

### Image Details Page
![imagedetailpage](https://user-images.githubusercontent.com/103220965/199837492-28243a25-ac45-49d2-ac4c-959b979c091c.PNG)
* The image details page allows you to view the details of the image, including the title, descriptions, and comments.
* Owner of the image is allowed to edit and delete image from the site.

### Image
![upload image](https://user-images.githubusercontent.com/103220965/199837663-11b0e137-2177-438f-a802-a5246dc95ddf.PNG)
* Logged in users are able to upload an image to the website, along with a title and description of the image.

### Comment 
![comment section](https://user-images.githubusercontent.com/103220965/199837765-5e2e5b8f-fa29-4e23-9a78-d976b5b1e170.PNG)
* Logged in users are able to create, update, and delete comments on images.
* Comments are available to view whether a user is signed in or logged out.











