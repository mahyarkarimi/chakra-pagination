# Chakra UI Pagination Component

[![npm](https://img.shields.io/npm/v/chakra-pagination.svg)](https://www.npmjs.com/package/chakra-pagination)
[![NPM License](https://img.shields.io/npm/l/all-contributors.svg?style=flat)](https://github.com/mahyarkarimi/chakra-pagination/blob/master/LICENSE)
[![NPM Downloads](https://img.shields.io/npm/dt/chakra-pagination.svg?style=flat)]()  

This is a pagination UI component designed for the popular [Chakra UI](https://github.com/chakra-ui/chakra-ui) component library. The library provides an easy-to-use and customizable pagination component that can be integrated seamlessly into your React applications.

## Features

- Simple and intuitive pagination UI.
- Adaptable design and appearance to match ChakraProvider theme.
- Flexible configuration options.
- Lightweight and optimized for performance.
- Accessibility-friendly design.

## Installation

To install the React Pagination UI Component Library, you can use npm or yarn:

```bash
npm install chakra-pagination
```

or

```bash
yarn add chakra-pagination
```

## Usage

1. Import the `Pagination` component from the library:

```jsx
import { Pagination } from 'chakra-pagination';
```

2. Render the `Pagination` component in your React component, passing the required props:

```jsx
<Pagination
  currentPage={currentPage}
  onPageChange={handlePageChange}
  total={total}
  colorScheme={'cyan'}
  perPage={10}
/>
```

## Props

The `Pagination` component accepts the following props:

1. `currentPage` (number, required): The current active page number.
2. `onPageChange` (function, required): A callback function triggered when the page changes. It receives the new page number as an argument.
3. `total` (number, optional): Total number of items.
4. `perPage` (number, optional): Specifies how many items are shown in each page to determine page numbers. Default: 10.
6. `colorScheme` (string, optional): Set the theme color of the buttons and text of pagination component. Default: `blackAlpha`.

## Examples

Here are a few examples demonstrating how to use the `Pagination` component:

Basic usage:

```jsx
... 
const [currentPage, setCurrentPage] = useState<number>(1);

<Pagination
  currentPage={currentPage}
  totalPages={10}
  onPageChange={setCurrentPage}
/>
...
```

## Screenshots

![alt Pagination](https://raw.githubusercontent.com/mahyarkarimi/chakra-pagination/main/screenshots/shot1.png "Pagination simple usage")

## Contributing

Contributions are welcome! If you'd like to contribute to the Chakra Pagination Component, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make the necessary changes and commit them.
4. Push the changes to your forked repository.
5. Submit a pull request with a detailed description of your changes.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

If you have any questions, feature requests, or issues, please don't hesitate to open an issue on the project repository.
