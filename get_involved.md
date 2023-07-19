---
layout: page
title: Get Involved!
---


ManyBabies is a consortium of researchers who are interested in developing a **more robust** and **inclusive** developmental science through collaboration. This spirit of collaboration is at the center of every ManyBabies Project and is fundamental to how the consortium is governed. Each project is led by Project Leads who are responsible for coordinating the development, implementation, and dissemination of their project across the research teams and individuals who have signed up to contribute. Each research project is supported by the ManyBabies Executive Director and Governing Board [who help XX??]. Through this structure, ManyBabies offers a variety of opportunities for people to become involved in a community of scientists that emphasizes open science practices and fosters collaboration among researchers from different institutions and countries, enabling rigorous and large-scale studies on early development. Below we outline several ways that you can become involved in a ManyBabies Project.


## Getting Involved in MB Projects

### First Steps
* Subscribe to project listserv to be notified about project updates, contribution opportunities, meeting invites, etc


### Do you know which project(s) you'd like to join?

<div class="collapsible">
  <div class="collapsible-header collapsed">Yes, I know which project(s) I'd like to join</div>
  <div class="collapsible-content">
    <iframe class="airtable-embed" src="https://airtable.com/embed/shrnHSviQxfnS7ZGc?backgroundColor=greenDusty" frameborder="0" onmousewheel="" width="100%" height="533" style="background: transparent; border: 1px solid #ccc;"></iframe>
  </div>
  <div class="collapsible-header collapsed">No, I'm not sure which project I'd like to join</div>
  <div class="collapsible-content">
    <p>Unsure Content TBD</p>
  </div>
</div>


### Do you want to propose a new project?

<div class="collapsible">
  <div class="collapsible-header collapsed">Proposing a new Main Project</div>
  <div class="collapsible-content">
    <p>Content TBD</p>
  </div>
  <div class="collapsible-header collapsed">Proposing a Spin-Off Project</div>
  <div class="collapsible-content">
    <p>Content TBD</p>
  </div>
</div>


***

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


<div id="rss-feed"></div>


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



<script src="https://unpkg.com/rss-parser/dist/rss-parser.min.js"></script>
<script src="{{ '/assets/js/feed.js' | relative_url }}"></script>
