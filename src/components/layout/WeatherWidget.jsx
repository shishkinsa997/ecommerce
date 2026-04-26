import { useState, useEffect, useRef } from 'react';
import { X, Wind, Droplets, Sunrise, Sunset } from 'lucide-react';
import { cn } from '@lib/utils';
import Button from '@components/ui/Button';

const DEFAULT_CITY = 'Тюмень';
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

const WeatherWidget = ({ onClose }) => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [coordsError, setCoordsError] = useState(null);
  const [weatherError, setWeatherError] = useState(null);
  const [failedCities, setFailedCities] = useState(new Set());

  const abortControllerRef = useRef(null);
  const isMountedRef = useRef(true);
  const inputRef = useRef(null);

  const cancelPreviousRequest = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
  };

  const fetchWeatherByCity = async (cityName) => {
    if (!cityName.trim()) return;

    cancelPreviousRequest();
    abortControllerRef.current = new AbortController();
    const signal = abortControllerRef.current.signal;

    setLoading(true);
    setCoordsError(null);
    setWeatherError(null);

    try {
      const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName.trim()}&limit=1&appid=${API_KEY}`;
      const geoResponse = await fetch(geoUrl, { signal });

      if (!geoResponse.ok) throw new Error('Failed geo response');

      const geoData = await geoResponse.json();

      if (!geoData || geoData.length === 0) {
        throw new Error('City not found');
      }

      if (!isMountedRef.current) return;

      const { lat, lon } = geoData[0];

      const params = new URLSearchParams({
        lat: lat,
        lon: lon,
        appid: API_KEY,
        units: 'metric',
        lang: 'en',
      });
      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?${params}`;

      const weatherResponse = await fetch(weatherUrl, { signal });

      if (!weatherResponse.ok) throw new Error('Failed weather response');

      const weatherData = await weatherResponse.json();

      if (isMountedRef.current) {
        setWeather(weatherData);
        setCity(weatherData.name);
        setLoading(false);
      }
    } catch (error) {
      if (error.name === 'AbortError' || !isMountedRef.current) return;

      if (error.message === 'City not found') {
        setCoordsError(`Failed to get data for the city ${cityName}`);
        setFailedCities(prev => new Set([...prev, cityName.toLowerCase()]));
      } else {
        setWeatherError('Failed to get weather');
        setWeather(null);
      }
    }
  };

  const fetchWeatherByCoords = async (lat, lon) => {
    cancelPreviousRequest();
    abortControllerRef.current = new AbortController();
    const signal = abortControllerRef.current.signal;

    setLoading(true);
    setCoordsError(null);
    setWeatherError(null);

    try {
      const params = new URLSearchParams({
        lat: lat,
        lon: lon,
        appid: API_KEY,
        units: 'metric',
        lang: 'en',
      });
      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?${params}`;

      const response = await fetch(weatherUrl, { signal });

      if (!response.ok) throw new Error('Failed weather response');

      const weatherData = await response.json();

      if (isMountedRef.current) {
        setWeather(weatherData);
        setCity(weatherData.name);
        setLoading(false);
      }
    } catch (error) {
      if (error.name === 'AbortError' || !isMountedRef.current) return;

      fetchWeatherByCity(DEFAULT_CITY);
    }
  };

  useEffect(() => {
    isMountedRef.current = true;
    setLoading(true);

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeatherByCoords(latitude, longitude);
        },
        () => {
          fetchWeatherByCity(DEFAULT_CITY);
        },
        { timeout: 5000, maximumAge: 0 }
      );
    } else {
      fetchWeatherByCity(DEFAULT_CITY);
    }

    return () => {
      isMountedRef.current = false;
      cancelPreviousRequest();
    };
  }, []);

  const handleSearch = () => {
    if (!city.trim() || loading) return;
    fetchWeatherByCity(city.trim());
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setCity(value);

    if (coordsError) {
      setCoordsError(null);
    }

    if (value && failedCities.has(value.toLowerCase())) {
      setCoordsError(`Failed to get data for the city ${value}`);
    }
  };


  const formatTime = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleTimeString('ru-RU').slice(0, -3);
  };

  const skeleton = (
      <>
        <div className="animate-pulse bg-white/20 rounded-2xl m-auto w-30 h-10"></div>
        <div className="animate-pulse bg-white/20 rounded-2xl m-auto w-full h-23"></div>
        <div className="animate-pulse bg-white/20 rounded-2xl w-full h-35 max-lg:h-20"></div>
        <div className="animate-pulse bg-white/20 rounded-xl w-full h-12"></div>
        <div className="animate-pulse bg-white/20 rounded-xl w-full h-12"></div>
      </>
  )

const errorMessage = (message) => {
    return <div className='flex m-auto items-center justify-center text-2xl text-red-300 py-6'>{message}</div>
  }

  return (
    <div className="relative w-full flex flex-col gap-4 bg-linear-to-r from-indigo-500 to-indigo-500/80 p-3 rounded-2xl shadow-md text-white">
      {loading ? skeleton : <>
        {weather ? (
          <div className="flex flex-col text-center gap-4">
            <span className='text-2xl'>{city}</span>
            <div className='flex justify-evenly gap-2'>
              <div className='flex flex-col gap-2'>
                <span className="text-5xl font-light">
                  {Math.round(weather.main.temp)}°C
                </span>
                <span className="text-sm opacity-70">
                  Feels like {Math.round(weather.main.feels_like)}°C
                </span>
              </div>
              <div className="flex flex-col items-center justify-center gap-1 capitalize">
                <img
                  src={`https://openweathermap.org/payload/api/media/file/${weather.weather[0].icon}.png`}
                  alt={weather.weather[0].description}
                  className=" -m-6 min-w-25 aspect-square max-sm:w-18"
                />
                <span className="text-sm line-clamp-2 overflow-hidden h-10 opacity-70">{weather.weather[0].description}</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-left bg-white/10 p-4 rounded-2xl items-center">
              <div className="flex flex-col items-center gap-1 text-sm max-lg:flex-row">
                <span className='flex items-center gap-1'><Wind/>Wind: </span>{weather.wind.speed} m/s
              </div>
              <div className="flex flex-col items-center gap-1 text-sm max-lg:flex-row">
                <span className='flex items-center gap-1'><Droplets/>Humidity: </span>{weather.main.humidity}%
              </div>
              <div className="flex flex-col items-center gap-1 text-sm max-lg:flex-row">
                <span className='flex items-center gap-1'><Sunrise/>Sunrise: </span>{formatTime(weather.sys.sunrise)}
              </div>
              <div className="flex flex-col items-center gap-1 text-sm max-lg:flex-row">
                <span className='flex items-center gap-1'><Sunset/>Sunset: </span>{formatTime(weather.sys.sunset)}
              </div>
            </div>
          </div>
        ) : weatherError ? errorMessage(weatherError) : errorMessage('No data')}

        {weatherError && weather && (errorMessage(weatherError))}

      <div className="flex flex-col gap-3">
          <input
            ref={inputRef}
            type="text"
            className={cn('w-full py-3 px-4 border-white/30 rounded-xl border-2 bg-white/10 outline-0 transition-colors placeholder:text-white/60 focus:border-white/50',
              (coordsError ? 'text-red-300' : ''))}
            value={city}
            onChange={handleInputChange}
            placeholder="Enter city"
            disabled={loading}
          />
          {coordsError && (
            <div className="text-red-300 px-2 text-sm ">
              {coordsError}
            </div>
          )}

        <Button
          className="text-indigo-500 w-full box-border disabled:pointer-events-none disabled:opacity-50"
          variant='secondaryLarge'
          onClick={handleSearch}
          disabled={loading || !city.trim()}
        >
          Show the weather
        </Button>
      </div>
      </>}
      <button className='absolute top-2 right-2 flex items-center justify-center size-6'
        onClick={onClose}><X size={16}></X></button>
    </div>
  );
};

export default WeatherWidget;