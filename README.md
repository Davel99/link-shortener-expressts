# Link Shortener
### An ExpressJS + Typescript app
Link shortener app using ExpressJS + Typescript + SQLite. It works wthouth having to create user accounts. Security is handled by the owner with API KEY and SECRET. Its purpose is to be the easiest app to run for someone who wants a quick way to create shorter links.

# How to run it?
### - - Working directly with NodeJS
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


### - - Working with docker
First, build your docker image. Let's say we will name it as `my-express-app`
```
docker build -t my-express-app .
```
Then, run your image:
```
docker run -p 3000:3000 -e PORT=3000 -e API_KEY=myKey -e API_SECRET=mySecret my-express-app
```
Set your PORT, API_KEY and API_SECRET as you want with the `-e` command folowwed by `<ENV_VAR>=<ENV_VALUE>`. If you don't need it, remember that these will be de default values:
```
PORT=5500
API_KEY=test
API_SECRET=test
```
That's all!

# How to use it
Note: continue writing this...

