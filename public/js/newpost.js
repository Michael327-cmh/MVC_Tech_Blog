const newFormHandler = async function(event) {
    event.preventDefault();
  
  const title = document.querySelector('#title').value;
  const description = document.querySelector('#description').value;
  const posts_date = document.querySelector('#posts_date').value;
  const posts_time = document.querySelector('#posts_time').value;
  
  await fetch('/api/events', {
        method: 'POST',
        body: JSON.stringify({
        title, description, posts_date, posts_time,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    document.location.replace('/personal');
  };
  
  document
    .querySelector('#new-post-form')
    .addEventListener('submit', newFormHandler);