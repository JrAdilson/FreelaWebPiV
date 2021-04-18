export const JWT_TOKEN = 'token';
export const EMPLOYEE_ID = 'employeeId';

export const isEmployeeAuthenticated = () => localStorage.getItem(JWT_TOKEN) !== null;

export const getEmployeeToken = () => localStorage.getItem(JWT_TOKEN);

export const getEmployeeId = () => localStorage.getItem(EMPLOYEE_ID);

export const employeeLogin = (token, employeeId) => {
    localStorage.setItem(JWT_TOKEN, token);
    localStorage.setItem(EMPLOYEE_ID, employeeId);
};

export const employeeLogout = () => {
    localStorage.removeItem(JWT_TOKEN);
    localStorage.removeItem(EMPLOYEE_ID);
};