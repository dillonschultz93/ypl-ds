---
project_name: Farfalle # title case
project_id: FFL # 3-letter code
title: — Callout # title case
UID: P000D # ["P","E","F"] + Hexa code/index
variants: [] # all variants index
permalink: farfalle/patterns/callout # lowercase + use hyphens › https://tinyurl.com/27kmc4rb
grand_parent: Farfalle # title case
parent: Patterns # title case
layout: default
nav_order: 310
nav_exclude: true
---

# Callout
{: .no_toc}

<table class="headTopBorder">
  <thead>
    <tr>
      <th>UID</th>
      <th>Ticket</th>
      <th>Owner</th>
      <th>Options</th>
      <th>Tokens</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>{{ page.project_id }}.{{ page.UID }}</code></td>
      <td><a href="https://github.com/yummly/pasta/issues/19">&#35;19</a></td>
      <td><a href="https://github.com/robert-ANML">Robert</a></td>
      <td><span data-toolclip='TBD'><code>TBD</code></span></td>
      <td><a href="{{ site.url }}/pasta/assets/projects/{{ page.project_id }}/tokens/">Folder&nbsp;→</a></td>
      <td><a href="#accessibility-status"><span id="statusWidget"></span><span>0%</span></a></td>
    </tr>
    {% if page.variants.size > 0 %}
    <tr>
      <td colspan="6" class="pageHeaderVariantsRow">
        {% for item in page.variants %}<a href="#{{ page.UID }}-{{item}}"><code>-{{item | default: ""}}</code></a> {% endfor %}
      </td>
    </tr>
    {% endif %}
  </tbody>
</table>


- TOC
{:toc}

## Preview

Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis.

![Preview]({{site.baseurl}}/assets/projects/{{page.project_id}}/images/YPL-DOC-imgPlaceholder-Full.png){: .darkenabled}