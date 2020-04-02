---
### No longer maintained. Please see [@fiquu/slseed-web-api](https://github.com/fiquu/slseed-web-api).
---


# Fi Slseed API

Serveless Seed API project.

## What's included

- Easy project and service configuration.
- Logical folder structure.
- Simplified authorization handling.
- Simplified database connection management with Mongoose.
- Simplified HTTP response handling.
- Mailing integration with Mailgun.
- Simplified email template rendering.

## Getting started

1. Run `npm i`.
1. Run `npm run setup`, select `stack`, select stage and define stack values.
1. Wait for it to finish...
1. Run `npm run setup`, select `env` and select stage.
1. Run `npm start`.

That's it. Your API should be running wherever it says it's running.

## Deploying

1. Make sure you have the `.env` file for the stage you want to deploy by running `npm run setup`, selecting the stage and checking if the `.env.[stage]` exists.
1. Run `npm run deploy` and select stage.

## Using as seed

1. Create a repo.
1. Add remote as slseed:
    - `git remote add slseed git@github.com:FinalDevStudio/fi-slseed-api.git`
1. Disable pushing:
    - `git remote set-url --push slseed DISABLED`
1. Fetch the latest changes:
    - `git fetch slseed`
1. Merge the master into your branch:
    - `git merge slseed/master`

Repeat the last 2 steps to update your repo with the latest changes from this one:

`git fetch slseed && git merge slseed/master`

And have fun resolving conflicts!
