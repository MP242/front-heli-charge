import { useState } from 'react';

export function useDeleteUser() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const BASE_URL = process.env.REACT_APP_API_URL;

  function deleteUser(userId) {
    setLoading(true);
    fetch(
      BASE_URL+`/users/${userId}`,
      {
        method: 'DELETE',
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error deleting user');
        }
        return response.json();
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return { deleteUser, error, loading };
}
