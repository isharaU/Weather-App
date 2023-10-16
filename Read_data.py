import json

# load data from json file
with open ('cities.json') as json_file:
    data = json.load(json_file)
    
# extract the city codes
city_codes = []

for city in data['List']:
    city_codes.append(city['CityCode'])

print(city_codes)

