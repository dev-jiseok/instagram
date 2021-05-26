import client from '../client';
import bcrypt from "bcrypt";

export default {
  Mutation: {
    createAccount: (_, args) => {
      const {
        firstName,
        lastName,
        username,
        email,
        password
      } = args;
      //username or email을 가지고 잇는지
      try {
        const existingUser = await client.user.findFirst({
          where: {
            OR: [
              { username },
              { email }
            ]
          }
        });
        if (existingUser) {
          throw new Error("이미 존재하는 사용자입니다!");
        }
        const uglyPassword = await bcrypt.hash(password, 10); //hash password
        // save user and return User

        return client.user.create({
          data: {
            username,
            email,
            lastName,
            firstName,
            password: uglyPassword
          }
        });

      } catch (e) {
        return e;
      }
    }
  },
  Query: {
    seeProfile: async (_, args) => {
      //변수(username) 받은거
      //username find
      const {
        username
      } = args;
      return await client.user.findFirst({
        where: { username }
      });
    }
  }
}