---
layout: page
title: Get Involved!
---



## Getting Involved in MB Projects
* Subscribe to project listserv to be notified about project updates, contribution opportunities, meeting invites, etc

#### Do you know which project(s) you'd like to join?

<div class="collapsible">
  <div class="collapsible-header collapsed">Yes, I know what project(s) I'd like to join</div>
  <div class="collapsible-content">
    <p>Sure Content TBD</p>
  </div>
</div>
<br>
<div class="collapsible">
  <div class="collapsible-header collapsed">No, I'm not sure which project I'd like to join</div>
  <div class="collapsible-content">
    <p>Unsure Content TBD</p>
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