// Celestial Incremental 汉化引擎 - DOM翻译 + 模板匹配
(function() {
    if (typeof cnItems === 'undefined') { console.warn('[汉化] chs.js 未加载'); return; }

    // 静态索引
    var index = {};
    for (var key in cnItems) {
        index[key.toLowerCase()] = cnItems[key];
    }

    // 模板列表：[正则, 替换函数]
    var templates = [];
    function addTemplate(regex, replacement) {
        templates.push({ regex: regex, replacement: replacement });
    }

    // 注册常用模板
    addTemplate(/You have (.+?) celestial points/, '你有 $1 天体点数');
    addTemplate(/You have (.+?) stars/, '你有 $1 颗星辰');
    addTemplate(/You have (.+?) space rocks/, '你有 $1 块太空岩石');
    addTemplate(/You have (.+?) space gems/, '你有 $1 颗太空宝石');
    addTemplate(/You have (.+?) space dust/, '你有 $1 太空尘埃');
    addTemplate(/You have (.+?) planets/, '你有 $1 颗行星');
    addTemplate(/You have (.+?) dark celestial points/, '你有 $1 暗天体点数');
    addTemplate(/You have (.+?) space energy/, '你有 $1 空间能量');
    addTemplate(/\(\+([^)]+)\/s\)/, '（+$1/秒）');
    addTemplate(/\(([^)]+)\/s\)/, '（$1/秒）');
    addTemplate(/Reset for /, '重置获得 ');
    addTemplate(/Next at /, '下次在 ');
    addTemplate(/Reach (.+?) to unlock/, '达到 $1 以解锁');

    // 翻译函数（支持模板）
    function translate(text) {
        if (typeof text !== 'string' || !text) return text;
        var t = text.trim();
        var lower = t.toLowerCase();
        if (index[lower]) return index[lower];
        // 模板匹配
        for (var i = 0; i < templates.length; i++) {
            var m = t.match(templates[i].regex);
            if (m) return t.replace(templates[i].regex, templates[i].replacement);
        }
        return text;
    }

    // DOM文本节点翻译
    function translateDOM(root) {
        if (!root) root = document.body;
        if (!root) return;
        var walker = document.createTreeWalker(root, 4, null, false);
        var nodes = [];
        while (walker.nextNode()) nodes.push(walker.currentNode);
        for (var i = 0; i < nodes.length; i++) {
            var node = nodes[i];
            if (!node.parentNode) continue;
            var tag = node.parentNode.tagName;
            if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'TEXTAREA' || tag === 'INPUT') continue;
            var text = node.nodeValue;
            if (!text || !text.trim()) continue;
            if (/[\u4e00-\u9fff]/.test(text)) continue;
            if (!/[A-Za-z]{2,}/.test(text)) continue;
            var translated = translate(text);
            if (translated !== text) node.nodeValue = translated;
        }
    }

    function onReady() {
        setTimeout(function() { translateDOM(document.body); }, 200);
        setTimeout(function() { translateDOM(document.body); }, 1000);
        setTimeout(function() { translateDOM(document.body); }, 3000);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', onReady);
    } else { onReady(); }

    setInterval(function() {
        if (document.body) translateDOM(document.body);
    }, 3000);

    console.log('[汉化] 运行时翻译引擎已加载（含模板匹配）');
})();
