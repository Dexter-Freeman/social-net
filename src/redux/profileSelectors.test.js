import { getProfile, getStatus } from "./profileSelectors";

let state = {
    profilePage: {
        profile: {
            aboutMe: null,
            contacts: { facebook: null, website: null, vk: null, twitter: null, instagram: null },
            fullName: "DexterFreeman",
            lookingForAJob: false,
            lookingForAJobDescription: null,
            photos: { small: null, large: null },
            userId: 3873
        },
        postsData: [{
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
        status: 'My name Dexter Freeman'
    }
};

it(`getProfile shoud return profile`, () => {
    let profile = getProfile(state);
    expect(profile).toBe(state.profilePage.profile);
});

it(`getStatus shoud return status - 'My name Dexter Freeman'`, () => {
    let status = getStatus(state);
    expect(status).toBe(state.profilePage.status);
});