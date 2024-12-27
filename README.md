# Hachly AI Integration Repository

This repository provides a simple and effective way to integrate the **Hachly AI Sales Agent** into your website. By embedding the provided JavaScript snippet, you can seamlessly add Hachly AI to enhance your website's sales engagement, convert visitors into leads, and deliver a tailored AI-powered customer experience.

## Features

- **Easy Integration**: Just copy and paste the JavaScript snippet into your website's HTML.
- **Customizable**: Replace `YOUR-CODE-SHOULD-BE-HERE` with your unique Hachly AI key to activate your integration.
- **Error Handling**: Built-in error logging ensures smooth setup and troubleshooting.
- **Lightweight**: The script loads asynchronously, ensuring no performance impact on your website.

## Getting Started

1. **Copy the Script**: Use the provided script to integrate Hachly AI.
2. **Replace Your Key**: Add your unique key in place of `YOUR-CODE-SHOULD-BE-HERE`.
3. **Deploy to Your Website**: Add the script to your website's HTML, typically just before the closing `</body>` tag.
4. **Enjoy Hachly AI**: Start engaging with your visitors using the powerful Hachly AI Sales Agent.

## Example Usage

```html
<script type="text/javascript">
(function(d, t) {
    var v = d.createElement(t);
    var s = d.body;
    v.src = "https://www.hachlyai.com/HachlyAI.js";
    v.onload = function() {
        if (document.readyState === 'loading') {
            d.addEventListener('DOMContentLoaded', function () {
                executeWidgetLoad();
            });
        } else {
            executeWidgetLoad();
        }
    };
    s.appendChild(v);
    function executeWidgetLoad() {
        if (window.hachlyAI && window.hachlyAI.load) {
            window.hachlyAI.load("YOUR-CODE-SHOULD-BE-HERE").catch(function(error) { 
                console.error("Error executing load function:", error);
            });
        } else {
            console.error("hachlyAI namespace or load function is not defined.");
        }
    }
})(document, 'script');
</script>
```
