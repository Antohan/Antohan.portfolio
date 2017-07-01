/*Создаем массив квартир*/
        var arr = [
            {
                number: 2,
                entrance: 1,
                floor: 1,
                area: 40.3,
                rooms: 1,
                bathroom: 'Совмещенный',
                decor: 'Чистовая',
                price: '1 842 000,00'
            },
            {
                number: 4,
                entrance: 1,
                floor: 1,
                area: 26.2,
                rooms: 1,
                bathroom: 'Совмещенный',
                decor: 'Чистовая',
                price: '1 251 000,00'
            },
            {
                number: 7,
                entrance: 1,
                floor: 2,
                area: 42.9,
                rooms: 1,
                bathroom: 'Раздельный',
                decor: 'Чистовая',
                price: '1 983 000,00'
            },
            {
                number: 10,
                entrance: 1,
                floor: 2,
                area: 40.1,
                rooms: 1,
                bathroom: 'Совмещенный',
                decor: 'Чистовая',
                price: '1 853 000,00'
            },
            {
                number: 13,
                entrance: 1,
                floor: 3,
                area: 42.9,
                rooms: 1,
                bathroom: 'Раздельный',
                decor: 'Чистовая',
                price: '2 005 000,00'
            },
            {
                number: 17,
                entrance: 1,
                floor: 3,
                area: 53.8,
                rooms: 1,
                bathroom: 'Совмещенный',
                decor: 'Чистовая',
                price: '2 404 000,00'
            },
            {
                number: 18,
                entrance: 1,
                floor: 4,
                area: 61,
                rooms: 2,
                bathroom: 'Раздельный',
                decor: 'Чистовая',
                price: '2 632 000,00'
            },
            {
                number: 19,
                entrance: 1,
                floor: 4,
                area: 42.9,
                rooms: 1,
                bathroom: 'Раздельный',
                decor: 'Чистовая',
                price: '2 026 000,00'
            },
            {
                number: 22,
                entrance: 1,
                floor: 4,
                area: 40.1,
                rooms: 1,
                bathroom: 'Совмещенный',
                decor: 'Чистовая',
                price: '1 894 000,00'
            },
            {
                number: 23,
                entrance: 1,
                floor: 4,
                area: 53.8,
                rooms: 1,
                bathroom: 'Совмещенный',
                decor: 'Чистовая',
                price: '2 432 000,00'
            },
            {
                number: 24,
                entrance: 1,
                floor: 5,
                area: 61,
                rooms: 2,
                bathroom: 'Раздельный',
                decor: 'Чистовая',
                price: '2 664 000,00'
            },
            {
                number: 25,
                entrance: 1,
                floor: 5,
                area: 42.9,
                rooms: 1,
                bathroom: 'Раздельный',
                decor: 'Чистовая',
                price: '2 048 000,00'
            },
            {
                number: 28,
                entrance: 1,
                floor: 5,
                area: 40.1,
                rooms: 1,
                bathroom: 'Совмещенный',
                decor: 'Чистовая',
                price: '1 915 000,00'
            },
            {
                number: 31,
                entrance: 1,
                floor: 6,
                area: 42.9,
                rooms: 1,
                bathroom: 'Раздельный',
                decor: 'Чистовая',
                price: '2 070 000,00'
            },
            {
                number: 32,
                entrance: 1,
                floor: 6,
                area: 26.4,
                rooms: 1,
                bathroom: 'Совмещенный',
                decor: 'Чистовая',
                price: '1 328 000,00'
            },
            {
                number: 33,
                entrance: 1,
                floor: 6,
                area: 26.2,
                rooms: 1,
                bathroom: 'Совмещенный',
                decor: 'Чистовая',
                price: '1 318 000,00'
            },
            {
                number: 34,
                entrance: 1,
                floor: 6,
                area: 40.1,
                rooms: 1,
                bathroom: 'Совмещенный',
                decor: 'Чистовая',
                price: '1 935 000,00'
            },
            {
                number: 37,
                entrance: 1,
                floor: 7,
                area: 42.9,
                rooms: 1,
                bathroom: 'Раздельный',
                decor: 'Чистовая',
                price: '2 092 000,00'
            },
            {
                number: 38,
                entrance: 1,
                floor: 7,
                area: 26.4,
                rooms: 1,
                bathroom: 'Совмещенный',
                decor: 'Чистовая',
                price: '1 342 000,00'
            },
            {
                number: 39,
                entrance: 1,
                floor: 7,
                area: 26.2,
                rooms: 1,
                bathroom: 'Совмещенный',
                decor: 'Чистовая',
                price: '1 331 000,00'
            },
            {
                number: 40,
                entrance: 1,
                floor: 7,
                area: 40.1,
                rooms: 1,
                bathroom: 'Совмещенный',
                decor: 'Чистовая',
                price: '1 956 000,00'
            },
            {
                number: 43,
                entrance: 1,
                floor: 8,
                area: 42.9,
                rooms: 1,
                bathroom: 'Раздельный',
                decor: 'Чистовая',
                price: '2 414 000,00'
            },
            {
                number: 44,
                entrance: 1,
                floor: 8,
                area: 26.4,
                rooms: 1,
                bathroom: 'Совмещенный',
                decor: 'Чистовая',
                price: '1 355 000,00'
            },
            {
                number: 45,
                entrance: 1,
                floor: 8,
                area: 26.2,
                rooms: 1,
                bathroom: 'Совмещенный',
                decor: 'Чистовая',
                price: '1 345 000,00'
            },
            {
                number: 46,
                entrance: 1,
                floor: 8,
                area: 40.1,
                rooms: 1,
                bathroom: 'Совмещенный',
                decor: 'Чистовая',
                price: '1 976 000,00'
            },
            {
                number: 49,
                entrance: 1,
                floor: 9,
                area: 42.9,
                rooms: 1,
                bathroom: 'Раздельный',
                decor: 'Чистовая',
                price: '2 114 000,00'
            },
            {
                number: 50,
                entrance: 1,
                floor: 9,
                area: 26.4,
                rooms: 1,
                bathroom: 'Совмещенный',
                decor: 'Чистовая',
                price: '1 355 000,00'
            },
            {
                number: 51,
                entrance: 1,
                floor: 9,
                area: 26.2,
                rooms: 1,
                bathroom: 'Совмещенный',
                decor: 'Чистовая',
                price: '1 345 000,00'
            },
            {
                number: 52,
                entrance: 1,
                floor: 9,
                area: 40.1,
                rooms: 1,
                bathroom: 'Раздельный',
                decor: 'Чистовая',
                price: '1 976 000,00'
            },
            {
                number: 55,
                entrance: 1,
                floor: 10,
                area: 42.9,
                rooms: 1,
                bathroom: 'Раздельный',
                decor: 'Чистовая',
                price: '2 114 000,00'
            },
            {
                number: 56,
                entrance: 1,
                floor: 10,
                area: 26.4,
                rooms: 1,
                bathroom: 'Совмещенный',
                decor: 'Чистовая',
                price: '1 342 000,00'
            },
            {
                number: 57,
                entrance: 1,
                floor: 10,
                area: 26.2,
                rooms: 1,
                bathroom: 'Совмещенный',
                decor: 'Чистовая',
                price: '1 331 000,00'
            },
            {
                number: 58,
                entrance: 1,
                floor: 10,
                area: 40.1,
                rooms: 1,
                bathroom: 'Совмещенный',
                decor: 'Чистовая',
                price: '1 956 000,00'
            },
            {
                number: 61,
                entrance: 1,
                floor: 11,
                area: 42.9,
                rooms: 1,
                bathroom: 'Раздельный',
                decor: 'Чистовая',
                price: '2 070 000,00'
            },
            {
                number: 62,
                entrance: 1,
                floor: 11,
                area: 26.4,
                rooms: 1,
                bathroom: 'Совмещенный',
                decor: 'Чистовая',
                price: '1 328 000,00'
            },
            {
                number: 63,
                entrance: 1,
                floor: 11,
                area: 26.2,
                rooms: 1,
                bathroom: 'Совмещенный',
                decor: 'Чистовая',
                price: '1 318 000,00'
            },
            {
                number: 64,
                entrance: 1,
                floor: 11,
                area: 40.1,
                rooms: 1,
                bathroom: 'Совмещенный',
                decor: 'Чистовая',
                price: '1 935 000,00'
            },
            {
                number: 67,
                entrance: 1,
                floor: 12,
                area: 42.9,
                rooms: 1,
                bathroom: 'Раздельный',
                decor: 'Чистовая',
                price: '2 048 000,00'
            },
            {
                number: 68,
                entrance: 1,
                floor: 12,
                area: 26.4,
                rooms: 1,
                bathroom: 'Совмещенный',
                decor: 'Чистовая',
                price: '1 315 000,00'
            },
            {
                number: 69,
                entrance: 1,
                floor: 12,
                area: 26.2,
                rooms: 1,
                bathroom: 'Совмещенный',
                decor: 'Чистовая',
                price: '1 358 000,00'
            },
            {
                number: 70,
                entrance: 1,
                floor: 12,
                area: 40.1,
                rooms: 1,
                bathroom: 'Совмещенный',
                decor: 'Чистовая',
                price: '1 915 000,00'
            },
            {
                number: 73,
                entrance: 1,
                floor: 13,
                area: 42.9,
                rooms: 1,
                bathroom: 'Раздельный',
                decor: 'Чистовая',
                price: '2 026 000,00'
            },
            {
                number: 74,
                entrance: 1,
                floor: 13,
                area: 26.4,
                rooms: 1,
                bathroom: 'Совмещенный',
                decor: 'Чистовая',
                price: '1 301 000,00'
            },
            {
                number: 76,
                entrance: 1,
                floor: 13,
                area: 40.1,
                rooms: 1,
                bathroom: 'Совмещенный',
                decor: 'Чистовая',
                price: '1 894 000,00'
            },
            {
                number: 79,
                entrance: 1,
                floor: 14,
                area: 42.9,
                rooms: 1,
                bathroom: 'Раздельный',
                decor: 'Чистовая',
                price: '2 060 000,00'
            },
            {
                number: 80,
                entrance: 1,
                floor: 14,
                area: 26.4,
                rooms: 1,
                bathroom: 'Совмещенный',
                decor: 'Чистовая',
                price: '1 265 000,00'
            },
            {
                number: 82,
                entrance: 1,
                floor: 14,
                area: 40.1,
                rooms: 1,
                bathroom: 'Совмещенный',
                decor: 'Чистовая',
                price: '1 874 000,00'
            },
            {
                number: 85,
                entrance: 1,
                floor: 15,
                area: 42.9,
                rooms: 1,
                bathroom: 'Раздельный',
                decor: 'Чистовая',
                price: '2 060 000,00'
            },
            {
                number: 88,
                entrance: 1,
                floor: 15,
                area: 40.1,
                rooms: 1,
                bathroom: 'Совмещенный',
                decor: 'Чистовая',
                price: '1 924 000,00'
            },
            {
                number: 93,
                entrance: 1,
                floor: 16,
                area: 26.2,
                rooms: 1,
                bathroom: 'Совмещенный',
                decor: 'Чистовая',
                price: '1 307 000,00'
            },
            {
                number: 94,
                entrance: 1,
                floor: 16,
                area: 40.1,
                rooms: 1,
                bathroom: 'Совмещенный',
                decor: 'Чистовая',
                price: '1 833 000,00'
            },
            {
                number: 144,
                entrance: 2,
                floor: 9,
                area: 26.4,
                rooms: 1,
                bathroom: 'Совмещенный',
                decor: 'Чистовая',
                price: '1 355 000,00'
            },
            {
                number: 145,
                entrance: 2,
                floor: 9,
                area: 26.2,
                rooms: 1,
                bathroom: 'Совмещенный',
                decor: 'Чистовая',
                price: '1 345 000,00'
            },
            {
                number: 146,
                entrance: 2,
                floor: 9,
                area: 40.1,
                rooms: 1,
                bathroom: 'Совмещенный',
                decor: 'Чистовая',
                price: '1 976 000,00'
            },
            {
                number: 150,
                entrance: 2,
                floor: 10,
                area: 26.4,
                rooms: 1,
                bathroom: 'Совмещенный',
                decor: 'Чистовая',
                price: '1 342 000,00'
            },
            {
                number: 152,
                entrance: 2,
                floor: 10,
                area: 40.1,
                rooms: 1,
                bathroom: 'Совмещенный',
                decor: 'Чистовая',
                price: '1 956 000,00'
            },
            {
                number: 156,
                entrance: 2,
                floor: 11,
                area: 26.4,
                rooms: 1,
                bathroom: 'Совмещенный',
                decor: 'Чистовая',
                price: '1 328 000,00'
            },
            {
                number: 158,
                entrance: 2,
                floor: 11,
                area: 40.1,
                rooms: 1,
                bathroom: 'Совмещенный',
                decor: 'Чистовая',
                price: '1 935 000,00'
            },
            {
                number: 162,
                entrance: 2,
                floor: 12,
                area: 26.4,
                rooms: 1,
                bathroom: 'Совмещенный',
                decor: 'Чистовая',
                price: '1 315 000,00'
            },
            {
                number: 164,
                entrance: 2,
                floor: 12,
                area: 40.1,
                rooms: 1,
                bathroom: 'Совмещенный',
                decor: 'Чистовая',
                price: '1 915 000,00'
            },
            {
                number: 167,
                entrance: 2,
                floor: 13,
                area: 42.9,
                rooms: 1,
                bathroom: 'Раздельный',
                decor: 'Чистовая',
                price: '2 026 000,00'
            },
            {
                number: 170,
                entrance: 2,
                floor: 13,
                area: 40.1,
                rooms: 1,
                bathroom: 'Совмещенный',
                decor: 'Чистовая',
                price: '1 894 000,00'
            },
            {
                number: 173,
                entrance: 2,
                floor: 14,
                area: 42.9,
                rooms: 1,
                bathroom: 'Раздельный',
                decor: 'Чистовая',
                price: '2 005 000,00'
            },
            {
                number: 176,
                entrance: 2,
                floor: 14,
                area: 40.1,
                rooms: 1,
                bathroom: 'Совмещенный',
                decor: 'Чистовая',
                price: '1 874 000,00'
            },
            {
                number: 179,
                entrance: 2,
                floor: 15,
                area: 42.9,
                rooms: 1,
                bathroom: 'Раздельный',
                decor: 'Чистовая',
                price: '1 983 000,00'
            },
            {
                number: 186,
                entrance: 2,
                floor: 16,
                area: 53.8,
                rooms: 1,
                bathroom: 'Совмещенный',
                decor: 'Чистовая',
                price: '2 684 620,00'
            },
            {
                number: 214,
                entrance: 3,
                floor: 5,
                area: 42.9,
                rooms: 1,
                bathroom: 'Раздельный',
                decor: 'Чистовая',
                price: '2 048 000,00'
            },
            {
                number: 215,
                entrance: 3,
                floor: 5,
                area: 26.4,
                rooms: 1,
                bathroom: 'Совмещенный',
                decor: 'Чистовая',
                price: '1 315 000,00'
            },
            {
                number: 217,
                entrance: 3,
                floor: 5,
                area: 40.1,
                rooms: 1,
                bathroom: 'Совмещенный',
                decor: 'Чистовая',
                price: '1 915 000,00'
            },
            {
                number: 218,
                entrance: 3,
                floor: 5,
                area: 53.8,
                rooms: 1,
                bathroom: 'Совмещенный',
                decor: 'Чистовая',
                price: '2 459 000,00'
            },
            {
                number: 220,
                entrance: 3,
                floor: 6,
                area: 42.9,
                rooms: 1,
                bathroom: 'Раздельный',
                decor: 'Чистовая',
                price: '2 070 000,00'
            },
            {
                number: 221,
                entrance: 3,
                floor: 6,
                area: 26.4,
                rooms: 1,
                bathroom: 'Совмещенный',
                decor: 'Чистовая',
                price: '1 328 000,00'
            },
            {
                number: 222,
                entrance: 3,
                floor: 6,
                area: 26.2,
                rooms: 1,
                bathroom: 'Совмещенный',
                decor: 'Чистовая',
                price: '1 318 000,00'
            },
            {
                number: 223,
                entrance: 3,
                floor: 6,
                area: 40.1,
                rooms: 1,
                bathroom: 'Совмещенный',
                decor: 'Чистовая',
                price: '1 935 000,00'
            },
            {
                number: 227,
                entrance: 3,
                floor: 7,
                area: 26.4,
                rooms: 1,
                bathroom: 'Совмещенный',
                decor: 'Чистовая',
                price: '1 342 000,00'
            },
            {
                number: 228,
                entrance: 3,
                floor: 7,
                area: 26.2,
                rooms: 1,
                bathroom: 'Совмещенный',
                decor: 'Чистовая',
                price: '1 331 000,00'
            },
            {
                number: 229,
                entrance: 3,
                floor: 7,
                area: 40.1,
                rooms: 1,
                bathroom: 'Совмещенный',
                decor: 'Чистовая',
                price: '1 956 000,00'
            },
        ];