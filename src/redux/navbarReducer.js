const initialState = {
    navbarFriends: [{
            id: 1,
            name: 'Friend 1',
            avaUrl: 'http://www.alluserpics.com/data/thumbnails/17/03178.jpg'
        },
        {
            id: 2,
            name: 'Friend 2',
            avaUrl: 'http://www.alluserpics.com/data/thumbnails/17/03172.jpg'
        },
        {
            id: 3,
            name: 'Friend 3',
            avaUrl: 'http://www.alluserpics.com/data/thumbnails/17/03102.jpg'
        }
    ]
};

const navbarReducer = (state = initialState, action) => {
    return state;
};

export default navbarReducer;