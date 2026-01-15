const STORAGE_KEY = 'hs_my_requests';

export const getMyRequestIds = (): string[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

export const addRequestId = (id: string): void => {
  const ids = getMyRequestIds();
  if (!ids.includes(id)) {
    ids.unshift(id); // Thêm vào đầu
    // Giữ tối đa 50 requests gần nhất
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ids.slice(0, 50)));
  }
};

export const removeRequestId = (id: string): void => {
  const ids = getMyRequestIds().filter(i => i !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
};
