import AsyncStorage from '@react-native-async-storage/async-storage';

export const localStorage = {
  getToken: async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      return token;
    } catch (error) {
      console.log('error getToken ', error);
    }
  },

  saveToken: async (token: string) => {
    try {
      AsyncStorage.setItem('token', token);
    } catch (error) {
      console.log('error saveToken ', error);
    }
  },

  removeToken: async () => {
    try {
      AsyncStorage.removeItem('token');
    } catch (error) {
      console.log('error removeToken ', error);
    }
  },
};
