document.getElementById('checklist-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const formData = new FormData(this);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
  
    fetch('https://script.google.com/macros/s/AKfycbyAoQiZK7iSaHDBoDAjzh0yADbxFeR7xFuiWNHs863oM4FTeY6Zga4ppdkDsRCD4mul/exec', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
      .then(result => {
        if (result.success) {
          alert('Данные отправлены успешно!');
        } else {
          alert('Ошибка при отправке данных.');
        }
      }).catch(error => {
        console.error('Ошибка:', error);
        alert('Не удалось отправить данные.');
      });
  });
      