# storybook

## Deployment (Heroku)

### Create a Git Repo

Once you're ready to deploy, start by making sure your project is a git repository. If so, proceed to the next section, otherwise run the following commands in your terminal:

```
git init
git add .
git commit -m "Initial commit"
```

### Heroku

Make sure that you have a Heroku app created for this project. If so, proceed to the next section, otherwise run the following command in your terminal:

```
heroku create
```

Optionally add an argument for your application's name after `create`, e.g.

```
heroku myAwesomeApp
```

### Deploying

#### Option 1

Use the deploy script inside of the outer `package.json`

After confirming that you have an up to date git repository and a Heroku app created, run the following command to deploy:

```
yarn deploy
```

If all previous steps were followed correctly, your application should be deployed to Heroku!

#### Option 2

Manually deploy 

After confirming that you have an up to date git repository and a Heroku app created, complete the following:

1. Build the React app for production by running the following command:

```
yarn build
```

2. Add and commit all changes to git

3. Push to Heroku

If all previous steps were followed correctly, your application should be deployed to Heroku!
