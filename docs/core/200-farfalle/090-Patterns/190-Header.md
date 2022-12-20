---
project_name: Farfalle # title case
project_id: FFL # 3-letter code
title: Header # title case
UID: P000A # ["P","E","F"] + Hexa code/index
permalink: farfalle/patterns/header-P000A # lowercase + use hyphens › https://tinyurl.com/27kmc4rb
grand_parent: Farfalle # title case
parent: Patterns # title case
layout: default
nav_order: 190
---

<div class="maintenance-tags" markdown=1>
⚠️ COPY
{: .label.red}
</div>

# {{ page.title }} `{{ page.UID }}`
{: .no_toc}

<div class="figma-refs">
  <a href="{{site.data[page.project_id][page.UID].meta.figmaLink}}" class="btn iconed figmaBadge">To Figma →</a>
</div>

<div class="tabs">
  <input type="radio" name="tabs_section_name" id="tab_name_01" checked="checked">
  <label for="tab_name_01" class="fatTab">Usage</label>
  <div class="tab" markdown="1">
<!-- ================ -->
<!-- ==== USAGE ===== -->
<!-- ================ -->

<p>
  Header offers a way to switch between primary destinations and or holds a primary action that the user can take.
</p>

![Preview]({{ site.baseurl }}/assets/projects/{{ page.project_id }}/images/YPL-DOC-{{ page.project_id }}-{{ page.UID }}-preview_01.png){: .darkenabled}
<!-- ![Preview]({{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-imgPlaceholder-Full.png){: .darkenabled} -->

<!-- - TOC
{:toc} -->


## Variants and Options

<!-- IF TABS ARE REQUIRED -->

<!-- <div class="tabs">
  <input type="radio" name="variants" id="variant_UID1" checked="checked">
  <label for="variant_UID1">Variant_UID1</label>
  <div class="tab" markdown="1">
![Preview]({{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-FFL-P000A-YYY-preview_01.png){: .darkenabled}
Variant_Preview_#1
  </div>
  <input type="radio" name="variants" id="variant_UID2">
  <label for="variant_UID2">Variant_UID2</label>
  <div class="tab" markdown="1">
![Preview]({{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-FFL-P000A-YYY-preview_02.png){: .darkenabled}
Variant_Preview_#2
  </div>
  <input type="radio" name="variants" id="variant_UID3">
  <label for="variant_UID3">Variant_UID3</label>
  <div class="tab" markdown="1">
![Preview]({{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-FFL-P000A-YYY-preview_03.png){: .darkenabled}
Variant_Preview_#3
  </div>  
</div> -->


![Variations]({{ site.baseurl }}/assets/projects/{{ page.project_id }}/images/YPL-DOC-{{ page.project_id }}-{{ page.UID }}-variations_01.png){: .darkenabled .dotted_bg}
<!-- ![Variations]({{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-imgPlaceholder-Full.png){: .darkenabled} -->


<table id="variants-options">
  <!-- <caption>my caption</caption> -->
  <thead>
    <tr>
      <th>Variant</th>
      <th>Type</th>
      <th>usage</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>-001</code></td>
      <td>Page Header</td>
      <td>Used at the top of a view, this provides the user with a set of navigation functions and view information.</td>
    </tr>
    <tr>
      <td><code>-002</code></td>
      <td>Header with Switch</td>
      <td>Used near the top of a view. This can be used to provide the user with a core action to take, such as adding a recipe to their collections.</td>
    </tr>
    <tr>
      <td><code>-003</code></td>
      <td>Header with text button</td>
      <td>Similar to <code>-002</code>, This offers the user a core action to take.</td>
    </tr>  
  </tbody>
</table>

<!-- ## Usage Examples -->
  
  </div>
  <input type="radio" name="tabs_section_name" id="tab_name_02">
  <label for="tab_name_02" class="fatTab">Specs</label>
  <div class="tab" markdown="1">
<!-- ================= -->
<!-- ==== SPECS ====== -->
<!-- ================= -->

### Layout


![Layout Blueprint]({{ site.baseurl }}/assets/projects/{{ page.project_id }}/images/YPL-DOC-{{ page.project_id }}-{{ page.UID }}-layout_01.png)
<!-- ![Layout Blueprint]({{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-imgPlaceholder-Full.png){: .darkenabled} -->



### Dependencies


![Dependencies Blueprint]({{ site.baseurl }}/assets/projects/{{ page.project_id }}/images/YPL-DOC-{{ page.project_id }}-{{ page.UID }}-bp_dependencies_01.png)
<!-- ![Dependencies Blueprint]({{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-imgPlaceholder-Full.png){: .darkenabled} -->



{% include dependency-tree.html %}

{% include instantiation-section.html %}

## Decisions

{% include predictionary-source.html %}

![Decisions Blueprint]({{ site.baseurl }}/assets/projects/{{ page.project_id }}/images/YPL-DOC-{{ page.project_id }}-{{ page.UID }}-bp_decisions_01.png)
<!-- ![Decisions Blueprint]({{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-imgPlaceholder-Full.png){: .darkenabled} -->



### Options


![Variations]({{ site.baseurl }}/assets/projects/{{ page.project_id }}/images/YPL-DOC-{{ page.project_id }}-{{ page.UID }}-variations_02.png){: .darkenabled .dotted_bg}
<!-- ![Variations]({{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-imgPlaceholder-Full.png){: .darkenabled} -->


{% include options-table.html %}

  </div>
  <input type="radio" name="tabs_section_name" id="tab_name_03">
  <label for="tab_name_03" class="fatTab">Status</label>
  <div class="tab" markdown="1">
<!-- ================= -->
<!-- ==== STATUS ===== -->
<!-- ================= -->

{% include element-header.html %}
<!-- FIXME: remove unused variants -->


## Checklist

Please comply to and update the checklist below:

| Design |
| --- |
| <input type="checkbox" data-status-category="design" class="checklistItem"><strong>Dark and Light Modes</strong><br>Works properly for both Modes |
| <input type="checkbox" data-status-category="design" class="checklistItem" checked><strong>All interactive states</strong><br>Includes all applicable interactive states: idle, over, pressed, focus, disabled, highlighted idle, highlighted disabled, etc. |
| <input type="checkbox" data-status-category="design" class="checklistItem"> <strong>Document Variations</strong><br>Includes relevant options: variant, styles, sizes, orientations, optional iconography, decorations |
| <input type="checkbox" data-status-category="design" class="checklistItem"><strong>Breakpoints and platform scales</strong><br>Includes a desktop scale (web desktop) and a mobile scale (iOS, Android)|

| Accessiblity |
| --- |
| <input type="checkbox" data-status-category="accessibility-global" class="checklistItem"><strong>Accessiblity</strong><br>All required accessiblity criteria have been met |

<table class="Last3ThCentered">
    <thead>
    <tr>
        <th>Criterion</th>
        <th>Description</th>
        <th>Pending</th>
        <th>Done</th>
        <th>N/A</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td><a href="https://www.w3.org/TR/WCAG21/#text-alternatives">1.1.1</a></td>
        <td>Text Alternatives</td>
        <td><input type="radio"  data-status-category="accessibility" id="WCAG_1_1_1P" name="WCAG_1_1_1" value="pending" checked></td>
        <td><input type="radio"  data-status-category="accessibility" id="WCAG_1_1_1D" name="WCAG_1_1_1" value="done"></td>
        <td><input type="radio"  data-status-category="accessibility" id="WCAG_1_1_1N" name="WCAG_1_1_1" value="N/A"></td>
    </tr>
    <tr>
        <td><a href="https://www.w3.org/TR/WCAG21/#use-of-color">1.4.1</a></td>
        <td>Color not the only way to convey information</td>
        <td><input type="radio"  data-status-category="accessibility" id="WCAG_1_4_1P" name="WCAG_1_4_1" value="pending" checked></td>
        <td><input type="radio"  data-status-category="accessibility" id="WCAG_1_4_1D" name="WCAG_1_4_1" value="done"></td>
        <td><input type="radio"  data-status-category="accessibility" id="WCAG_1_4_1N" name="WCAG_1_4_1" value="N/A"></td>
    </tr>
    <tr>
        <td><a href="https://www.w3.org/TR/WCAG21/#contrast-minimum">1.4.3</a></td>
        <td>Text Color Contrast</td>
        <td><input type="radio"  data-status-category="accessibility" id="WCAG_1_4_3P" name="WCAG_1_4_3" value="pending" checked></td>
        <td><input type="radio"  data-status-category="accessibility" id="WCAG_1_4_3D" name="WCAG_1_4_3" value="done"></td>
        <td><input type="radio"  data-status-category="accessibility" id="WCAG_1_4_3N" name="WCAG_1_4_3" value="N/A"></td>
    </tr>
    <tr>
        <td><a href="https://www.w3.org/TR/WCAG21/#contrast-enhanced">1.4.6</a></td>
        <td>Text Color Contrast AAA</td>
        <td><input type="radio"  data-status-category="accessibility" id="WCAG_1_4_6P" name="WCAG_1_4_6" value="pending" checked></td>
        <td><input type="radio"  data-status-category="accessibility" id="WCAG_1_4_6D" name="WCAG_1_4_6" value="done"></td>
        <td><input type="radio"  data-status-category="accessibility" id="WCAG_1_4_6N" name="WCAG_1_4_6" value="N/A"></td>
    </tr>
    <tr>
        <td><a href="https://www.w3.org/TR/WCAG21/#non-text-contrast">1.4.11</a></td>
        <td>Fill Color Contrast</td>
        <td><input type="radio"  data-status-category="accessibility" id="WCAG_1_4_11P" name="WCAG_1_4_11" value="pending" checked></td>
        <td><input type="radio"  data-status-category="accessibility" id="WCAG_1_4_11D" name="WCAG_1_4_11" value="done"></td>
        <td><input type="radio"  data-status-category="accessibility" id="WCAG_1_4_11N" name="WCAG_1_4_11" value="N/A"></td>
    </tr>
    <tr>
        <td><a href="https://www.w3.org/TR/WCAG21/#resize-text">1.4.4</a></td>
        <td>200% Text Size</td>
        <td><input type="radio"  data-status-category="accessibility" id="WCAG_1_4_4P" name="WCAG_1_4_4" value="pending" checked></td>
        <td><input type="radio"  data-status-category="accessibility" id="WCAG_1_4_4D" name="WCAG_1_4_4" value="done"></td>
        <td><input type="radio"  data-status-category="accessibility" id="WCAG_1_4_4N" name="WCAG_1_4_4" value="N/A"></td>
    </tr>
    <tr>
        <td><a href="https://www.w3.org/TR/WCAG21/#text-spacing">1.4.12</a></td>
        <td>Text Spacing</td>
        <td><input type="radio"  data-status-category="accessibility" id="WCAG_1_4_12P" name="WCAG_1_4_12" value="pending" checked></td>
        <td><input type="radio"  data-status-category="accessibility" id="WCAG_1_4_12D" name="WCAG_1_4_12" value="done"></td>
        <td><input type="radio"  data-status-category="accessibility" id="WCAG_1_4_12N" name="WCAG_1_4_12" value="N/A"></td>
    </tr>
    <tr>
        <td><a href="https://www.w3.org/TR/WCAG21/#keyboard-no-exception">2.1.3</a></td>
        <td>Keyboard Operable</td>
        <td><input type="radio"  data-status-category="accessibility" id="WCAG_2_1_3P" name="WCAG_2_1_3" value="pending" checked></td>
        <td><input type="radio"  data-status-category="accessibility" id="WCAG_2_1_3D" name="WCAG_2_1_3" value="done"></td>
        <td><input type="radio"  data-status-category="accessibility" id="WCAG_2_1_3N" name="WCAG_2_1_3" value="N/A"></td>
    </tr>
    </tbody>
</table>


| Implementation |
| --- |
| <input type="checkbox" data-status-category="implementation" class="checklistItem"><strong>Figma</strong><br>All Tokens have been injected inside Figma components and tested  |
| <input type="checkbox" data-status-category="implementation" class="checklistItem"><strong>iOS</strong><br>Component(s) have been implemented inside iOS component library     |
| <input type="checkbox" data-status-category="implementation" class="checklistItem"><strong>Android</strong><br>Component(s) have been implemented inside iOS component library |
| <input type="checkbox" data-status-category="implementation" class="checklistItem"><strong>CSS</strong><br>Component(s) have been implemented inside Web component library     |

  </div>  
</div>