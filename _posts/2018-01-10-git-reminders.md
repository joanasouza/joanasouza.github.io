---
layout: post
title: git reminders
categories:
  - notes
---

## summary

* [check which remote repository is my master](#check-remote)
* [add a remote repository to a locally repo](#add-remote)
* [changing a url to a existing remote repo](#change-url-remote)
* [no such remote '[name]' error](#no-such-remote)
* [remove a file from 'git add .'](#remove-file-git-add)
* [delete a local branch](#delete-local-branch)
* [rename a local branch while pointed to any branch](#rename-local-branch)
* [rename current local branch](#rename-current-branch)
* [orphan branch](#orphan-branch)


## <a id='check-remote'></a> check which remote repository is my master

```
git remote -v
```
## <a id='add-remote'></a> add a remote repository to a locally repo

```
git remote add <your_remote_name> <your_repo_url> 
git fetch <your_remote_name>
git pull <your_remote_name> master
```
## <a id='change-url-remote'></a> changing a url to a existing remote repo

```
 git remote set-url <your_remote_name> <your_new__repo_url>
```
## <a id='no-such-remote'></a> no such remote '[name]' error

this may happen when trying to update a remote repo url, in this case verify if you copied the right url or  typied the right remote name.

## <a id='remove-file-git-add'></a> remove a file from 'git add .'
```
git rm --cached <your_file>
```
i used this to remove a file when i accidentaly added to the work-tree with `git add .` command.

## <a id='delete-local-branch'></a> delete a local branch
 ```
 git branch -d <your_branch>
 ```

## <a id='rename-local-branch'></a> rename a local branch while pointed to any branch

 ```
 git branch -m <your_old_branch_name> <your_new_branch_name>
 ```

## <a id='rename-current-branch'></a> rename current local branch

```
git branch -m <newname>
```