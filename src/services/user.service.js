const API = 'http://localhost:4000/api';

export const getUserByCredentials = async ({ email, password }) => {
    try {
        const res = await fetch(`${API}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        if (res.status === 200) {
            const { token } = await res.json();
            return token            
        } else {
            return null;
        }
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const getUserByToken = async ({ token }) => {
    try {
        const res = await fetch(`http://localhost:4000/api/auth`, {
            method: "POST",
            headers: {
                Authorization: token,
            }
        })

        if (res.status === 200) {
            const { user } = await res.json();
            return user;
        } else {
            return null;
        }
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const createUser = async ({ email, password, nickName }) => {
    try {
        const res = await fetch(`${API}/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password, nickName }),
        });

        if (res.status === 200) {
            const { token } = await res.json();
            return token            
        } else {
            const ress = await res.json()
            console.log(ress)
            return null;
        }

    } catch (error) {
        console.log(error);
        return null;
    }
}