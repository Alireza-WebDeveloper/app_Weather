import { async } from 'regenerator-runtime';
import { NUMBER_SECLOADING } from './Config';
const Ajax = async (url, type, UploadData) => {
  try {
    const fetchApi = type
      ? fetch(url, {
          type: type,
          headers: { 'Content-Type': 'application/json' },
          ...(UploadData && { body: JSON.stringify(UploadData) }),
        })
      : fetch(url);
    const response = await fetchApi;
    if (!response.ok) throw new Error('No such item, search again');
    return response.json();
  } catch (error) {
    throw error;
  }
};

const TimeOUT = async () => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject('Your internet speed is slow, try again');
    }, NUMBER_SECLOADING * 1000);
  });
};
const TimeLoading = async () => {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      resolve();
    }, NUMBER_SECLOADING * 1000);
  });
};
export { Ajax, TimeLoading, TimeOUT };
