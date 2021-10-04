# Sanity Content Studio for storing data in LevelUp

Using this project requires permissions given through [sanity.io](sanity.io) by Lars Erik Røise

## Local setup

### Get the app running

#### Clone the project

Run one of the following commands:

* SSH: `git clone git@github.com:Itera/level-up-sanity.git`; or
* HTTPS: `git clone https://github.com/Itera/level-up-sanity.git`.

Cloning with SSH is the recommended approach due to potential hassles with authentication when using HTTPS.

### Install dependencies

#### Node

Make sure you have Node installed on your computer. If not, we recommend you to [install Node](https://nodejs.org/en/) version 12.18.4 — which is the current LTS version at the time of this writing.

How you choose to install Node is up to you, but we recommend you to also install `nvm` or a similar tool to manage your Node versions — as you might end up working on other frontend applications that need another version of Node.

#### NPM dependencies

Run the following command *inside the root folder of the cloned project* to install all of the NPM dependencies:

`npm install`.

#### Sanity dependency

Install Sanity globally with:

`npm install -g @sanity/cli`

### Run the application locally

Make sure the current directory is in `/level-up-sanity`

Log in to Sanity with:

`sanity login`

Run the following command to start Sanity Studio locally:

`sanity start`.

Sanity Studio will then be run on `http://localhost:3333` by default.

Official documentation of Sanity begins here:
- [Read “getting started” in the docs](https://www.sanity.io/docs/introduction/getting-started?utm_source=readme)
