---
layout: page
title: Get Involved!
---


ManyBabies is a consortium of researchers who are interested in developing a **more robust** and **inclusive** developmental science through collaboration. This spirit of collaboration is at the center of every ManyBabies Project and is fundamental to how the consortium is governed. Each project is led by Project Leads who are responsible for coordinating the development, implementation, and dissemination of their project across the research teams and individuals who have signed up to contribute. Each research project is supported by the ManyBabies Executive Director and Governing Board [who help XX??]. Through this structure, ManyBabies offers a variety of opportunities for people to become involved in a community of scientists that emphasizes open science practices and fosters collaboration among researchers from different institutions and countries, enabling rigorous and large-scale studies on early development. Below we outline several ways that you can become involved in a ManyBabies Project.



## First Steps
Our primary mode of communcation in ManyBabies is email. We have a [general listserv](https://groups.google.com/a/manybabies.org/g/mb-all) that is used for network-wide announcments, and project-specific listservs for each project.
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

## Getting Involved with the ManyBabies Organization






<div class="collapsible">
  <div class="collapsible-header collapsed">Central leadership</div>
  <div class="collapsible-content">
    <p>The ManyBabies Executive Director and Governing Board provide centralized guidance for ManyBabies projects and the consortium as a whole. Their work involves creating the infrastructure and strategic planning that serves as the backbone for ManyBabies. ManyBabies Governing Board members are elected to their positions. For details on elections see (XX).</p>
  </div>
  <div class="collapsible-header collapsed">Committees</div>
  <div class="collapsible-content">
    <p>Committees serve as a way for members of the broader ManyBabies community to help build our capacity to meet the goals that were identified and outlined by the ManyBabies Governing Board: (1) supporting training and teaching materials for Open Science (TTOS committee), (2) increasing diversity and equity (Diversity Committee), (3) establishing ethical guidelines (Ethics Committee), and (4) developing analytical tools and “best practice” guidelines for reproducible data analyses (Statistics, Analysis, & Code Review Committee).</p>
    <p>Each committee focuses on a unique set of goals that are collaboratively shaped by the committee members. Committee members are anyone who is interested in engaging in discussion and developing tools about the committee’s area of focus. Anyone can join! These smaller working groups offer a fantastic way to network with other researchers and make a meaningful contribution to the consortium and broader scientific community. Details for how to join the committee are listed on the [Committees page]({{site.baseurl}}/committees/). </p>
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
