---
layout: post
title: Lembretes de Git
categories:
  - Computação
tags:
- git
---

Git é um controle de versionamento de documentos. 

Abaixo segue alguns lembretes de coisas que costumo fazer com frequência, mas acabo esquecendo.

P.S: essa lista é viva, capaz de futuramente eu está adicionando alguma coisa

### índice

* [checar qual repositório é a minha master](#check-remote)
* [adicionar um repositório remoto ao meu repositório local](#add-remote)
* [mudar a url para um repositório local já existente](#change-url-remote)
* [no such remote '[name]' error](#no-such-remote)
* [remover um arquivo do 'git add .'](#remove-file-git-add)
* [deletar uma branch local](#delete-local-branch)
* [renomear uma branch local enquanto apontado para uma outra branch](#rename-local-branch)
* [renomear branch local](#rename-current-branch)


### <a id='check-remote'></a> checar qual repositório é a minha master
```
git remote -v
```
### <a id='add-remote'></a> adicionar um repositório remoto ao meu repositório local

```
git remote add <your_remote_name> <your_repo_url> 
git fetch <your_remote_name>
git pull <your_remote_name> master
```
### <a id='change-url-remote'></a> mudar a url para um repositório local já existente

```
 git remote set-url <your_remote_name> <your_new__repo_url>
```
### <a id='no-such-remote'></a> no such remote '[name]' error

isso pode acontecer quando você estiver atualizando aurl de um repositório remoto, nesse caso, verifique se você copiou a url certa ou digitou o nome correto do repositório remoto.

### <a id='remove-file-git-add'></a> remover um arquivo do 'git add .'
```
git rm --cached <your_file>
```
eu usei isso para remover um arquivo que adicionei acidentalmente para a work-tree com o comando `git add .`

### <a id='delete-local-branch'></a> deletar uma branch local
 ```
 git branch -d <your_branch>
 ```

### <a id='rename-local-branch'></a> renomear uma branch local enquanto apontado para uma outra branch

 ```
 git branch -m <your_old_branch_name> <your_new_branch_name>
 ```

### <a id='rename-current-branch'></a> renomear branch local

```
git branch -m <newname>
```