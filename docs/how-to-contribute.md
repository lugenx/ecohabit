# How to contribute

First of all, we really appreciate your intention to contribute to this project!

To contribute, you need a GitHub account and Git installed on your computer. Creating a GitHub account and installing Git is not the issue of this guide. 

This guide assumes that you are already accustomed to elementary Git/GitHub usage.

## Here are the steps to contribute to this project

### 1. Fork this repository

The most common contribution path starts with forking the project which can be easily done with a web browser of your choice.

Visit the [ecohabit repo page](https://github.com/lugenx/ecohabit") on your browser. Next, find the `fork` button somewhere around the top right of the page and press this button. 

-- IMAGE OF THE FORK BUTTON

Once you have pressed the button, GitHub will redirect you to a page that looks like this:

-- Image of page after fork.

Press the `Create fork` button to fork the repository. It should redirect you into your own copy of the repo.

By doing this, you are creating a copy of the ecohabit repo into your account. This way, you can make changes to the codebase without affecting the original repo.


### 2. Clone this repository

Now that your GitHub account has an exact copy of the project via forking, it's time to get a copy on your computer. This way, you can make changes to the project.

After forking, it should redirect you into your own copy of the repo. Select the green `Code` button somewhere in the middle of the page. It should be next to the `Add file` button, and it should be the only green button on the entire page, assuming that you're using the default GitHub theme.

-- IMAGE OF CODE BUTTON

Next, copy the link under the HTTPS tab by tapping the button right beside it.

-- IMAGE OF COPYING

---
**NOTE:** If you've linked your GitHub account with an SSH key, please copy the link under the SSH tab instead of the HTTPS tab. In fact, we HIGHLY recommend going the SSH route as it allows us to push to our repositories without having to type our username and password every single time. [Here's](https://www.theodinproject.com/lessons/foundations-setting-up-git#step-2-configure-git-and-github) a guide on how to create and set up an SSH Key. Skip to Step 2.3 and go from there until the end.


---
Another way of getting the link is to copy this format for HTTPS: 

```
https://github.com/{YOUR GITHUB NAME}/ecohabit
```

Or this format for SSH:

```
git@github.com:{YOUR GITHUB NAME}/ecohabit.git
```

---

Now that we have copied the link to our repo, grab your favorite terminal and navigate to the directory where you want to copy the project, then run this command:

```
git clone <THE LINK THAT YOU'VE COPIED>
```

If you receive no errors, Congratulations! You now have a local copy of the project on your computer. But we're not done yet. Before we can make changes to the program, we need to do a few more things first.

### 3. Create a branch

Right after cloning, run this command on your terminal:

```
git checkout -b {YOUR BRANCH NAME}
```
This will create a separate branch of the project, which is basically just another version of the project. This way, we have two versions, or 'branches' of the project: The 'main' branch -  which is the original branch - and the branch that we've created. As much as possible, we must apply our changes to the separate branches instead of the main branch. We can create as many branches as we want.

### 4. Making sure that your copy of the repo is synced

As we are working on our features, the original repo might be updated by other people which will make our fork out of date.

To prevent this, run this command on your terminal:

```
git remote add upstream https://github.com/lugenx/ecohabit
```

This command will kind of let your git know the direction to send your updates.

### 5. Making changes to the project and commiting those changes

Now that we have set everything, you can now run your favorite editor/IDE and start making changes or adding files on the project.

After you are done saving your changes, you may run this command:

```
git status
```

This command will show you the changes that you've made and their current status.

To add all of your changes into the staging area and set their status to "to be commited", run this command:

```
git add .
```


You can check the status of our changes by running the `git status` command again.

Now it's time to commit our changes. To commit your changes, run this command:

```
git commit -m "your message"
```
---
**NOTE:** It is very important to add a message to our commits!


Your message should inform the other contributors about the changes that you've made and why this project needs them.

---

It's time for our last terminal command:

```
git push -u origin {YOUR BRANCH NAME}
```

This will push our changes to the original repo. Now we have to make a Pull Request to make the feature that we've been working on official.

### 6. Submitting your changes for review

It is time to get back to web browser. Navigate to the [ecohabit repo page](https://github.com/lugenx/ecohabit")

Look for a green `Compare & pull request` button. Once you've found it, click the button.

-- IMAGE OF BUTTON

Feel free to write some more info. Once finished, click on the `Create pull request` button.

-- IMAGE OF THAT

Congratulations! You have done your Pull Request. Now we have to wait for the maintainers to review and check your Pull Request. Once the maintainers have deemed your contribution to be worthy, they will accept your Pull Request. Now you have made your very first contribution!


