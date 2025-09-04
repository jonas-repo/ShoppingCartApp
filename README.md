# CartApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.5.

CartApp is a simple shopping cart application built with Angular. Users can browse a catalog of products, add items to their cart, view cart contents in a modal, and remove products. The cart state is saved in the browser session, so items remain in the cart during the session.

## Features

- Product catalog display
- Add products to the shopping cart
- View cart contents in a modal window
- Remove products from the cart
- Cart total calculation
- Cart state persists in browser session storage
- Uses immutability for state management
- Responsive UI with Bootstrap classes
- Modular Angular components (Catalog, Cart, Navbar)
- Event-driven communication between components

## Technologies and Concepts Used

- **Angular**: Framework for building the application structure and components.
- **Immutability**: State updates (such as cart items) are handled by creating new arrays/objects instead of mutating existing ones. This improves change detection and application stability.
- **Session Storage**: The cart data is stored in the browser's session storage, allowing the cart to persist during the user's session.
- **Bootstrap**: Used for styling and responsive layout.
- **Component Communication**: Angular event emitters are used for parent-child communication (e.g., adding/removing products).
- **TypeScript**: Strongly typed language for safer and more maintainable code.


## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
