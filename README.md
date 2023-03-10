# :books: ***An educational project using a simple automation test framework implemented with [Cypress and Cucumber](https://www.browserstack.com/guide/how-to-run-cypress-cucumber-test#:~:text=Cypress%20is%20a%20modern%20front,Behaviour%20Driven%20Development%20(BDD).), using the Page Object Model pattern.***
____
## Short description of the project
**In this project, we write, automate and output a report to the browser of several tests for the [site](https://telnyx.com/)**
____
## Getting started
### Prerequisites
- Node.js 14 or above. You can download it [here](https://nodejs.org/en/download/)
 
    

### Installation  
1. Clone the repo using:  
```sh
git clone https://github.com/vitaliyy-turovskiyy/CypressCucumber-Telnyx.git
```
2. Navigate to folder:
```sh
cd cypresscucumber
```
3. Install npm packages using:
```sh
npm install
```
____
### Usage  
- Open Cypress in the interactive GUI:  
```sh
npx cypress open
```

- Running tests in headless mode:  
```sh
npx cypress run
```
____
## Report

    This project uses a Mochawesome reporter. To merge and generate a report you should use commands:
    $ npm run report:merge
    $ npm run report:generate
____

The test report implemented through GitHub pages can be seen [here](https://vitaliyy-turovskiyy.github.io/CypressCucumber-Telnyx/)

:file_folder: The file with test cases is in the cypress/***support*** folder

