import { Comment } from '@/domain/forum/enterprise/entities/comment';
import { CommentWithAuthor } from '@/domain/forum/enterprise/entities/value-objects/comment-with-author';

export class CommentWithAuthorPresenter {
  static toHTTP(commentWithAuthor: CommentWithAuthor) {
    return {
      id: commentWithAuthor.commentId.toString(),
      authorId: commentWithAuthor.authorId.toString(),
      authorName: commentWithAuthor.author,
      content: commentWithAuthor.content,
      createdAt: commentWithAuthor.createdAt,
      updatedAt: commentWithAuthor.updatedAt,
    };
  }
}
