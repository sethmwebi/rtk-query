import { Link } from "react-router-dom";
import { useGetUsersQuery } from "../users/usersSlice";

const PostAuthor = ({ userId }) => {
  const { user: author } = useGetUsersQuery("getUsers", {
    selectFromResult: ({ data, isLoading }) => ({
      user: data?.entities[userId],
    }),
  });

  return (
    <span>
      by
      {author ? (
        <Link to={`/user/${userId}`}>{author.name}</Link>
      ) : (
        "Unknown Author"
      )}
    </span>
  );
};

export default PostAuthor;
