export default function generateNextId(posts) {
  console.log(posts);
  const nextId = posts.reduce(
    (nextId, postItem) => Math.max(Number(nextId), Number(postItem.createdId)),
    0,
  );

  return nextId + 1;
}
