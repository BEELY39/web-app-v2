'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { SunIcon, MoonIcon, CloudSunIcon, CloudMoonIcon, CloudRainIcon, WindIcon, StarIcon, CloudSnowIcon, CloudIcon, SearchIcon, HomeIcon } from 'lucide-react'

interface WeatherData {
  city: string;
  timezone: string;
  current_temperature: number;
  hourly_temperatures: number[];
  hourly_times: Date[];
  hourly_cloudcover: number[];
  hourly_precipitation: number[];
  hourly_windspeed: number[];
  daily_temperatures_max: number[];
  daily_temperatures_min: number[];
  daily_precipitation_sum: number[];
  daily_windspeed_max: number[];
  daily_times: Date[];
}

export default function Component() {
  const [isNight, setIsNight] = useState(false)
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [searchCity, setSearchCity] = useState("")
  const [favorites, setFavorites] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('favorites')
      return saved ? JSON.parse(saved) : []
    }
    return []
  })

  useEffect(() => {
    if (weather) {
      const now = new Date()
      const localTime = new Date(now.toLocaleString('en-US', { timeZone: weather.timezone }))
      const hours = localTime.getHours()
      setIsNight(hours < 6 || hours >= 20)
    }
  }, [weather])

  useEffect(() => {
    fetchWeather(48.8534, 2.3488, "Paris", "Europe/Paris")
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('favorites', JSON.stringify(favorites))
    }
  }, [favorites])

  const fetchWeather = async (lat: number, lon: number, cityName: string, timezone: string) => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,cloudcover,precipitation,windspeed_10m&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,windspeed_10m_max&timezone=${timezone}`)
      const data = await response.json()
      
      const now = new Date()
      const localTime = new Date(now.toLocaleString('en-US', { timeZone: timezone }))
      const currentHour = localTime.getHours()

      const current_temperature = data.hourly.temperature_2m[currentHour]
      const hourly_temperatures = data.hourly.temperature_2m.slice(currentHour, currentHour + 24)
      const hourly_times = data.hourly.time
        .slice(currentHour, currentHour + 24)
        .map((time: string) => new Date(time))
      const hourly_cloudcover = data.hourly.cloudcover.slice(currentHour, currentHour + 24)
      const hourly_precipitation = data.hourly.precipitation.slice(currentHour, currentHour + 24)
      const hourly_windspeed = data.hourly.windspeed_10m.slice(currentHour, currentHour + 24)

      setWeather({
        city: cityName,
        timezone,
        current_temperature,
        hourly_temperatures,
        hourly_times,
        hourly_cloudcover,
        hourly_precipitation,
        hourly_windspeed,
        daily_temperatures_max: data.daily.temperature_2m_max,
        daily_temperatures_min: data.daily.temperature_2m_min,
        daily_precipitation_sum: data.daily.precipitation_sum,
        daily_windspeed_max: data.daily.windspeed_10m_max,
        daily_times: data.daily.time.map((time: string) => new Date(time))
      })
    } catch (err) {
      setError('Erreur lors de la récupération des données météo')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!searchCity.trim()) return

    setLoading(true)
    setError(null)
    try {
      const geoResponse = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchCity)}`)
      const geoData = await geoResponse.json()

      if (geoData && geoData.length > 0) {
        const { lat, lon, display_name } = geoData[0]
        const timezoneResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&timezone=auto`)
        const timezoneData = await timezoneResponse.json()
        const timezone = timezoneData.timezone
        await fetchWeather(parseFloat(lat), parseFloat(lon), display_name.split(',')[0], timezone)
      } else {
        setError('Ville non trouvée')
      }
    } catch (err) {
      setError('Erreur lors de la recherche de la ville')
      console.error(err)
    } finally {
      setLoading(false)
      setSearchCity('')
    }
  }

  const getWeatherIcon = (temp: number, precipitation: number, isNight: boolean) => {
    if (precipitation > 0.1) {
      return temp > 0 ? <CloudRainIcon className="h-6 w-6 text-blue-500" /> : <CloudSnowIcon className="h-6 w-6 text-blue-300" />
    } else {
      if (isNight) {
        return <MoonIcon className="h-6 w-6 text-blue-500" />
      } else {
        return temp > 15 ? <SunIcon className="h-6 w-6 text-yellow-500" /> : <CloudIcon className="h-6 w-6 text-gray-500" />
      }
    }
  }

  const getBackgroundStyle = (hour: number, cloudcover: number) => {
    if (hour >= 6 && hour < 18) {
      return cloudcover > 50 
        ? 'bg-gradient-to-br from-gray-300 via-gray-400 to-gray-500'
        : 'bg-gradient-to-br from-blue-300 via-blue-400 to-blue-500'
    } else {
      return cloudcover > 50
        ? 'bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900'
        : 'bg-gradient-to-br from-indigo-800 via-indigo-900 to-black'
    }
  }

  const formatHour = (date: Date) => {
    return date.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit', timeZone: weather?.timezone })
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('fr-FR', { weekday: 'short', month: 'short', day: 'numeric', timeZone: weather?.timezone })
  }

  const toggleFavorite = (city: string) => {
    setFavorites(prev => 
      prev.includes(city) ? prev.filter(c => c !== city) : [...prev, city]
    )
  }

  return (
    <>
      <div className="absolute top-4 left-4">
        <Link href="/" className="flex items-center text-primary hover:text-primary-dark">
          <HomeIcon className="w-6 h-6 mr-2" />
          <span className="font-medium">Accueil</span>
        </Link>
      </div>
      <div className={`min-h-screen flex items-center justify-center p-4 transition-all duration-1000 ${weather ? getBackgroundStyle(new Date().getHours(), weather.hourly_cloudcover[0]) : ''}`}>
        <div className={`absolute inset-0 transition-colors duration-1000 ${isNight ? 'bg-slate-600' : 'bg-transparent'}`}></div>
        <div className="w-full max-w-md bg-white/80 backdrop-blur-md rounded-lg shadow-lg p-6 relative z-10">
          <h1 className="text-2xl font-bold text-center mb-4">Météo Mondiale</h1>
          <form onSubmit={handleSearch} className="mb-4 flex">
            <input
              type="text"
              value={searchCity}
              onChange={(e) => setSearchCity(e.target.value)}
              placeholder="Rechercher une ville"
              className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button 
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <SearchIcon className="h-5 w-5" />
            </button>
          </form>
          {loading && <p className="text-center">Chargement des données météo...</p>}
          {error && <p className="text-center text-red-500">{error}</p>}
          {weather && (
            <div>
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-semibold">{weather.city}</h2>
                <button onClick={() => toggleFavorite(weather.city)} className="text-yellow-500">
                  <StarIcon className={`h-6 w-6 ${favorites.includes(weather.city) ? 'fill-current' : ''}`} />
                </button>
              </div>
              <p className="text-center mb-4">
                Heure locale : {formatHour(new Date())}
              </p>
              <div className="text-center mb-6">
                <div className="flex justify-center items-center mb-2">
                  {getWeatherIcon(weather.current_temperature, weather.hourly_precipitation[0], isNight)}
                  <span className="text-4xl ml-2">{weather.current_temperature.toFixed(1)}°C</span>
                </div>
                <p className="text-lg">Température actuelle</p>
                <div className="flex justify-center space-x-4 mt-2">
                  <div className="flex items-center">
                    <CloudRainIcon className="h-5 w-5 mr-1 text-blue-500" />
                    <span>{weather.hourly_precipitation[0].toFixed(1)} mm</span>
                  </div>
                  <div className="flex items-center">
                    <WindIcon className="h-5 w-5 mr-1 text-gray-500" />
                    <span>{weather.hourly_windspeed[0].toFixed(1)} km/h</span>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <h3 className="font-semibold mb-2">Prévisions sur 24h</h3>
                <div className="overflow-x-auto">
                  <div className="flex space-x-4 pb-2">
                    {weather.hourly_temperatures.map((temp, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <span className="text-sm">{formatHour(weather.hourly_times[index])}</span>
                        {getWeatherIcon(temp, weather.hourly_precipitation[index], weather.hourly_times[index].getHours() < 6 || weather.hourly_times[index].getHours() >= 20)}
                        <span className="text-sm">{temp.toFixed(1)}°C</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="font-semibold mb-2">Prévisions pour les prochains jours</h3>
                <div className="flex overflow-x-auto pb-4 space-x-4">
                  {weather.daily_temperatures_max.map((temp, index) => (
                    <div key={index} className="flex-shrink-0 w-48 bg-white/50 rounded p-2">
                      <span className="font-medium block text-center">{formatDate(weather.daily_times[index])}</span>
                      <div className="flex items-center justify-center space-x-2 mt-2">
                        {getWeatherIcon((temp + weather.daily_temperatures_min[index]) / 2, weather.daily_precipitation_sum[index], false)}
                        <span>{weather.daily_temperatures_min[index].toFixed(1)}°C - {temp.toFixed(1)}°C</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2 mt-2">
                        <CloudRainIcon className="h-4 w-4 text-blue-500" />
                        <span>{weather.daily_precipitation_sum[index].toFixed(1)}mm</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2 mt-2">
                        <WindIcon className="h-4 w-4 text-gray-500" />
                        <span>{weather.daily_windspeed_max[index].toFixed(1)}km/h</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
        {favorites.length > 0 && (
          <div className="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md p-4">
            <h3 className="font-semibold mb-2">Favoris</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {favorites.map(city => (
                <button 
                  key={city} 
                  onClick={() => {
                    setSearchCity(city)
                    handleSearch({ preventDefault: () => {} } as React.FormEvent)
                  }}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                >
                  {city}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  )
}