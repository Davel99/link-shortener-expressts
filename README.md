# link-shortener-expressts
Link shortener app using ExpressJS + Typescript + SQLite + API KEY and SECRET to use the API without User account. Its purpose is to be the easiest app to run for someone who wants a quick way to create shorter links.

# How to run it?
## - - Working directly with NodeJS
This application works with an API_KEY and API_SECRET. Why? Because it needs some security to create/delete links, but I didn't want to build an entire module for user creation when there's going to be just one user.

Make sure you have a .env file with:
```
PORT=port_number
API_KEY=api_key
API_SECRET=api_secret
```
The app is going to read those values. If you don't have them, then default values will be:
```
PORT=5500
API_KEY=test
API_SECRET=test
```

Run:
`npm start`

And that's all!


## - - Working with docker
Note: Write this...

`docker run -p 3000:3000 -e PORT=3000 -e API_KEY=test -e API_SECRET=test my-express-app`

