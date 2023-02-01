// function to display the 'create a post' form
const displayCreateCard = async (event) => {
  event.preventDefault();

  const newPostCard = document.querySelector('#create-post').style.display='flex';
}

// form handler function to create a new post
const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#input-title').value.trim();
  const content = document.querySelector('#input-content').value.trim();

  if (title && content) {
    const response = await fetch(`/api/posts/`, {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create post');
    }
  }
}

// function to display the edit/delete form
const displayEditCard = async (event) => {
  event.preventDefault();

  const editPostCard = document.querySelector('#edit-post').style.display='flex';
}

// form handler function to edit a post
const editFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#edit-title').value.trim();
  const content = document.querySelector('#edit-content').value.trim();

  // if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
    
    const response = await fetch(`/api/posts/${id}`,{
      method: 'PUT',
      body: JSON.stringify({ title, content}),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to edit post');
    }
  // }
}

// function to delete a post
const deleteButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/posts/${id}`,{
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete project');
    }
  }
};

// event listeners for creating a new post
document
  .querySelector('.new-post-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('#new-post')
  .addEventListener('click', displayCreateCard);

// event listeners to edit/ delete a post
document
  .querySelector('#edit-post-button')
  .addEventListener('click', displayEditCard);

document
  .querySelector('.edit-post-form')
  .addEventListener('submit', editFormHandler)

document
  .querySelector('#delete-button')
  .addEventListener('click', deleteButtonHandler)