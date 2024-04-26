# Weather App

This is a simple weather application built using React.js that allows users to check the weather conditions of a specific location.

## Features

- **Search Functionality**: Users can search for the weather of any location by entering its name in the search bar.
- **Current Weather Information**: Provides information about the current temperature, weather condition, humidity, pressure, wind speed, and sunset time.
- **Weather Icons**: Utilizes weather icons to represent different weather conditions.
- **Responsive Design**: The app is designed to be responsive and works well on various devices.

## Technologies Used

- **React.js**: A JavaScript library for building user interfaces.
- **OpenWeatherMap API**: Used to fetch weather data based on location.
- **React Router**: Used for routing within the application.
- **CSS**: Styled components and custom CSS for styling.

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone <repository_url>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Get an API key from [OpenWeatherMap](https://openweathermap.org/) and replace `YOUR_API_KEY` in `Weather.js` file with your API key.

4. Start the development server:

   ```bash
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000` to view the application.

## Folder Structure

```
weather-app/
│
├── src/
│   ├── components/
│   │   ├── basics/
│   │   │   ├── Info.js
│   │   │   ├── style.css
│   │   │   └── Weather.js
│   │   └── App.js
│   │
│   ├── App.css
│   ├── index.js
│   └── ...
│
├── public/
│   ├── index.html
│   └── ...
│
├── README.md
└── ...
```

## Credits

- **Weather Icons**: [Weather Icons](https://erikflowers.github.io/weather-icons/)
