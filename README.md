# tippy

This is a sample implementation of the CSC511 Tip Calculator project.

* [x] User can enter total bill amount
* [x] User can choose between at least three tip tiers (e.g. 15%, 18%, 20%) and see the total tip
* [x] User can see the total with tip

## Summary

This impementation shows how we can use a single component to render the calculator. It uses a controller to accept a query paramter (amount) to allow a user prefill the total bill in the initial input. It also demonstrates how computed properties can be used to dynamically change elements of the page, and showcases a sample helper (format-number) to truncate the tip and bill amount to two decimal places.

![Walkthrough GIF](tippy-sample.gif)

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd tippy`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
