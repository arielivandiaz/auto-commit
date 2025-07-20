# Auto Commit/Push

Create a Git commit with a simple command and manage the repository version.

[![Laguna](https://laguna.com.ar/img/label.png)](https://www.laguna.com.ar/)

## Version File

The version number is sourced and updated from:

> `package.json`

## Usage

Version syntax: `major.minor.patch` (e.g., `0.11.22`)

**Update Patch Version**

(Increments the third number, e.g., `2.0.4` -> `2.0.5`)

```sh
# Pushes to the current branch
sh autocommit.sh

# Pushes to a specific branch (e.g., develop)
sh autocommit.sh develop
```

**Update Minor Version**

(Increments the second number and resets patch to 0, e.g., `2.0.5` -> `2.1.0`)

```sh
# Pushes to the current branch
sh autocommit.sh v

# Pushes to a specific branch (e.g., develop)
sh autocommit.sh v develop
```

**Update Major Version**

(Increments the first number and resets minor and patch to 0, e.g., `2.1.0` -> `3.0.0`)

```sh
# Pushes to the current branch
sh autocommit.sh mv

# Pushes to a specific branch (e.g., develop)
sh autocommit.sh mv develop
```

## Workflow

1.  **Update Version**: The Node.js script (`version/updateVersion.js`) reads `package.json`, increments the version number based on the command-line argument, and saves the file.
2.  **Git Status**: Displays the current status of the repository.
3.  **Stage Files**: Adds all modified files to the staging area (`git add -A`).
4.  **Commit**: Creates a commit with a message formatted as `v<new_version>` (e.g., `v2.0.5`).
5.  **Push**: Pushes the commit to the specified branch (or the current branch if none is provided) on the `origin` remote.

## Requirements

*   [Node.js](https://nodejs.org/) and npm

**Author**

[Ariel Ivan Diaz](https://www.arielivandiaz.com/)