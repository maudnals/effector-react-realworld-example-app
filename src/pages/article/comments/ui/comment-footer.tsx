import { Link } from 'react-router-dom';
import { useStore } from 'effector-react';
import * as user from 'shared/user';
import { AuthBranch } from 'router';
import { commentDeleted } from '../model';
import * as types from '../model/types';
import { ButtonDelete } from './button-delete';

export const CommentFooter: React.FC<types.Comment> = ({
  author,
  createdAt,
  id,
}) => {
  const { username } = useStore(user.model.$user);
  const isAuthUser = username === author.username;

  return (
    <div className="card-footer">
      <Link className="comment-author" to={`/@${author.username}`}>
        <img
          alt={author.username}
          className="comment-author-img"
          src={author.image}
        />
      </Link>
      &nbsp;
      <Link className="comment-author" to={`/@${author.username}`}>
        {author.username}
      </Link>
      <span className="date-posted">{new Date(createdAt).toDateString()}</span>
      <AuthBranch check="auth">
        {isAuthUser && <ButtonDelete onClick={() => commentDeleted(id)} />}
      </AuthBranch>
    </div>
  );
};
