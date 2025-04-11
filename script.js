function toggleTheme() {
    const body = document.body;
    if (body.style.background === 'white') {
      body.style.background = '#121212';
      body.style.color = '#fff';
    } else {
      body.style.background = 'white';
      body.style.color = '#000';
    }
  }
  