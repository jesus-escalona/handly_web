export const setUserData = (user) => (
    {
        type: 'SET_USER_DATA',
        payload: user
    }
);

export const setCompaniesData = (companies) => (
    {
        type: 'SET_COMPANIES_DATA',
        payload: companies
    }
);

export const setMessages = (messages) => (
    {
        type: 'SET_MESSAGES',
        payload: messages
    }
);
