[![Build Status](https://travis-ci.org/SerhiiBabii/js-band-hw-task-5.svg?branch=master)](https://travis-ci.org/SerhiiBabii/js-band-hw-task-5)

# Homework 5

## Before launching the project it is necessary:

- _Make sure that the **node.js** and **npm** are set. To do this, just write in the terminal._

  > node -v

  If you see a version, for example, "v10.15.1" then everything is okay.

## Instructions for launching the project:

- _Clone this repository_

  > git clone https://github.com/SerhiiBabii/js-band-hw-task-5.git

- _Change directory to project directory and install all dependencies:_

  > cd js-band-hw-task-5

- Run the **"npm i"** command in the terminal. This command will install all the packages that are specified in the **packege.json** file, as well as all their dependencies.

  > npm i

- _Run project:_
  > npm start

## Looking project:

You can see project page:

- The first method. Go to next pages:

  > http://localhost:8080/

- The second method:

  > https://serhiibabii.github.io/js-band-hw-task-5/

## You have few commands in this project:

- _Running ESLint (with airbnb-base style-guide) and show you errors or warbings in project code-style_
  > npm run lint

- _Next command needs for commits._
  > npm run commit

  1. You must use "Conventional Commits" and commiting your commits as **\<type>(\<scope>): \<subject>**.
    * **Type** - indicating the specifics of the changes made to the code base, and end with a description;
    * **Scope** - characterizes a piece of code affected by changes (not necessary);
    * **Subject** - commit description.
  2. You can add long description to project in 4-th step. It's **Body** section;

  2. When you run **npm run commit**, you'll see first question "Select the type of change that you're committing". It's our "Type" field;
  3. Second question: "What is the scope of this change". It's our "Scope" field. You can skip this question;
  4. Third question: "Write a short, imperative tense description of the change". It's our "Subject" field.
  5. Fourth question: "Provide a longer description of the change". It's our "Body" field. You can skip this question.
  6. "Are there any breaking changes?". You can choose yes or no.
  7. "Does this change affect any open issues?". You can choose yes or no.
  
- _Commands for running webpack._
  - running "webpack-dev-server" with hot-reload:
  > npm run watch
    - running "webpack-dev-server" in "development mode":
  > npm run dev
    - running "webpack" in "production mode":
  > npm run build
    
## Structure of project:
  1. Configs:
      - **webpack.config.js** - configuration file for webpack;
      - **jest.config.js** - configuration file for jest;
      - **babel.config.js** - configuration file for babel;
      - **.eslintrc.json** - configuration file for ESLint;
      - **.gitignore** - ignore list for git;
      - **package.json** - main file for project.
  2. Files:
      - **index.js** - entry js-file. He's include addEventListeners on buttons (for ship-form, truck-form and cost-form) and first draw after load(reload) page "Transport list" and "Cost list".
      - **src/style/styles.css** - our styles for project;
      - **src/scripts/costVariables.js** - this file includes all variables to receive "Cost-form" fields and function to save data in local storage;
      - **src/scripts/shipVariables.js** - this file includes all variables to receive "Ship-form" fields and function to save data in local storage;
      - **src/scripts/truckVariables.js** - this file includes all variables to receive "Ship-form" fields and function to save data in local storage;
      - **src/scripts/DrawInDocument.js** - this file draw our lists (transports and cost);
      - **src/scripts/LocalStorage.js** - this file get or set data to LocalStorage;
      - **src/scripts/drawLists/drawListOfCost.js** - template for cost-list;
      - **src/scripts/drawLists/drawListOfShips.js** - template for ship-list;
      - **src/scripts/drawLists/drawListOfTrucks.js** - template for truck-list;
      - **src/scripts/models/Ship.js** - Ship-class for create instance ships;
      - **src/scripts/models/Truck.js** - Truck-class for create instance trucks;
      - **src/scripts/models/Transport.js** - Transport-class for "extends" transport;
      - **src/scripts/models/TransportFactory.js** - Factory pattern for create instance transport (ships or trucks);
      - **tests/Ship.test.js** - file for test "Ship.js".