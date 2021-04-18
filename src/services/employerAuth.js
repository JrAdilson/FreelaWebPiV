export const JWT_TOKEN = 'token';
export const EMPLOYER_ID = 'employerId';

export const isEmployerAuthenticated = () => localStorage.getItem(JWT_TOKEN) !== null;

export const getEmployerToken = () => localStorage.getItem(JWT_TOKEN);

export const getEmployerId = () => localStorage.getItem(EMPLOYER_ID);

export const employerLogin = (token, employerId) => {
    localStorage.setItem(JWT_TOKEN, token);
    localStorage.setItem(EMPLOYER_ID, employerId);
};

export const employerLogout = () => {
    localStorage.removeItem(JWT_TOKEN);
    localStorage.removeItem(EMPLOYER_ID);
};