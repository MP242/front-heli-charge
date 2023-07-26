import { useState } from 'react';

export function useDeleteUser() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  function deleteUser(userId) {
    setLoading(true);
    fetch(`https://server-heli-charge-706f4d31d3fe.herokuapp.com//users/${userId}`, {
      method: 'DELETE',
    })
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
