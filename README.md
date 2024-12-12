# Auram Project Structure

This repository contains a Next.js project with a well-organized structure to ensure scalability and maintainability. Below is an overview of the project structure and its purpose.

---

## Project Files and Directories

```plaintext
README.md               - Project documentation
next.config.ts          - Next.js configuration
package-lock.json       - Auto-generated dependency lock file
postcss.config.mjs      - PostCSS configuration for styling
src/                    - Application source code
tsconfig.json           - TypeScript configuration
next-env.d.ts           - Next.js environment type declarations
node_modules/           - Installed dependencies
package.json            - Project dependencies and scripts
public/                 - Static assets (images, icons, etc.)
tailwind.config.ts      - Tailwind CSS configuration
```

---

## `src/` Directory

The `src/` directory contains the core application logic, separated into feature-specific folders for better organization:

### 1. **app/**

- Contains all the application pages.
- Dynamic routes and static pages are organized based on their functionalities.
- Example pages:
  - `product-details/[id].tsx` - Product detail page.
  - `collections/page.tsx` - Collections listing page.

### 2. **components/**

- Holds all reusable components.
- Naming convention: `<component_name>.component.tsx`
- Example:
  - `header.component.tsx` - Header UI component.
  - `footer.component.tsx` - Footer UI component.

### 3. **constants/**

- Stores all constant values used across the application.
- Examples:
  - Fixed configuration values.

### 4. **hooks/**

- Contains custom React hooks to manage application logic.
- Examples:
  - `useAuthToken.ts` - Access user token.
  - `useCartService.ts` - Manage cart functionality.

### 5. **models/**

- Defines TypeScript interfaces and types for request/response data and query parameters.
- Naming convention: `<filename>.model.ts`
- Examples:
  - `item.model.ts` - Models for product-related data.
  - `user.model.ts` - Models for user-related data.

### 6. **services/**

- Handles API calls and external data fetching logic.
- Encapsulates communication with backend services.
- Contains all the API end points in `queryUrl.ts` file.

### 7. **utils/**

- Contains utility functions for general-purpose operations.
- Examples:
  - `dateFormatter.ts` - Format date strings.
  - `debounce.ts` - Debounce utility for optimizing performance.

### 8. **validators/**

- Holds validation schemas built using `zod`.
- Examples:
  - `product.validator.ts` - Validation for product data.
  - `user.validator.ts` - Validation for user input data.

---

## Development Guide

### Prerequisites

- Node.js and npm installed.
- Familiarity with Next.js, TypeScript, and Tailwind CSS.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sagarsen2023/auram-next.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
---
