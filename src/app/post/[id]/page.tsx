import { FC } from 'react';

interface PostProps {
    params: {
        id : string
    }
}

const Post: FC<PostProps> = ({params}) => {
  return <div>{params.id}</div>
}

export default Post;