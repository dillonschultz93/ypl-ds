---
title: Taxonomy # title case
permalink: foundations/taxonomy # lowercase + use hyphens › https://tinyurl.com/27kmc4rb
parent: Foundations # title case
layout: default
nav_order: 30
---

# Taxonomy
{: .no_toc}
<!-- ↑ skips H1 inside TOC -->

- TOC
{:toc}



## Atomic

The types of objects, or `Components`, described inside Pasta's Design System are named following an inheritance scheme such as the one advocated by [Brad Frost's Atomic Design](https://atomicdesign.bradfrost.com/chapter-2/). Pasta is a Design-Tokens based System. Tokens (aka "Design Tokens") is a category not represented inside Brad Frost classification. Here's Brad's Frost hierarchy equivalent used inside Pasta:

![Pasta Atomic Design]({{site.baseurl}}/assets/images/YPL-DOC-Taxonomy.svg)

NB:
{: .label}

**Pasta rarely serves or specifies `Features` or "Templates + Pages" and, stops most of the time at the Pattern level. Other specifications tools are used to address the stacking of Components in a specific order, should that staking be dynamic or static (ie: Mockups, YML Layout description).**

<table class="type-01">
    <!-- <caption>vertical-align</caption> -->
    <thead>
        <tr>
            <th></th>
            <th>Tokens</th>
            <th>Primitives</th>
            <th>Elements</th>
            <th>Patterns</th>
        </tr>
    </thead>
    <tbody>
        <tr class="faded">
            <td valign="top">B. Frost</td>
            <td valign="top"></td>
            <td valign="top">Atoms</td>
            <td valign="top">Molecules</td>
            <td valign="top">Organism</td>
        </tr>
        <tr>
            <td valign="top">Description</td>
            <td valign="top">The foundational constants used to build everything</td>
            <td valign="top">An indivisible part of a visual or UI item</td>
            <td valign="top">An autonomous item which surface clear affordance</td>
            <td valign="top">A coherent assemblage of Elements providing a conventional UI block</td>
        </tr>
        <tr>
            <td valign="top"></td>
            <td valign="top">
                Split in sub categories:
                <ol>
                    <li>Choices: (as limited as possible)</li>
                    <li>Decisions: where we map the Choices to objects attributes</li>
                    <li>Aliases: sometimes used to make Tokens more human-friendly/readable</li>
                    <li>Math: logic generated tokens such as size scale and color contrast dependencies</li>
                    <li><a href="{{site.baseurl}}/foundations/nomenclature#kingdom">etc.</a></li>                    
                </ol>
            </td>
            <td valign="top">
                Examples:
                <ul>
                    <li>A glyph, an icon</li>
                    <li>The control part ⦿ of a radio button</li>
                    <li>The label of a radio button</li>
                    <li>Paragraph</li>
                </ul>
            </td>
            <td valign="top">
                Examples:
                <ul>
                    <li>A radio button (control + label)</li>
                    <li>A button (shape + text)</li>
                    <li>A form field (field + label)</li>
                </ul>
            </td>
            <td valign="top">
                Examples
                <ul>
                    <li>Bar</li>
                    <li>Card</li>
                    <li>Carrousel </li>
                    <li>A search widget (field + label + icon + button)</li>
                </ul>
            </td>
        </tr>
        <tr class="faded">
            <td valign="top">Alternate Names (on other DS or Platforms)</td>
            <td valign="top">"Design Tokens"</td>
            <td valign="top">"Component" (misleading in our opinion)</td>
            <td valign="top">"Component" (misleading in our opinion), "Widget"</td>
            <td valign="top">"Block" (used for Container inside Pasta)</td>
        </tr>
    </tbody>
</table>

Since the term "Component" is used as a generic name in the industry (including in designers' tools such as Figma), we've decided to keep this conventional meaning and scope and disqualified it as a candidate to signify more specific (class of) objects inside Pasta.

## Units

### Points
{: .no_toc}

We want to express Sizes using an absolute 1:1 scale as much as we can.
Thus we try to use **Point (1/72 inch)** when possible. Note that Figma uses a 72 dpi resolution, which makes the conversion easy at `1x`: 1 pt = 1 px.

### Pixels
{: .no_toc}

To avoid pixel hinting issues we then switch to Pixel. Border Width or even button sizes are examples where we need to switch to deliver a pixel perfect end result.

## Sizes vs Space & Friends

We use different concepts to handle sizes, measurements and proportions; among which "dimensions", "scales", "ratios", etc. This table presents and almost comprehensive breakdown of these concepts and related attributes:

|Token|Description|*Figma Tokens* Type|Pasta Unit|Figma Unit|
| --- | --- | --- | --- | --- |
|Dimensions| YPL abstraction | `other`|N/A|N/A|
|Scales| YPL abstraction | `other`|N/A|N/A|
|Sizes| *Figma Tokens* | `sizing`|pt|px|
|Spaces| *Figma Tokens* | `spacing`|pt|px|
|**Typography**|
|Font Sizes| WIP | `fontSizes`|pt|px|
|Leadings| WIP  | `lineHeights`|pt|px|
|Line Breaks (Paragraph Spacing)| WIP  | `paragraphSpacing`|ratio|px|
|Trackings| WIP  | `letterSpacing`|pt|%|
|**Break Points**|
|Break Points| YPL abstraction - CSS | `other`|px| N/A|
|**Borders**|
|Border Widths| WIP | `borderWidth`|px|px|
|Border Radii| WIP | `borderRadius`|pt| px|
|**Shadow**|
|Drop Shadow h-offsets| WIP | `boxShadow`&nbsp;.value.x|pt|px|
|Drop Shadow v-offsets| WIP | `boxShadow`&nbsp;.value.y|pt|px|
|Drop Shadow Spreads| WIP | `boxShadow`&nbsp;.value.spread|pt|px|
|Drop Shadow Blur Radii | WIP | `boxShadow`&nbsp;.value.blur|pt|px|
