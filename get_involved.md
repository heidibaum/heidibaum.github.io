---
layout: page
title: Get Involved!
---



## Getting Involved in MB Projects

### First Steps
* Subscribe to project listserv to be notified about project updates, contribution opportunities, meeting invites, etc

### Do you know which project(s) you'd like to join?

<div class="collapsible">
  <div class="collapsible-header collapsed">Yes, I know which project(s) I'd like to join</div>
  <div class="collapsible-content">
    <p>Sure Content TBD</p>
  </div>
  <div class="collapsible-header collapsed">No, I'm not sure which project I'd like to join</div>
  <div class="collapsible-content">
    <p>Unsure Content TBD</p>
  </div>
</div>

### Do you want to propose a new project?

<div class="collapsible">
  <div class="collapsible-header collapsed">Yes, I'd like to propose a new Main Project</div>
  <div class="collapsible-content">
    <p>Content TBD</p>
  </div>
  <div class="collapsible-header collapsed">Yes, I'd like to propose a Spin-Off Project</div>
  <div class="collapsible-content">
    <p>Content TBD</p>
  </div>
</div>


## Getting Involved at the Organizational Level

<div class="collapsible">
  <div class="collapsible-header collapsed">Via Committee</div>
  <div class="collapsible-content">
    <p>Content TBD</p>
  </div>
  <div class="collapsible-header collapsed">Via the Governing Board</div>
  <div class="collapsible-content">
    <p>Content TBD</p>
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