---
title: News # title case
permalink: news # lowercase + use hyphens › https://tinyurl.com/27kmc4rb
layout: default
nav_order: 990
nav_exclude: true
---


# To be documented

## Component management inside Figma

- Figma components should always present a "realistic" (no Lorem, No placeholder) look'n feel to be used by Designers (especially new comers)
- Naming: The naming of Figma components should be human readable (and do not require to match Pasta conventions)
- Naming: Still, for known variants of a given component (that matches Pasta nomenclatura) we want to surface the variant UID suffix at the of the Figma component name (Cf. Icons), ie: `butIcon-004` 


## Nesting level protocol within components

### We do not allow nested blocks selectors

We allow nested blocks (containers) but do not allow to use nesting in Tokens **selector**.
This implies that each block, whatever its level inside a Component hierarchy, should have a unique Name.

 <section class="flex-1_1-cols">
   <div>
      {% highlight txt %}YPL.FFL.TKUI_D.P0003-001.BLK_bottom.width {% endhighlight %}
      <hr class="dd-do">
      {% highlight txt %} YPL.FFL.TKUI_D.P0003-001.BLK_copy.BLK_bottom.height {% endhighlight %}
      <hr class="dd-dont">
   </div>
   <div>
   </div>
</section>

### We always access children via the Parent Block

To allow to use generic names for children, we always access these via their direct parent Block if it exists:

 <section class="flex-1_1-cols">
   <div>
      {% highlight txt %}YPL.FFL.TKUI_D.P0003-001.BLK_bottom.title.fontSize {% endhighlight %}
      <hr class="dd-do">
      {% highlight txt %} YPL.FFL.TKUI_D.P0003-001.title.fontSize {% endhighlight %}
      <hr class="dd-dont">
   </div>
   <div>
   </div>
</section>

# News

## "Reinforcing the don't reuse code principle" · What?W??!?!

In the spirit of "how Design Systems implementation goes against some of code best practices".

[Building Resilient Frontend Architecture](https://www.youtube.com/watch?v=TqfbAXCCVwE)   

<iframe width="560" height="315" src="https://www.youtube.com/embed/TqfbAXCCVwE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


## How to consume videos 

```html
<figure>
  <video autoplay="" muted="" loop="" playsinline="" poster="" width="100%" height="auto"><source src="https://uxcm-pasta.s3.us-west-1.amazonaws.com/FFL/FFL-P0016-Collapsible-anim-001.mp4" type="video/mp4"></video>
  <!-- <figcaption>
  	Collapsible unfurling
  </figcaption> -->
</figure>
```

does this:

<figure>
  <video autoplay="" muted="" loop="" playsinline="" poster="" width="100%" height="auto"><source src="https://uxcm-pasta.s3.us-west-1.amazonaws.com/FFL/FFL-P0016-Collapsible-anim-001.mp4" type="video/mp4"></video>
  <!-- <figcaption>
  	Collapsible unfurling
  </figcaption> -->
</figure>

