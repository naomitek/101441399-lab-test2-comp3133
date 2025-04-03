
# 101441399-lab-test2-comp3133: SpaceX Launch Explorer

This Angular application displays and filters SpaceX launch data using the SpaceX API.

## Features

- View a list of all SpaceX launches
- Filter missions by launch year
- View detailed information about each mission
- Integration with Angular Material for UI components

## Live Demo

[View the deployed application](https://your-deployment-url-here.com)

## Installation

1. Clone the repository:
```
git clone https://github.com/your-username/101441399-lab-test2-comp3133.git
cd 101441399-lab-test2-comp3133
```

2. Install dependencies:
```
npm install
```

## Development server

To start a local development server, run:
```
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Project Structure

- **Components**
  - `missionlist`: Displays a list of all SpaceX launches
  - `missionfilter`: Allows filtering missions by launch year
  - `missiondetails`: Shows detailed information about a selected mission

- **Services**
  - `spacex.service.ts`: Handles API calls to the SpaceX API

- **Models**
  - `mission.ts`: Interface defining the structure of mission data

## API Reference

This application uses the SpaceX REST API to fetch launch data:
- SpaceX Launches API: https://api.spacexdata.com/v3/launches
- SpaceX Launch Filter API: https://api.spacexdata.com/v3/launches?launch_year=[YEAR]
- SpaceX Mission Details API: https://api.spacexdata.com/v3/launches/[FLIGHT_NUMBER]

## Building for production

To build the project run:
```
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the Karma test runner, use the following command:
```
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:
```
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Technologies Used

- Angular 19.2.6
- Angular Material
- TypeScript
- SpaceX API
- Deployed on [your-hosting-platform]

## Student Information

- **Student ID**: 101441399
- **Course**: COMP3133
- **Lab Test**: 2

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference page](https://angular.io/cli).
