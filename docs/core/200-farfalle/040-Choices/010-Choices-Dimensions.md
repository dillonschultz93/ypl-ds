---
project_name: Farfalle # title case
project_id: FFL # 3-letter code  (✨ CHANGE ME ✨ )
title: Dimensions # title case (⚠️ DO NOT TOUCH ME ⚠️ )
permalink: farfalle/choices/dimensions # lowercase + use hyphens › https://tinyurl.com/27kmc4rb (✨ CHANGE ME ✨ )
grand_parent: Farfalle # title case (✨ CHANGE ME ✨ )
parent: Choices # title case (⚠️ DO NOT TOUCH ME ⚠️ )
layout: default
nav_order: 10
---


<!-- Utility scripts -->

<script src="{{ site.baseurl }}/assets/js/utilities/pasta-token-generation.js"></script>

<!-- Inject Pasta Apparatus ad hoc script ↓ -->
<!-- <script defer src="{{ site.baseurl }}/assets/js/apparatuses/index.js"></script> -->
<script src="{{ site.baseurl }}/assets/js/apparatuses/page-script.js"></script>
<script src="{{ site.baseurl }}/assets/js/apparatuses/{{ page.title | downcase }}-script.js"></script>

# Dimensions
{: .no_toc}

- TOC
{:toc}

## Scales

<!-- Scales are Mathematic functions that allow us to derivate all our sizes from a limited number of Super Choices: -->

<!-- <section class="flex-1_1_1-cols inputsWrapper">
      <div>
        <label for="base">Base</label><br>
        <input class="scalingInputs" type="number" id="base" name="base" min="1">
      </div>
      <div>
        <label for="ratio">Ratio</label><br>
        <input class="scalingInputs" type="number" id="ratio" name="ratio" min="1">
      </div>
      <div>
        <label for="baseIndex">Base Index</label><br>
        <input class="scalingInputs" type="number" id="baseIndex" name="baseIndex" min="100" step="100">
      </div>
</section> -->

We use 3 scales for our dimensions: the classic geometric scale [1,2,4,8,16,32,64,128 …]. We use two arithmetic scales A and B that feeds our Sizes Tokens, `sizes.micro` and `sizes.macro` respectively. All our scales take a base 100 index as input.

<!-- <table class="type-02" id="dimension-scales-table">
  <thead>
    <tr>
      <th id="index">Index</th>
      <th id="geoA">Geometric</th>
      <th id="arithA">Arithmetic A</th>
      <th id="arithB">Arithmetic B</th>
    </tr>
  </thead>
  <tbody>
  </tbody>
</table> -->

<!-- ### Math Details -->
### Geometric Scale A:
{: .no_toc}

{% highlight javascript %}
functionGeoA(index) = Math.round(base * ratio**((200 + index - baseIndex)/100));{% endhighlight %}

### Arithmetic Scale A:
{: .no_toc}

{% highlight javascript %}
functionArithA(index) =  base * (8 + (index - baseIndex)/100);{% endhighlight %}

### Arithmetic Scale B:
{: .no_toc}

{% highlight javascript %}
functionArithB(index) = (Math.round(base * ratio**2) + (Math.round(base * ratio**2))*((index - 500)/100))*1.5;{% endhighlight %}

<hr>

<section>
  <details id="allScalesOutput" class="YPL-apparatusBaby">
    <summary>&nbsp;&nbsp;Scales Output</summary>
    {% include output-table.html choiceType="dimensions" choiceCategory="scales" %}
  </details>
</section>

## Spaces

Spaces tokens that are used to set margins, gaps, gutters, and paddings.

<section>
  {% include output-table.html unit="index" choiceType="dimensions" choiceCategory="spaces" %}
</section>

## Sizes

<section>
  {% include output-table.html unit="index" choiceType="dimensions" choiceCategory="sizes" %}
</section>

## Radii

<section>
  {% include output-table.html unit="index" choiceType="dimensions" choiceCategory="radii" %}
</section>

## Border Widths

<section>
  {% include output-table.html unit="index" choiceType="dimensions" choiceCategory="borderWidths" %}
</section>

## Factors

Factors are multipliers use to scale specific items in the UI. Mainly text they also can help to address the scale required by different platforms and resolution.
To facilitate their usage we use aliases from the get go.

<!-- TODO Add a new row  -->

|  || Description | 
| --- | --- | --- |
| `F1` | **All Text except Controls** | This factor is required by all Text that are not inside Controls |
| `F2` | **Controls Text size** | This factor is required by all Text that are not inside Controls | 
| `F3` | **Controls size without Text** | This factor is required by all inner dimensions of all Controls except their Text| 
| `F4` | **Controls** | This factor is required by all dimensions of all Controls including Text | 
| `F5` | **Text size · WCAG 1.4.4 AA** | This tokens serves as a reference: all UI Text elements should be tested to meet the WCAG [Success Criterion 1.4.4 Level AA](https://www.w3.org/TR/WCAG21/#x1-4-4-resize-text) which means if their size is multiplied they should not break the general layout or eclipse information |
{: .firstTD_xs}

### Tokens
{: .no_toc}

<section>
  {% include output-table.html unit="factor" choiceType="dimensions" choiceCategory="factors" %}
</section>

## Breakpoints

<!-- 
### Web
Breakpoints are points where web content responds according to the device width. We have exposed a few common breakpoints as tokens here.
 -->
<!-- TODO Expose tokens for iOS and Android Viewports -->
<!-- 
|                                       | Breakpoint prefix | Minimum width |
|---------------------------------------|-------------------|---------------|
| **Mobile phone devices**              | sm                | 640px         |
| **Tablet computer devices**           | md                | 768px         |
| **Small desktop or laptop computers** | lg                | 1024px        |
| **Typical desktop computer**          | xl                | 1280px        |
| **Large desktop screen**              | xxl               | 1536px        | -->

<!-- **All Breakpoint Outputs** -->



<section>
  {% include output-table.html unit="breakpoint" choiceType="dimensions" choiceCategory="breakpoints" %}
</section>

### iOS [WIP]
{: .no_toc}
Instead of using exact values of width like web media queries require; exposing a set of orientation tokens can be a proposed solution to handle the viewport challenge. [Apple's Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/ios/visual-design/adaptivity-and-layout/#device-size-classes) explain this a little more eloquently.

#### Proposal
{: .no_toc}
To expose two tokens specifically for iOS `YPL.FFL.TKUI_C.breakpoints.iOS.regular` and `YPL.FFL.TKUI_C.breakpoints.iOS.compact`
