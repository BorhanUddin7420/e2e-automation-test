# Introduction

## Tools
After analyzing the products and various automation tools, we selected [Playwright](https://playwright.dev). which is one of the most popular open‐source functional and regression testing tools and very well suited for this product requirments. We went through the application, understood its functionality and work‐flow, and prepared our automation plan.

We developed sufficient sets of scripts to be simply run whenever there was a change in the application. 

 - **Playwright:**
 - **Typescript:**
 - **Node**
 
# Getting Started

**TODO:** Guide users through getting your code up and running on their own system. In this section you can talk about:

1. Installation process
2. Software dependencies
3. Latest releases
4. API references

## Browser Configuration

#### For now, This project has configured with one browser, we can easily create more browser later on.

1. Chrome
2. Firefox
3. MS Edge
4. Safari(Webkit)

![browser, support!](https://playwright.dev/java/img/logos/Browsers.png)

## Environments Configuration

#### For now, This project has configured with one environment, we can easily create more development environment

1. test(For Local machine)
2. uat(For Future)
3. prod(For Future)

## Test Case list

#### For now, This project has below test classes

1. registration
2. login


## Build and Test with different environment

 *Below are command to run automation script with different environment:*

    npm run <environment name>
    (ex: npm run env:test)