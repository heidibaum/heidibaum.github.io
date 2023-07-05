---
layout: page
title: Get Involved!
---


<div class="collapsible">
  <button class="collapsible-button collapsed"><i class="fas">Header 1</button>
  <div class="collapsible-content" style="display: none;">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sollicitudin tincidunt sapien ac dapibus. Fusce lacinia mi sed erat placerat, vitae dignissim erat egestas.</p>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.getElementsByClassName('collapsible-button');

    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', function() {
        this.classList.toggle('expanded');
        var content = this.nextElementSibling;

        if (content.style.display === 'block') {
          content.style.display = 'none';
        } else {
          content.style.display = 'block';
        }
      });
    }
  });
</script>