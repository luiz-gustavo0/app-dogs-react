const API_URL = process.env.REACT_APP_BASE_URL;

export function tokenPost(body) {
  return {
    url: `${API_URL}/login`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(body),
    },
  };
}

export function userGet(token) {
  return {
    url: `${API_URL}/users`,
    options: {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  };
}
