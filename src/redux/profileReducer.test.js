import profileReducer, { actionCreateAddPost, deletePostAC } from "./profileReducer";

let state = {
    profile : null,
    postsData : [{
            id: 1,
            postText: "First post",
            likesCount: 5
        },
        {
            id: 2,
            postText: "Second post",
            likesCount: 3
        },
        {
            id: 3,
            postText: "some text",
            likesCount: 25
        },
        {
            id: 4,
            postText: "more some text",
            likesCount: 1
        }
    ],
    status : ''
};

it('new post shout be - Dexter Freeman', () => {
    let action = actionCreateAddPost('Dexter Freeman');
    let newState = profileReducer(state, action);
    expect(newState.postsData[4].postText).toBe('Dexter Freeman');
});

it('after deleting length of postsData shoud be decrement', () => {
    let action = deletePostAC(1);
    let newState = profileReducer(state, action);
    expect(newState.postsData.length).toBe(3);
});