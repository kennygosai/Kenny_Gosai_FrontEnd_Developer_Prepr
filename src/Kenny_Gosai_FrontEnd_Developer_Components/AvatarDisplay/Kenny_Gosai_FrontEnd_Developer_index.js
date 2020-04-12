import React from 'react';
import { Comment } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
const AvatarDisplay = () => {
    return (
        <Comment.Group>
        <Comment>
          <Comment.Avatar src='https://preprmedialive.s3.ca-central-1.amazonaws.com/front/img/default-user.png' />
          <Comment.Content>
            <Comment.Author as='a'>Elliot Fu</Comment.Author>
          </Comment.Content>
        </Comment>
      </Comment.Group>

    );
}
export default AvatarDisplay;