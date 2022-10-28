class Weather {
    constructor(city, country) {
        this.apiKey = '2f0b8811e323871a272a563d8f34bcec';
        this.city = city;
        this.country = country;
    }

    // Fetch weather from API
    async getWeather() {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}}&APPID=${this.apiKey}`);

        const responseData = await response.json();

        return responseData;
    }

    // Change weather location
    changeLocation(city,state) {
        this.city = city;
        this.state = state;
    }
}