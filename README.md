# PluggedIn.cafe

PluggedIn.cafe is a project aimed at helping digital nomads and freelancers find coffee shops with available electric sockets for their devices. It's a global map of cafes that cater to the needs of remote workers, where users can view and contribute information about cafes in their area.

---

## Table of Contents
1. [How It Works](#how-it-works)
2. [Contributing](#contributing)
3. [Installation](#installation)
4. [License](#license)

---

## How It Works

PluggedIn.cafe uses a Google Maps integration to show the locations of coffee shops that provide electric sockets. Users can view the map and find places in their area (or any location) that offer these amenities.

---

## Contributing

We welcome contributions! You can help by adding coffee shops from your area to our database. Follow the steps below to contribute:

### How to Add a Coffee Shop:

1. **Fork** this repository.
2. **Clone** your fork to your local machine:
   ```bash
   git clone https://github.com/your-username/PluggedIn.cafe.git
3. **Open the `coffeeshops.json` file** and add the details of the coffee shop:

   - **Name**: The name of the coffee shop.
   - **Latitude & Longitude**: The geographical coordinates.
   - **Number of Sockets**: How many sockets are available.
   - **Wi-Fi**: Does the shop offer Wi-Fi? (Yes or No)
4. **Commit your changes**:
   ```bash
   git add coffeeshops.json
   git commit -m "Add <Cafe Name> in <City/Country>"
5. **Push** the changes to your forked repository:
   ```bash
    git push origin main
6. **Create** a pull request to merge your changes into the main repository.

---

## Installation

If you'd like to run this project locally, follow these steps:

1. **Clone** this repository.
    ```bash
    git clone https://github.com/clariceism/PluggedIn.cafe.git
2. Open the folder in your code editor and open index.html to view the map.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
