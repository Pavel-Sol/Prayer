import axios, {AxiosResponse} from 'axios';
import {AuthSignInResponse, AuthSignUpResponse} from '../types/types';

export const authApi = {
  signUp(
    email: string,
    name: string,
    password: string,
  ): Promise<AxiosResponse<AuthSignUpResponse>> {
    return axios.post('https://prayer.herokuapp.com/auth/sign-up/', {
      email,
      name,
      password,
    });
  },

  signIn: async (
    email: string,
    password: string,
  ): Promise<AxiosResponse<AuthSignInResponse>> => {
    const res = await axios.post('https://prayer.herokuapp.com/auth/sign-in/', {
      email,
      password,
    });

    console.log('res!!!!!!', res.data);
    return res.data;
  },
};

// export const TweetsApi = {
//   fetchTweets: async (): Promise<ITweetsState["items"]> => {
//    // console.log('TweetsApi')
//     const {data} = await axios
//       .get("http://localhost:3000/dummyData.json");
//      //  console.log(data)
//     return data;
//   },
// }

type UserProps = {
  email: string;
  password: string;
};

export const loginUser = (user: UserProps) => {
  return axios.post('https://prayer.herokuapp.com/auth/sign-in/', user);
};
