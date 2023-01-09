---
title: Our Locations
layout: page
subtitle: Three Colorado Offices to Serve You - Boulder, Broomfield, and Westminster
description: Bodywise Physical Therapy provides three convenient locations in Colorado.
  Visit us today in Boulder, Broomfield, or Westminster.
sidebar: false
menu:
  about:
    weight: 2

---
<div id="locations">
  {% for location in site.locations %}
  <div class="location-info">
    <iframe src="{{ location.google_maps_embed }}" width="100%" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>
    <h3 class="location-name"><a href="{{ location.permalink }}">{{ location.title }}</a></h3>
    <address>
      <p>{{ location.address_1 }}<br>
      {{ location.address_2 }}<br>
      {{ location.city_state_zip }}<br>
      Tel: {{ location.phone }} | Fax: {{ location.fax }}</p>
    </address>
  </div>
  {% endfor %}
</div>