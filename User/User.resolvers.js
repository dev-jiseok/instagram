import { async } from "regenerator-runtime";
import client from "../client"

export default {
  User: {
    totalFollwing: ({ id }) => client.user.count({
      where: {
        followers: {
          some: {
            id
          }
        }
      }
    }),
    totalFollwers: ({ id }) => client.user.count({
      where: {
        following: {
          some: {
            id
          }
        }
      }
    }),
    isMe: ({ id }, _, { loggedInUser }) => {
      if (!loggedInUser) {
        return false;
      }
      return id === loggedInUser.id;
    },
    isFollwing: async ({ id }, _, { loggedInUser }) => {
      if (!loggedInUser) {
        return false;
      }
      const exist = await client.user.count({
        where: {
          username: loggedInUser.username,
          following: {
            some: {
              id
            }
          }
        }
      });
      return Boolean(exist);
    }


  }
}