
[![Build Status][travis-icon]][travis]

# markdown-pre

I am _markdown-pre_, built on [markdown-it][].

I convert the contents of the first `<PRE>` HTML element I find on the page
from Markdown to HTML, using a _one-line_ Javascript include.
I also inject a default stylesheet.

Zero configuration!

```html
<pre>

# Hello world!

Lorem ipsum dolor sit amet, dolor voluptua est ad …

</pre>

<script src="https://unpkg.com/markdown-pre@^1"></script>
```

_Simple?!_

## License

License: [MIT][]

[mit]: https://nfreear.mit-license.org/2019
[markdown-it]: https://npmjs.com/package/markdown-it
[travis]: https://travis-ci.org/nfreear/markdown-pre
[travis-icon]: https://travis-ci.org/nfreear/markdown-pre.svg?branch=master
