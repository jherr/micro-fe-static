let count = 0;
document.getElementById('buy').addEventListener('click', () => {
  count += 1;
  window.dispatchEvent(new CustomEvent('updateCart', {
    detail: {
      count,
    }
  }))
});
