import {useState} from 'react'

import {
  CommentsContainer,
  CommentsTitle,
  Form,
  NameInput,
  CommentTextInput,
  CommentButton,
} from './styledComponents'
import CommentItem from '../CommentItem'

const Comments = () => {
  const [name, setName] = useState('')
  const [commentText, setCommentText] = useState('')
  const [comment, setComment] = useState({name: '', commentText: ''})

  const onChangeName = event => setName(event.target.value)
  const onChangeCommentText = event => setCommentText(event.tartget.value)
  const onAddComment = event => {
    event.preventDefault()
    setComment({name, commentText})
    setName('')
    setCommentText('')
  }
  const commentDetails = {
    name,
    commentText,
  }
  return (
    <CommentsContainer>
      <CommentsTitle>Comments</CommentsTitle>
      <Form onSubmit={onAddComment}>
        <NameInput
          type="text"
          placeholder="Your name"
          value={name}
          onChange={onChangeName}
        />
        <CommentTextInput
          placeholder="Your comment"
          rows="6"
          value={commentText}
          onChange={onChangeCommentText}
        />
        <CommentButton type="submit">Comment</CommentButton>
      </Form>
      <CommentItem commentDetails={comment} />
    </CommentsContainer>
  )
}

export default Comments
