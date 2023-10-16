import requests
import json
from decouple import config

# API key stored in .env file
api_key = config('WEATHER_API_KEY') 

# List of city IDs from Read_data.py
city_ids = ['1248991', '1850147', '2644210', '2988507', '2147714', '4930956', '1796236', '3143244']  

# API request
url = f"http://api.openweathermap.org/data/2.5/group?id={','.join(map(str, city_ids))}&units=metric&appid={api_key}"

# GET request to the OpenWeatherMap API
response = requests.get(url)

if response.status_code == 200:
    weather_data = response.json()
    
    with open('weather.json', 'w') as json_file:
        json.dump(weather_data, json_file)
  
else:
    print(f"Failed to retrieve weather data. Status code: {response.status_code}")
