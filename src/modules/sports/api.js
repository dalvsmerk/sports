const SPORTS_URL = 'https://raw.githubusercontent.com/techmobilt/interview-tests/master/data/sports.json';

export const fetchSports = () => fetch(SPORTS_URL).then((res) => res.json());
