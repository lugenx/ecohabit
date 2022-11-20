To contribute you need a github account and git installed but how to create one and get git is not issue of this guide.
This guide assumes you already are accustomed to elementary git/github usage.

Common contribution path starts with forking the project which can easily be done with web browser.

Visit "https://github.com/lugenx/ecohabit" page with your browser, find "fork" button somewhere around right top of page and hit the button.
Now your github account has copy of all the project under "https://github.com/<user-name>/decohabit" web folder.

Time to get copy on our computer. With your favorite terminal navigate to directory where you want to copy the project and run command

"git clone https://github.com/<user-name>/demo"

If no errors, you now have the project on your computer. Right after cloning run

"git checkout -b my_branch"

command to create and switch to your own git branch and next 

"git remote add upstream https://github.com/lugenx/ecohabit"

command will kind of let your git know the direction to send your updates.

Now you can run your favorite editor / ide and start making changes or adding files on project.

Done saving your changes, you may run

"git status"

command to check what your changes are and what are their status now.

"git add ."

command adds all your changes to "to be commited" status. You can check that with running

"git status" command again.

It is very important to add message to our commits!

"git commit -am "your message"

command adds your message to your commits. Your message would be fine if informs what are your changes and why project needs them.

Time for our last terminal command:

"git push -u origin my_branch"

It is time to get back to web browser. Navigate to

"https://github.com/lugenx/ecohabit"

Check the page until you see a green "Compare & pull request" button. Click the button. Write some more info and click "Create pull request" button.

Congratulations! You have done your pull request. Now its all about waiting maintainers to check and maybe accept your request and after that you have your firts contribution done!