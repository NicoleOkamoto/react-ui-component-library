# React UI Component Library

A collection of reusable UI components built using React, Webpack 5, Storybook, and Styled Components.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Development](#development)
- [Storybook](#storybook)
- [Docker](#RunningInDocker)

## Installation

To install the component library, run:

```bash
@nicoleokamoto/react-ui-component-library
```

## Usage

Import the desired components into your project:

```jsx
import {
  Button,
  Label,
  Text,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableFooter,
  Dropdown,
  RadioButton,
  Img,
  HeroImage,
  Card,
} from '@your-username/react-ui-component-library';

const App = () => (
  <div>
    <Button onClick={() => alert('Clicked!')}>Click Me</Button>
    <Label>Sample Label</Label>
    <Text>Sample Text</Text>
    <Table>
      <TableHeader>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Age</TableCell>
        </TableRow>
      </TableHeader>
      <TableRow>
        <TableCell>John Doe</TableCell>
        <TableCell>25</TableCell>
      </TableRow>
      <TableFooter>
        <TableRow>
          <TableCell>Total</TableCell>
          <TableCell>1</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
    <Dropdown options={['Option 1', 'Option 2']} />
    <RadioButton name="sample" value="option1">
      Option 1
    </RadioButton>
    <Img src="path/to/image.jpg" alt="Sample Image" />
    <HeroImage src="path/to/hero.jpg" />
    <Card
      title="Sample Card"
      images={[{ src: 'path/to/image.jpg', text: 'Sample Image' }]}
      ctaText="Click Here"
      ctaLink="https://example.com"
    />
  </div>
);
```

## Components

### Button

A customizable button component.

### Label

A simple label component.

### Text

A basic text component.

### Table

A table component with support for header, rows, cells, and footer.

### TableHeader

A table header component.

### TableRow

A table row component.

### TableCell

A table cell component.

### TableFooter

A table footer component.

### Dropdown

A dropdown component for selecting options.

### RadioButton

A radio button component.

### Img

An image component.

### HeroImage

A hero image component.

### Card

A card component with support for images and call-to-action buttons.

## Development

To set up the development environment, run:

```bash
npm install
npm start
```

This will start the development server and open Storybook.

## Storybook

To view the components in Storybook, run:

```bash
npm run storybook
```

Storybook will start on `http://localhost:6006`.

## RunningInDocker

# Setting up and Running Your React UI Component Library in Docker

This Docker setup will allow you to host your React UI Component Library on localhost:8083.

## Prerequisites

- Docker installed on your machine

## Instructions

### Build Docker Image

1. Clone the repository or navigate to your project directory.
2. Build the Docker image:

```
docker build -t okamoto_nicole_assignment12 .
```

### Run Docker Container

3. Run the Docker container:

```
docker run -p 8083:80 --name okamoto_nicole_assignment12 okamoto_nicole_assignment12
```

### Access the Application

4. Open your web browser and go to [http://localhost:8083](http://localhost:8083) to view your React UI Component Library.
