# Auto Commit

Make a git commit with a simple command and control the repository version.


[![Laguna](https://laguna.com.ar/img/label.png)](https://www.laguna.com.ar/)


## Run

Just open the command line and type:

```sh
 sh autocommit.sh
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
