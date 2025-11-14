// Modal component with modern color palette
function showModal(message, type = 'info', callback = null) {
  // Remove existing modal if any
  const existingModal = document.getElementById('customModal');
  if (existingModal) {
    existingModal.remove();
  }

  // Define color schemes based on type
  const colorSchemes = {
    success: {
      bg: 'linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)',
      border: '#10b981',
      text: '#065f46',
      button: '#10b981',
      buttonHover: '#059669',
      icon: '✓',
      iconBg: '#10b981'
    },
    error: {
      bg: 'linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)',
      border: '#ef4444',
      text: '#991b1b',
      button: '#ef4444',
      buttonHover: '#dc2626',
      icon: '✕',
      iconBg: '#ef4444'
    },
    info: {
      bg: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
      border: '#3b82f6',
      text: '#1e40af',
      button: '#3b82f6',
      buttonHover: '#2563eb',
      icon: 'ℹ',
      iconBg: '#3b82f6'
    }
  };

  const colors = colorSchemes[type] || colorSchemes.info;

  // Create modal overlay
  const modal = document.createElement('div');
  modal.id = 'customModal';
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(4px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10000;
    animation: fadeIn 0.3s ease;
  `;

  // Create modal content
  const modalContent = document.createElement('div');
  modalContent.style.cssText = `
    background: ${colors.bg};
    border: 2px solid ${colors.border};
    border-radius: 24px;
    padding: 0;
    max-width: 420px;
    width: 90%;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(0, 0, 0, 0.05);
    text-align: center;
    animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    overflow: hidden;
    position: relative;
  `;

  // Create icon container
  const iconContainer = document.createElement('div');
  iconContainer.style.cssText = `
    width: 64px;
    height: 64px;
    margin: 32px auto 20px;
    background-color: ${colors.iconBg};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    animation: scaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both;
  `;

  const icon = document.createElement('div');
  icon.textContent = colors.icon;
  icon.style.cssText = `
    color: #FFFFFF;
    font-size: 32px;
    font-weight: bold;
    line-height: 1;
  `;
  iconContainer.appendChild(icon);

  // Create message
  const messageEl = document.createElement('p');
  messageEl.textContent = message;
  messageEl.style.cssText = `
    color: ${colors.text};
    font-size: 17px;
    font-weight: 600;
    margin: 0 32px 32px;
    line-height: 1.6;
  `;

  // Create button container
  const buttonContainer = document.createElement('div');
  buttonContainer.style.cssText = `
    padding: 0 32px 32px;
  `;

  // Create button
  const button = document.createElement('button');
  button.textContent = 'OK';
  button.style.cssText = `
    background-color: ${colors.button};
    color: #FFFFFF;
    padding: 14px 48px;
    border: none;
    border-radius: 12px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    width: 100%;
    max-width: 200px;
  `;

  button.addEventListener('mouseenter', () => {
    button.style.backgroundColor = colors.buttonHover;
    button.style.transform = 'translateY(-2px)';
    button.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.2)';
  });

  button.addEventListener('mouseleave', () => {
    button.style.backgroundColor = colors.button;
    button.style.transform = 'translateY(0)';
    button.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
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
  buttonContainer.appendChild(button);
  modalContent.appendChild(iconContainer);
  modalContent.appendChild(messageEl);
  modalContent.appendChild(buttonContainer);
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
        transform: translateY(30px) scale(0.95);
        opacity: 0;
      }
      to {
        transform: translateY(0) scale(1);
        opacity: 1;
      }
    }
    @keyframes scaleIn {
      from {
        transform: scale(0);
        opacity: 0;
      }
      to {
        transform: scale(1);
        opacity: 1;
      }
    }
  `;
  if (!document.getElementById('modalStyles')) {
    style.id = 'modalStyles';
    document.head.appendChild(style);
  }
}

