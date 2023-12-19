function useData() {

    // A cinema movie db

    const filmDb = {
        napoleon: {
        title: 'Napoleon', 
        img: require('../Assets/napoleon.webp'), 
        alt: 'cinema poster for Napoleon',
        type: 'movie',
        age: require('../Assets/15-film-classification.png'),
        poster: require('../Assets/napoleon-poster.webp'),
        id: '01'
        },
        theHungerGames: {
            title: 'The Hunger Games: The Ballard Of Songbirds And Snakes',
            img: require('../Assets/the-hunger-games-hero.webp'), alt: 'cinema poster for The The Hunger Games: The Ballard Of Songbirds And Snakes',
            type: 'movie',
            age: require('../Assets/12a-film-classification.png'),
            poster: require('../Assets/the-hunger-games-poster.webp'),
            id: '02'
            },
        renaissance: {
            title: 'Renaissance: A Film By Beyonce', 
            img: require('../Assets/renaissance-a-film-by-beyonce-hero.webp'), 
            alt: 'cinema poster for Renaissance: A Film By Beyonce',
            type: 'movie',
            age: require('../Assets/15-film-classification.png'),
            poster: require('../Assets/RENAISSANCE_poster.webp'),
            id: '03'
            }
        }

    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    const todaysDay = new Date().getDay();


    const locationShowings = [
    {
        location: `London - Westfield's`,
        schedual: {
            today: {
                date: daysOfWeek[todaysDay],
                movies: [
                    {...filmDb.napoleon,
                        time_screen: [
                            {time: '12:00', screen: '01'},
                            {time: '14:00', screen: '12'}
                        ]
                    },
                    {...filmDb.theHungerGames,
                        time_screen: [
                            {time: '12:00', screen: '05'},
                            {time: '14:00', screen: '11'}
                        ]
                    },
                    {...filmDb.renaissance,
                        time_screen: [
                            {time: '18:00', screen: '05'},
                            {time: '14:00', screen: '11'}
                        ]
                    }
                ]
            },
            tomorrow: {
                date: daysOfWeek[todaysDay + 1],
                movies: [
                    {...filmDb.napoleon,
                        time_screen: [
                            {time: '12:00', screen: '11'},
                            {time: '14:00', screen: '13'}
                        ]
                    },
                    {...filmDb.theHungerGames,
                        time_screen: [
                            {time: '12:00', screen: '05'},
                            {time: '14:00', screen: '11'}
                        ]
                    },
                    {...filmDb.renaissance,
                        time_screen: [
                            {time: '18:00', screen: '05'},
                            {time: '14:00', screen: '11'}
                        ]
                    }
                ]
            },
            nextDay1: {
                date: daysOfWeek[todaysDay + 2],
                movies: [
                    {...filmDb.napoleon,
                        time_screen: [
                            {time: '12:00', screen: '11'},
                            {time: '14:00', screen: '13'}
                        ]
                    },
                    {...filmDb.theHungerGames,
                        time_screen: [
                            {time: '12:00', screen: '05'},
                            {time: '14:00', screen: '11'}
                        ]
                    },
                    {...filmDb.renaissance,
                        time_screen: [
                            {time: '18:00', screen: '05'},
                            {time: '14:00', screen: '11'}
                        ]
                    }
                ]
            }
        }
    }
    ]


    return { filmDb, locationShowings };
}

export default useData;