import { async } from "regenerator-runtime";
import client from "../../client";

export default {
  Query: {
    searchPhoto: async (_, args) => {
      const { keyword } = args;
      return client.photo.findMany({
        where: {
          caption: {
            startsWith: keyword
          }
        }
      });
    }
  }
}