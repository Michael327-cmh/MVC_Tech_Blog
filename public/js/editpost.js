const id = document.querySelector('#id').value;
const editForm = async function(event) {
  event.preventDefault();

const title = document.querySelector('#title').value;
  const description = document.querySelector('#description').value;
  const posts_date = document.querySelector('#posts_date').value;
  const posts_time = document.querySelector('#posts_time').value;


  await fetch(`/api/posts/${id}`, {
    method: 'PUT',
body: JSON.stringify({
      title, description, posts_date, posts_time,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  document.location.replace('/personal');
};
const deleteHandler = async function() {
  await fetch(`/api/posts/${id}`, {
    method: 'DELETE'
  });

  document.location.replace('/personal');
};

document
  .querySelector('#edit-post-form')
  .addEventListener('submit', editForm);
document
  .querySelector('#delete-btn')
  .addEventListener('click', deleteHandler);
