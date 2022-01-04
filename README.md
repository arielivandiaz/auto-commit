# Auto Commit/Push

Make a git commit with a simple command and control the repository version.


[![Laguna](https://laguna.com.ar/img/label.png)](https://www.laguna.com.ar/)


## Files 

The version number will be taken and updated from:

> `version/version.json`
> `package.json`

## Run

Version syntax : 00.11.22 = [mayor version].[version].[revision]

Update revision
```sh
 sh autocommit.sh
```
Update version
```sh
 sh autocommit.sh v
```

Update mayor version
```sh
 sh autocommit.sh mv
```




#### Steps
1. Use node to open the version.json file and update the revision.
2. See the status of the repository.
3. Add all files to the repository.
4. Make a commit by passing the version.revision number as a message.
5. Push the files to the remote repository in the master branch.

#### Requeriments

  - Node CLI
  - JQ


#### Install JQ

Install JQ on Windows with Choco
```sh
 choco install jq
```
Install JQ on Linux/Ubuntu
```sh
 sudo apt-get install jq
```



**Autor**
[Ariel Ivan Diaz](https://www.arielivandiaz.com/)
