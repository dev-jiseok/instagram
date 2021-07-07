import { keyword } from "color-convert";
import { async } from "regenerator-runtime";
import client from "../../client";

export default {
  Query: {
    searchUser: async (_, args) => {
      const { keyword } = args;
      return client.user.findMany({
        where: {
          username: {
            startsWith: keyword.toLowerCase()
          }
        }
      });
    }
  }
}