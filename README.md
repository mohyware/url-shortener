# URL Shortener App
## Overview

A URL shortener website is a service that converts long website addresses into shorter, more manageable links. Users input a lengthy URL, and the website generates a condensed version, making it easier to share and remember.

## Interface

The application interface consists of one page which contains:

* A form to shorten the URL, which takes two inputs:
    - the long version of the url
    - the alias of the url (defaults to a random string)
* A table which contains the previously shortened URLs.
## Application Logic

* When a client tries to access the short URL, they should be redirected to the original long URL.
* If the client accesses a URL which doesn't exist, a `404` error should be displayed.
* There's no required authentication or authorization to generate short URLs.

## Requirements
- Node.js: Ensure Node.js is installed in your environment.
- npm: The Node.js package manager, npm, is used to manage dependencies.

## Installation
To install the necessary dependencies, run:
```bash
npm install
```
This will install the packages listed in package.json.

## Create .env file
Create a .env file in the root of your project to store environment-specific configurations, such as your database connection string and server port. Example:
```bash
MONGODB_URI = mongodb+srv://<username>:<password>@mongodburlhere
PORT= 8080
```
## Usage
To start the application, run:
```bash
node www
```
The application will be accessible at http://localhost:8080.