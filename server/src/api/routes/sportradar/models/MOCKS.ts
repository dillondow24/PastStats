import { DailySchedule } from "./DailySchedule";

export const MOCK_DAILY_SCHEDULE: DailySchedule = {
    "date": "2022-01-05",
    "league": {
        "id": "4353138d-4c22-4396-95d8-5f587d2df25c",
        "name": "NBA",
        "alias": "NBA"
    },
    "games": [{
        "id": "5db1b76d-07a4-4010-b905-4762b00cd3a2",
        "status": "closed",
        "coverage": "full",
        "scheduled": "2022-01-06T00:00:00Z",
        "home_points": 111,
        "away_points": 114,
        "track_on_court": true,
        "sr_id": "sr:match:28809862",
        "reference": "0022100569",
        "time_zones": {
            "venue": "US/Eastern",
            "home": "US/Eastern",
            "away": "US/Central"
        },
        "venue": {
            "id": "f62d5b49-d646-56e9-ba60-a875a00830f8",
            "name": "Capital One Arena",
            "capacity": 20356,
            "address": "601 F Street NW",
            "city": "Washington",
            "state": "DC",
            "zip": "20004",
            "country": "USA",
            "sr_id": "sr:venue:6016"
        },
        "broadcasts": [{
            "network": "SportsNet SW",
            "type": "TV",
            "locale": "Away",
            "channel": "674"
        }, {
            "network": "NBCS-DC",
            "type": "TV",
            "locale": "Home",
            "channel": "642"
        }],
        "home": {
            "name": "Washington Wizards",
            "alias": "WAS",
            "id": "583ec8d4-fb46-11e1-82cb-f4ce4684ea4c",
            "sr_id": "sr:team:3431",
            "reference": "1610612764"
        },
        "away": {
            "name": "Houston Rockets",
            "alias": "HOU",
            "id": "583ecb3a-fb46-11e1-82cb-f4ce4684ea4c",
            "sr_id": "sr:team:3412",
            "reference": "1610612745"
        }
    }, {
        "id": "adfe9676-7878-4f37-abb5-732af1de322c",
        "status": "closed",
        "coverage": "full",
        "scheduled": "2022-01-06T00:00:00Z",
        "home_points": 106,
        "away_points": 116,
        "track_on_court": true,
        "sr_id": "sr:match:28809852",
        "reference": "0022100568",
        "time_zones": {
            "venue": "US/Eastern",
            "home": "US/Eastern",
            "away": "US/Eastern"
        },
        "venue": {
            "id": "aecd8da6-0404-599c-a792-4b33fb084a2a",
            "name": "Amway Center",
            "capacity": 18846,
            "address": "400 W. Church Street",
            "city": "Orlando",
            "state": "FL",
            "zip": "32801",
            "country": "USA",
            "sr_id": "sr:venue:6936"
        },
        "broadcasts": [{
            "network": "BSFL",
            "type": "TV",
            "locale": "Home",
            "channel": "654"
        }, {
            "network": "NBCS-PH",
            "type": "TV",
            "locale": "Away"
        }],
        "home": {
            "name": "Orlando Magic",
            "alias": "ORL",
            "id": "583ed157-fb46-11e1-82cb-f4ce4684ea4c",
            "sr_id": "sr:team:3437",
            "reference": "1610612753"
        },
        "away": {
            "name": "Philadelphia 76ers",
            "alias": "PHI",
            "id": "583ec87d-fb46-11e1-82cb-f4ce4684ea4c",
            "sr_id": "sr:team:3420",
            "reference": "1610612755"
        }
    }, {
        "id": "e02f137c-0b33-44e3-8909-c3a714efe1f3",
        "status": "closed",
        "coverage": "full",
        "scheduled": "2022-01-06T00:00:00Z",
        "home_points": 140,
        "away_points": 111,
        "track_on_court": true,
        "sr_id": "sr:match:28809092",
        "reference": "0022100567",
        "time_zones": {
            "venue": "US/Eastern",
            "home": "US/Eastern",
            "away": "US/Eastern"
        },
        "venue": {
            "id": "a380f011-6e5d-5430-9f37-209e1e8a9b6f",
            "name": "Spectrum Center",
            "capacity": 19077,
            "address": "330 E. Trade Street",
            "city": "Charlotte",
            "state": "NC",
            "zip": "28202",
            "country": "USA",
            "sr_id": "sr:venue:6146"
        },
        "broadcasts": [{
            "network": "BSSE",
            "type": "TV",
            "locale": "Home",
            "channel": "649"
        }, {
            "network": "BSDET",
            "type": "TV",
            "locale": "Away",
            "channel": "663"
        }],
        "home": {
            "name": "Charlotte Hornets",
            "alias": "CHA",
            "id": "583ec97e-fb46-11e1-82cb-f4ce4684ea4c",
            "sr_id": "sr:team:3430",
            "reference": "1610612766"
        },
        "away": {
            "name": "Detroit Pistons",
            "alias": "DET",
            "id": "583ec928-fb46-11e1-82cb-f4ce4684ea4c",
            "sr_id": "sr:team:3424",
            "reference": "1610612765"
        }
    }, {
        "id": "39b01080-9c6a-4f94-9245-d985515c913c",
        "status": "closed",
        "coverage": "full",
        "scheduled": "2022-01-06T00:30:00Z",
        "home_points": 97,
        "away_points": 99,
        "track_on_court": true,
        "sr_id": "sr:match:28808594",
        "reference": "0022100570",
        "time_zones": {
            "venue": "US/Eastern",
            "home": "US/Eastern",
            "away": "US/Central"
        },
        "venue": {
            "id": "7d69b080-91ca-53c9-9302-45c1a72c5549",
            "name": "TD Garden",
            "capacity": 18624,
            "address": "100 Legends Way",
            "city": "Boston",
            "state": "MA",
            "zip": "02114",
            "country": "USA",
            "sr_id": "sr:venue:5940"
        },
        "broadcasts": [{
            "network": "NBCS-BOS",
            "type": "TV",
            "locale": "Home",
            "channel": "630"
        }, {
            "network": "BSSW",
            "type": "TV",
            "locale": "Away",
            "channel": "676"
        }],
        "home": {
            "name": "Boston Celtics",
            "alias": "BOS",
            "id": "583eccfa-fb46-11e1-82cb-f4ce4684ea4c",
            "sr_id": "sr:team:3422",
            "reference": "1610612738"
        },
        "away": {
            "name": "San Antonio Spurs",
            "alias": "SAS",
            "id": "583ecd4f-fb46-11e1-82cb-f4ce4684ea4c",
            "sr_id": "sr:team:3429",
            "reference": "1610612759"
        }
    }, {
        "id": "3e77dc65-7267-4d2f-baa3-77634f65ba47",
        "status": "closed",
        "coverage": "full",
        "scheduled": "2022-01-06T00:30:00Z",
        "home_points": 121,
        "away_points": 129,
        "track_on_court": true,
        "sr_id": "sr:match:28808612",
        "reference": "0022100571",
        "time_zones": {
            "venue": "US/Eastern",
            "home": "US/Eastern",
            "away": "US/Eastern"
        },
        "venue": {
            "id": "24bb478e-eb31-5f8a-8c8d-07f513169ec1",
            "name": "Gainbridge Fieldhouse",
            "capacity": 20000,
            "address": "125 S. Pennsylvania Street",
            "city": "Indianapolis",
            "state": "IN",
            "zip": "46204",
            "country": "USA",
            "sr_id": "sr:venue:6924"
        },
        "broadcasts": [{
            "network": "BSIN",
            "type": "TV",
            "locale": "Home",
            "channel": "671-4"
        }, {
            "network": "YES",
            "type": "TV",
            "locale": "Away",
            "channel": "631"
        }],
        "home": {
            "name": "Indiana Pacers",
            "alias": "IND",
            "id": "583ec7cd-fb46-11e1-82cb-f4ce4684ea4c",
            "sr_id": "sr:team:3419",
            "reference": "1610612754"
        },
        "away": {
            "name": "Brooklyn Nets",
            "alias": "BKN",
            "id": "583ec9d6-fb46-11e1-82cb-f4ce4684ea4c",
            "sr_id": "sr:team:3436",
            "reference": "1610612751"
        }
    }, {
        "id": "fd71fdf2-03d0-4d1e-95b5-02e099fe9929",
        "status": "closed",
        "coverage": "full",
        "scheduled": "2022-01-06T00:30:00Z",
        "home_points": 99,
        "away_points": 82,
        "track_on_court": true,
        "sr_id": "sr:match:28809048",
        "reference": "0022100572",
        "time_zones": {
            "venue": "US/Central",
            "home": "US/Central",
            "away": "US/Pacific"
        },
        "venue": {
            "id": "401ba62f-19b5-5bfc-84d6-021772943311",
            "name": "American Airlines Center",
            "capacity": 19200,
            "address": "2500 Victory Avenue",
            "city": "Dallas",
            "state": "TX",
            "zip": "75219",
            "country": "USA",
            "sr_id": "sr:venue:5988"
        },
        "broadcasts": [{
            "network": "ESPN",
            "type": "TV",
            "locale": "National",
            "channel": "206"
        }, {
            "network": "BSSW",
            "type": "TV",
            "locale": "Home",
            "channel": "676"
        }, {
            "network": "NBCS-BA",
            "type": "TV",
            "locale": "Away",
            "channel": "696"
        }],
        "home": {
            "name": "Dallas Mavericks",
            "alias": "DAL",
            "id": "583ecf50-fb46-11e1-82cb-f4ce4684ea4c",
            "sr_id": "sr:team:3411",
            "reference": "1610612742"
        },
        "away": {
            "name": "Golden State Warriors",
            "alias": "GSW",
            "id": "583ec825-fb46-11e1-82cb-f4ce4684ea4c",
            "sr_id": "sr:team:3428",
            "reference": "1610612744"
        }
    }, {
        "id": "cbc7ebdd-a7e8-4d60-a273-fa95bd9b905c",
        "status": "closed",
        "coverage": "full",
        "scheduled": "2022-01-06T01:00:00Z",
        "home_points": 98,
        "away_points": 90,
        "track_on_court": true,
        "sr_id": "sr:match:28809686",
        "reference": "0022100574",
        "time_zones": {
            "venue": "US/Central",
            "home": "US/Central",
            "away": "US/Central"
        },
        "venue": {
            "id": "7aed802e-3562-5b73-af1b-3859529f9b95",
            "name": "Target Center",
            "capacity": 19356,
            "address": "600 First Avenue North",
            "city": "Minneapolis",
            "state": "MN",
            "zip": "55403",
            "country": "USA",
            "sr_id": "sr:venue:6930"
        },
        "broadcasts": [{
            "network": "BSOK",
            "type": "TV",
            "locale": "Away",
            "channel": "675"
        }, {
            "network": "BSN",
            "type": "TV",
            "locale": "Home",
            "channel": "668"
        }],
        "home": {
            "name": "Minnesota Timberwolves",
            "alias": "MIN",
            "id": "583eca2f-fb46-11e1-82cb-f4ce4684ea4c",
            "sr_id": "sr:team:3426",
            "reference": "1610612750"
        },
        "away": {
            "name": "Oklahoma City Thunder",
            "alias": "OKC",
            "id": "583ecfff-fb46-11e1-82cb-f4ce4684ea4c",
            "sr_id": "sr:team:3418",
            "reference": "1610612760"
        }
    }, {
        "id": "e05b2ba8-1dcc-4eef-acbf-9743cc087c4d",
        "status": "closed",
        "coverage": "full",
        "scheduled": "2022-01-06T01:00:00Z",
        "home_points": 111,
        "away_points": 117,
        "track_on_court": true,
        "sr_id": "sr:match:28808226",
        "reference": "0022100573",
        "time_zones": {
            "venue": "US/Central",
            "home": "US/Central",
            "away": "US/Eastern"
        },
        "venue": {
            "id": "50b75324-b994-46af-a0a7-28db7bea67d0",
            "name": "Fiserv Forum",
            "capacity": 17500,
            "address": "1111 Vel R Phillips Avenue",
            "city": "Milwaukee",
            "state": "WI",
            "zip": "53203",
            "country": "USA",
            "sr_id": "sr:venue:31495"
        },
        "broadcasts": [{
            "network": "BSWI",
            "type": "TV",
            "locale": "Home",
            "channel": "669"
        }, {
            "network": "Sportsnet",
            "type": "TV",
            "locale": "International"
        }],
        "home": {
            "name": "Milwaukee Bucks",
            "alias": "MIL",
            "id": "583ecefd-fb46-11e1-82cb-f4ce4684ea4c",
            "sr_id": "sr:team:3410",
            "reference": "1610612749"
        },
        "away": {
            "name": "Toronto Raptors",
            "alias": "TOR",
            "id": "583ecda6-fb46-11e1-82cb-f4ce4684ea4c",
            "sr_id": "sr:team:3433",
            "reference": "1610612761"
        }
    }, {
        "id": "1f88ed38-5e48-450d-bf8a-8df165db23c7",
        "status": "closed",
        "coverage": "full",
        "scheduled": "2022-01-06T03:00:00Z",
        "home_points": 109,
        "away_points": 115,
        "track_on_court": true,
        "sr_id": "sr:match:28808122",
        "reference": "0022100575",
        "time_zones": {
            "venue": "US/Mountain",
            "home": "US/Mountain",
            "away": "US/Mountain"
        },
        "venue": {
            "id": "1a28ef88-76c9-5bcc-b4ee-51d30ca98f4f",
            "name": "Ball Arena",
            "capacity": 19520,
            "address": "1000 Chopper Circle",
            "city": "Denver",
            "state": "CO",
            "zip": "80204",
            "country": "USA",
            "sr_id": "sr:venue:5976"
        },
        "broadcasts": [{
            "network": "ESPN",
            "type": "TV",
            "locale": "National",
            "channel": "206"
        }, {
            "network": "ALT",
            "type": "TV",
            "locale": "Home",
            "channel": "681"
        }, {
            "network": "SportsNet RM",
            "type": "TV",
            "locale": "Away",
            "channel": "683"
        }],
        "home": {
            "name": "Denver Nuggets",
            "alias": "DEN",
            "id": "583ed102-fb46-11e1-82cb-f4ce4684ea4c",
            "sr_id": "sr:team:3417",
            "reference": "1610612743"
        },
        "away": {
            "name": "Utah Jazz",
            "alias": "UTA",
            "id": "583ece50-fb46-11e1-82cb-f4ce4684ea4c",
            "sr_id": "sr:team:3434",
            "reference": "1610612762"
        }
    }, {
        "id": "48717c30-01ba-468c-b9c5-f40de83483c0",
        "status": "closed",
        "coverage": "full",
        "scheduled": "2022-01-06T03:00:00Z",
        "home_points": 102,
        "away_points": 108,
        "track_on_court": true,
        "sr_id": "sr:match:28808958",
        "reference": "0022100577",
        "time_zones": {
            "venue": "US/Pacific",
            "home": "US/Pacific",
            "away": "US/Eastern"
        },
        "venue": {
            "id": "2e687b9a-c7a7-487c-85b4-43479abc8458",
            "name": "Golden 1 Center",
            "capacity": 17608,
            "address": "500 David J. Stern Walkway",
            "city": "Sacramento",
            "state": "CA",
            "zip": "95814",
            "country": "USA",
            "sr_id": "sr:venue:6942"
        },
        "broadcasts": [{
            "network": "NBCS-CA",
            "type": "TV",
            "locale": "Home",
            "channel": "698"
        }, {
            "network": "BSSE",
            "type": "TV",
            "locale": "Away",
            "channel": "649"
        }],
        "home": {
            "name": "Sacramento Kings",
            "alias": "SAC",
            "id": "583ed0ac-fb46-11e1-82cb-f4ce4684ea4c",
            "sr_id": "sr:team:3413",
            "reference": "1610612758"
        },
        "away": {
            "name": "Atlanta Hawks",
            "alias": "ATL",
            "id": "583ecb8f-fb46-11e1-82cb-f4ce4684ea4c",
            "sr_id": "sr:team:3423",
            "reference": "1610612737"
        }
    }, {
        "id": "90844956-56d0-4883-abf5-1bed0a28064c",
        "status": "closed",
        "coverage": "full",
        "scheduled": "2022-01-06T03:00:00Z",
        "home_points": 109,
        "away_points": 115,
        "track_on_court": true,
        "sr_id": "sr:match:28808112",
        "reference": "0022100576",
        "time_zones": {
            "venue": "US/Pacific",
            "home": "US/Pacific",
            "away": "US/Eastern"
        },
        "venue": {
            "id": "1d1f74a2-7b35-56f0-8cbd-552c51cb2c14",
            "name": "Moda Center",
            "capacity": 19393,
            "address": "1 Center Court",
            "city": "Portland",
            "state": "OR",
            "zip": "97227",
            "country": "USA",
            "sr_id": "sr:venue:6940"
        },
        "broadcasts": [{
            "network": "BSSUN",
            "type": "TV",
            "locale": "Away",
            "channel": "653"
        }, {
            "network": "ROOT Sports NW",
            "type": "TV",
            "locale": "Home",
            "channel": "687"
        }],
        "home": {
            "name": "Portland Trail Blazers",
            "alias": "POR",
            "id": "583ed056-fb46-11e1-82cb-f4ce4684ea4c",
            "sr_id": "sr:team:3414",
            "reference": "1610612757"
        },
        "away": {
            "name": "Miami Heat",
            "alias": "MIA",
            "id": "583ecea6-fb46-11e1-82cb-f4ce4684ea4c",
            "sr_id": "sr:team:3435",
            "reference": "1610612748"
        }
    }]
}