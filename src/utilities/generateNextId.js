export default function generateNextId(contactData) {
  const { posts } = contactData;
  console.log(posts);
  const nextId = posts.reduce(
    (nextId, postItem) => Math.max(Number(nextId), Number(postItem.id)),
    0,
  );

  return nextId + 1;
}
