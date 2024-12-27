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
            window.hachlyAI.load("PASTE-YOUR-CODE-FROM-HACHLY-AI-HERE").catch(function(error) {
                console.error("Error executing load function:", error);
            });
        } else {
            console.error("hachlyAI namespace or load function is not defined.");
        }
    }
})(document, 'script');
</script>
