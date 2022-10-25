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
