import { gql } from "apollo-server";

export default gql`
  type Photo{
    id:Int!
    user:User!
    file:String!
    caption:String
    hashtags:[Hashtag]
    isMine: Boolean!
    createdAt:String!
    updateAt:String!
  }
  type Hashtag{
    id:Int!
    hashtags:String!
    photos:[Photo]
    createdAt:String!
    updatedAt:String!
  }

  type Like{
    id: Int!
    photo: Photo!
    createdAt: String!
    updatedAt: String!
  }
`;