function toggleContent(contentId) {
    var buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
      button.classList.remove('active');
    });
  
    var contents = document.querySelectorAll('.content');
    contents.forEach(content => {
      content.classList.remove('active');
    });
  
    var selectedButton = document.getElementById(contentId + 'Button');
    var selectedContent = document.getElementById(contentId + 'Content');
  
    selectedButton.classList.add('active');
    selectedContent.classList.add('active');
  }
  