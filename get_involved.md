---
layout: page
title: Get Involved!
---
<!--
<head>
  <link rel="stylesheet" href="/assets/css/beautifuljekyll.css">
</head>

<div class="collapsible">
  <button class="collapsible-button collapsed">Header 1</button>
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
-->




<div class="collapsible">
  <div class="collapsible-header collapsed">Header 2</div>
  <div class="collapsible-content">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sollicitudin tincidunt sapien ac dapibus. Fusce lacinia mi sed erat placerat, vitae dignissim erat egestas.</p>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    var headers = document.getElementsByClassName('collapsible-header');

    for (var i = 0; i < headers.length; i++) {
      headers[i].addEventListener('click', function() {
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