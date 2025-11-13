// Modal component with website color palette
function showModal(message, type = 'info', callback = null) {
  // Remove existing modal if any
  const existingModal = document.getElementById('customModal');
  if (existingModal) {
    existingModal.remove();
  }

  // Create modal overlay
  const modal = document.createElement('div');
  modal.id = 'customModal';
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10000;
    animation: fadeIn 0.3s ease;
  `;

  // Create modal content
  const modalContent = document.createElement('div');
  modalContent.style.cssText = `
    background-color: #f9decd;
    border-radius: 20px;
    padding: 40px;
    max-width: 400px;
    width: 90%;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
    text-align: center;
    animation: slideUp 0.3s ease;
  `;

  // Create message
  const messageEl = document.createElement('p');
  messageEl.textContent = message;
  messageEl.style.cssText = `
    color: #663922;
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 25px;
    line-height: 1.5;
  `;

  // Create button
  const button = document.createElement('button');
  button.textContent = 'OK';
  button.style.cssText = `
    background-color: #d2691e;
    color: #FFFFFF;
    padding: 12px 40px;
    border: none;
    border-radius: 30px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s;
  `;

  button.addEventListener('mouseenter', () => {
    button.style.backgroundColor = '#b85c1b';
    button.style.transform = 'scale(1.02)';
  });

  button.addEventListener('mouseleave', () => {
    button.style.backgroundColor = '#d2691e';
    button.style.transform = 'scale(1)';
  });

  button.addEventListener('click', () => {
    modal.style.animation = 'fadeOut 0.3s ease';
    setTimeout(() => {
      modal.remove();
      if (callback) callback();
    }, 300);
  });

  // Close on overlay click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.animation = 'fadeOut 0.3s ease';
      setTimeout(() => {
        modal.remove();
        if (callback) callback();
      }, 300);
    }
  });

  // Assemble modal
  modalContent.appendChild(messageEl);
  modalContent.appendChild(button);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  // Add animations
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes fadeOut {
      from { opacity: 1; }
      to { opacity: 0; }
    }
    @keyframes slideUp {
      from {
        transform: translateY(20px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
  `;
  if (!document.getElementById('modalStyles')) {
    style.id = 'modalStyles';
    document.head.appendChild(style);
  }
}

