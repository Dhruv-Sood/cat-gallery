
# Cat Gallery

This project is a dynamic and interactive cat image gallery built with Next.js. It showcases a collection of cat images fetched from The Cat API, demonstrating various features and best practices in modern web development. This project was developed as an assignment for LeadSquared company.

## Features

- **Responsive Design**: Adapts seamlessly to different screen sizes.
- **Infinite Scroll**: Continuously loads new cat images as you scroll, utilizing Intersection Observer API to detect when the user reaches the end of the page.
- **Grid Layout**: Displays cat images in an aesthetically pleasing, responsive grid, leveraging CSS Grid and Tailwind for flexibility.
- **3D Cat Model**: Features an interactive 3D cat model on the homepage.
- **Navigation**: Includes a responsive navbar with smooth scrolling effects for improved user experience.

## Technologies Used

- **Next.js**: For server-side rendering and routing.
- **React**: For building the user interface.
- **Tailwind CSS**: For styling and responsive design.
- **The Cat API**: As the source of cat images.
- **Intersection Observer API**: For implementing infinite scroll.

## Approaches

### Grid Layout

The grid layout uses **CSS Grid** combined with **Tailwind CSS** classes to create a responsive layout that adjusts based on the screen size. On smaller screens, the grid displays 2 images per row, while on larger screens it shows up to 4 images per row. This approach ensures an adaptable design that offers an optimal viewing experience on any device.

```jsx
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  {/* Cat image cards */}
</div>
```

### Infinite Scroll

The infinite scroll functionality leverages the **Intersection Observer API** to load more images as the user scrolls down. This method ensures that additional images are fetched and displayed only when needed, improving performance and reducing unnecessary API calls. The observer monitors the visibility of a `div` element (the loader) at the bottom of the page, triggering the data fetch when it comes into view.

```jsx
useEffect(() => {
  const observer = new IntersectionObserver(handleObserver, {
    root: null,
    rootMargin: "20px",
    threshold: 0,
  });
  if (loader.current) observer.observe(loader.current);
  return () => observer.unobserve(loader.current);
}, [handleObserver]);
```

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/cat-gallery.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

- `src/app`: Contains the main pages of the application.
- `src/components`: Reusable React components.
- `src/components/ui`: UI-specific components like MagicCard.

## Assignment Context

This project was developed as part of an assignment for LeadSquared company. It demonstrates proficiency in modern web development technologies and practices, particularly in building responsive and interactive user interfaces using Next.js and React.

## Contributing

While this is an assignment project, constructive feedback and suggestions are welcome. Please feel free to open an issue or submit a pull request if you have any improvements to suggest.

## License

This project is open-source and available under the [MIT License](LICENSE).

---
