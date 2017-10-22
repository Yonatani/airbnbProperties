export default function serialize(review) {
  return {
    id: review.id,
    authorName: review.author.first_name,
    authorImage: review.author.picture_url,
    createdAt: review.created_at,
    text: review.comments,

  }
}
