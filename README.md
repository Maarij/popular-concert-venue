# popular-concert-venue
Concert venue site listing shows and ticketing implemented with NextJs

## Technologies Used
* NextJs
  * javascript framework
* Jest
  * authentication states
* React and Cypress Testing Library
  * rendering components and finding elements
* Mock Service Worker
  * mocking api responses
* Cypress
  * browser based testing

## Testing Philosophy
* Huge code base with many developers, want to make sure new changes don't create bugs
* Unit testing
  * one unit of code (function, component, api)
  * isolate by mocking dependencies
* Integration testing
  * Two or more units work together (parent/child components, api and database)
* End to end testing
  * User flow from beginning to end
* What to test - what is important to the sepc that I want an alert if it fails?
* Test behavior, not implementation
* Test redundancy
  * Unit, integration, and e2e tests overlap. Recognize when each is appropriate by thinking about specificity/granularity.
* Think about when it is good to skip tests
  * Skip unit tests when mocking would render pointless
  * Skip unit tests when function is to "glue" for running tested functions
  * Use more granular tests when e2e is overkill
  * More granular tests to aid in diagnosing less granular tests
  * Mimize e2e tests with Cypress due to runtime
* Snapshot vs non snapshot testing (jest)
  * Difficult to diagnose, expected or not?
  * High false negative rate
  * Highly subjective

