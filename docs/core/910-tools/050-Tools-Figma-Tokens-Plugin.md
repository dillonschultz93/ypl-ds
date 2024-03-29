---
title: Tokens Plugin  # title case
permalink: tools/tokens-plugin # lowercase + use hyphens › https://tinyurl.com/27kmc4rb
parent: Tools # title case
layout: default
nav_order: 500
nav_exclude: true
---

# Tokens Plugin (Figma)
{: .no_toc}
<!-- ↑ skips H1 inside TOC -->

- TOC
{:toc}

## The Figma Plugin

<section class="flex-1_1-cols">
  <div>
    We are using <a href="https://jansix.at/resources/figma-tokens">Jan Six' plugin</a> to inject a token-based logic into our Pasta Figma library.<br><br>
    The most attractive feature of this plugin is its ability to use <a href="https://github.com/six7/figma-tokens/issues/192">math</a> and variables (strangely named "aliases") aka use tokens as operands for other tokens.
  </div>
  <div>
    <table>
        <tr>
            <td><a href="https://www.figma.com/community/plugin/843461159747178978/Figma-Tokens">Figma Plugin Page</a></td>
        </tr>
        <tr>
            <td><a href="https://www.jansix.at/resources/figma-tokens">Jan Six’s Plugin Portal</a></td>
        </tr>
        <tr>
            <td><a href="https://docs.tokens.studio/">Plugin Doc</a></td>
        </tr>
        <tr>
            <td><a href="https://github.com/users/six7/projects/4/views/4">Kanban</a></td>
        </tr>
        <tr>
            <td><a href="https://docs.tokens.studio/changelog">Changelog</a></td>
        </tr>
    </table>
  </div>
</section>


2 noticable features exposed by the plugin:

1. Token Sets allow you to organize tokens by [Schemes]({{site.baseurl}}/Foundation.html#schemes)
2. A JSON editor (minimalist but conveniant)

![Figma Tokens Plugin Screenshots]({{site.baseurl}}/assets/images/YPL-DOC-FigmaTokensPlugin-001.png)


### Usage and Limitations

Please refer to [the plugin doc](https://docs.tokens.studio/) to learn about it's usage.
You can also watch [this video](https://www.designsystemtalks.com/talks/design-tokens-in-figma-how-to-get-started-today) for a quick overview of its features.

New Tokens and features are added regularly, please check the plugin [changelog](https://docs.tokens.studio/changelog).

### Tokens Snippets

You'll find below usefull snippets for various tokens formats.

#### Other
{: .no_toc}

The `Other` category allows to manipulates data Figma attributes not (yet) supported by the plugin.
This might help us to express some dimensions of our design logic than cannot be handle inside Figma (ie: responsiveness).
Foremost, this category can be used to store large-scope constants and variables.

```json
# HJSON

Constants: {
  some_random_constant: {
   value: "8"
   type: "other"
  }
  another_random_thing: {
   value: "1024"
   type: "other"
  }
}
```

#### Box Shadow
{: .no_toc}

```json
# HJSON

shadow-medium: {
  value: {
   x: "0"
   y: "4"
   spread: "0"
   color: "hsla(0,0,0,0.2)"
   blur: "20"
  }
  type: "boxShadow"
}
```


## HJSON

Figma Tokens Plugin uses a [JSON](https://en.wikipedia.org/wiki/JSON) based data-set to access Figma objects' attributes, properties and styles. JSON is tedious to write, and read.

We use [HJSON](https://hjson.github.io/) to manually write our tokens code because HJSON allows comments, and you don't need to write all the tidious  `"` or even `,`.

### Important rules

You still need to keep the `"` (apostrophe) for the `values` of your HJSON, but can still skip them for the keys. The reason is that Figma Tokens plugin doesn't recognize raw mumbers but only "strings" for calculation.

Thus, do this:

```json
base: {
    value: "2"
    type: "other"
}
```
<hr class="dd-do">

Don't do that:

```json
base: {
    value: 2
    type: other
}
```
<hr class="dd-dont">

### Convert your HJSON

Before pasting your JSON code inside Figma (plugin) you need to convert your You can then convert your HJSON into JSON using a package or its [online converter](https://hjson.github.io/try.html).


<section class="flex-1_1-cols">
  <div>
    <h4>HJSON</h4>
    <img src="{{site.baseurl}}/assets/images/YPL-DOC-HJSON-01.png" alt="Hjson Code">
  </div>
  <div>
    <h4>JSON (output)</h4>
    <img src="{{site.baseurl}}/assets/images/YPL-DOC-HJSON-02.png" alt="Hjson output (JSON)">
  </div>
</section>






### Tools

#### Convert your HJSON to JSON
{: .no_toc}

<br>
[Atom Package](https://atom.io/packages/language-hjson){: .btn .mr-2}
[Online Editor ↗](https://hjson.github.io/try.html){: .btn .mr-2 }

<!-- [Sublime Text](https://github.com/hjson/sublime-hjson){: .btn .mr-2 }
[Visual Studio](https://marketplace.visualstudio.com/items?itemName=laktak.hjson){: .btn } -->

#### Color your json
{: .no_toc}

<br>
[Atom Package](https://atom.io/packages/json-colorer){: .btn .mr-2}

#### Flatten your json
{: .no_toc}

The package can flattens or unflattens your code. That:

```json
{
  "p1": {
    "bold": {
      "value": {
        "fontFamily": "$TKC.font.family.bold",
        "fontWeight": "$TKC.font.weight.500",
        "fontSize": "$TKSM.scale.seqArithA.400",
        "lineHeight": "round($TKSM.scale.seqArithA.400 * $TKSC.ratio.leading.large)"
      },
      "description": "none",
      "type": "typography"
    }
  }
}
```
is turned into this:

```json
{
  "p1.bold.value.fontFamily": "$TKC.font.family.bold",
  "p1.bold.value.fontWeight": "$TKC.font.weight.500",
  "p1.bold.value.fontSize": "$TKSM.scale.seqArithA.400",
  "p1.bold.value.lineHeight": "round($TKSM.scale.seqArithA.400 * $TKSC.ratio.leading.large)",
  "p1.bold.description": "none",
  "p1.bold.type": "typography"
}
```

<br>
[Atom Package](https://atom.io/packages/flatten-json){: .btn .mr-2}
