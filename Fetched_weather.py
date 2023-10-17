import requests
import json
from decouple import config

# API key stored in .env file
api_key = config('WEATHER_API_KEY') 

# List of city IDs from Read_data.py
city_ids = ['1248991', '1850147', '2644210', '2988507', '2147714', '4930956', '1796236', '3143244']  

url = f"http://api.openweathermap.org/data/2.5/group?id={','.join(map(str, city_ids))}&units=metric&appid={api_key}"
response = requests.get(url)

if response.status_code == 200:
    # Convert the response to JSON format
    weather_data = response.json()
    
    # Extract the specific data you want
    selected_data = {
        "weather": [entry["weather"][0]["description"] for entry in weather_data["list"]],
        "main": [
            {
                "temp": entry["main"]["temp"],
                "dt": entry["dt"],
                "id": entry["id"],
                "name": entry["name"]
            }
            for entry in weather_data["list"]
        ]
    }
    
    with open('weather_data.json', 'w') as json_file:
        json.dump(selected_data, json_file)
  
else:
    print(f"Failed to retrieve weather data. Status code: {response.status_code}")
