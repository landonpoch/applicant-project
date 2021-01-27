# ApplicantProject
Notes / excuses :)
 - The extra requirement I've opted for is code coverage (included in instructions)
 - Got a late start Sunday evening so didn't invest more time to improve (very minimalist)
 - Spent 4 hours total
 - I used a project starter that basically helps bootstrap
 - Unit tests, end to end tests, code coverage, live code reloading are all included in the starter template and can be expanded on
 - I looked at Laravel briefly and got it running on my machine but opted to stick with something more familiar due to time constraints

[Video link](https://drive.google.com/file/d/1ZbfIe5G6eG1Ph0KcpLdF2r-tnkC5bQHq/view?usp=sharing)

Instructions:
 - Clone this repo
 - Install node (I was using v14.8.0)
 - Make sure you have the angular cli tools installed `npm install -g @angular/cli`
 - install all dependencies `npm install`
 - run backend api: `npm run api`
 - run frontend: `npm run start`
 - test backend api: `npm run test-server`
 - test frontend: `npm run test-client`
 - integration tests: `npm run integration` (note: this requires the backend to be running first)

## A note about project resubmission:
The project was initially submitted as part of a previous interviewing process.  Since then, some of the requirements around testing and time constraints had changed.  I added additional test coverage server and client side to conform to the latest requirements.

There should now be 100% code coverage on all custom code.  Other code files are framework configurations and 3rd party libraries.  As a best practice, 3rd party libraries are generally not tested.  Instructions regarding testing have been updated.  Link to video demo has not been updated since the initial submission but should still be applicable.