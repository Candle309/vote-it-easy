Meteor.startup( function () {
    if (Polls.find().count() === 0) {
        var polls = [
                { owner: "Cindy",
                    title: "Which language is your favorite?",
                    results: { "Java": 22,
                                "Ruby": 3,
                                "JavaScript": 9,
                                "Python": 28,
                                "C++": 11,
                                "C#": 5},
                    votedBy: [],
                    date: "2017-05-12",
                    tVotes: 78
                },
                { owner: "Eric",
                    title: "How long is your pragramming experience?",
                    results: { "less than 1 year": 3,
                                "1 - 2 years": 14,
                                "2 - 3 years": 8,
                                "3 - 5 years": 12,
                                "5 - 10 years": 2},
                    votedBy: [],
                    date: "2017-09-13",
                    tVotes: 39
                },
                { owner: "Jun",
                    title: "What's your Dota2 favorite hero?",
                    results: { "Shadow Fiend": 12,
                                "Pudge": 14,
                                "Invoker": 8,
                                "Luna": 5,
                                "Rubick": 7,
                                "Crystal Maiden": 3,
                                "Sven": 11,
                                "Axe": 12,
                                "Juggernaut": 18},
                    votedBy: [],
                    date: "2017-10-23",
                    tVotes: 90
                },
                { owner: "Jay",
                    title: "What's your favorite game?",
                    results: { "LoL": 20,
                                "Dota2": 11,
                                "WoW": 3,
                                "Hearthstone": 5,
                                "Diablo": 2,
                                "Starcraft": 1},
                    votedBy: [],
                    date: "2018-01-05",
                    tVotes: 42
                },
                { owner: "Bill",
                    title: "Who's the best Dota2 player?",
                    results: { "Miracle": 20,
                                "Sumail": 4,
                                "Burning": 24,
                                "Paparazzi": 12,
                                "Maybe": 22,
                                "Sccc": 21},
                    votedBy: [],
                    date: "2017-08-14",
                    tVotes: 103
                }
            ];
        for (var i = 0; i < polls.length; i++) {
            Polls.insert(polls[i]);
        }
    }
});