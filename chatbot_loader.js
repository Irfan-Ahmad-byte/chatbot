(function() {
  const chatbotIframe = document.createElement('iframe');
  chatbotIframe.src = 'https://path-to-chatbot-template(html)-file';
  chatbotIframe.style.width = '100%';
  chatbotIframe.style.height = '100%';
  chatbotIframe.style.border = 'none';

  const chatbotContainer = document.createElement('div');
  chatbotContainer.style.position = 'fixed';
  chatbotContainer.style.bottom = '0';
  chatbotContainer.style.right = '0';
  chatbotContainer.style.width = '300px';
  chatbotContainer.style.height = '500px';
  chatbotContainer.style.zIndex = '10000';
  chatbotContainer.appendChild(chatbotIframe);

  document.body.appendChild(chatbotContainer);
})();

