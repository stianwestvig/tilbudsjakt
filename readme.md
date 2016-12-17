# Tilbudsjakt

MVP first:

- url
- hosting (Heroku)
- git repo

- webapp
  - nodejs
  - express
  - handlebars
  - database

- web pages
  - registration form
  - search
  - item view

## If github permission denied

eval "$(ssh-agent -s)"
ssh-add ~/.ssh/github_rsa



## Heroku
heroku logs --app tilbudsjakt
heroku logs --tail --app tilbudsjakt

heroku local web (starts from Procfile)
heroku run bash

Config vars
https://devcenter.heroku.com/articles/getting-started-with-nodejs#define-config-vars


