// Celestial Incremental 汉化引擎 - DOM翻译模式
// 用于翻译既是键名又是显示文本的条目（如 Upgrades → 升级）

(function() {
    // 加载chs词典
    if (typeof cnItems === 'undefined') {
        console.warn('[汉化] chs.js 未加载，跳过');
        return;
    }

    // 构建索引（忽略大小写）
    var index = {};
    for (var key in cnItems) {
        index[key.toLowerCase()] = cnItems[key];
    }

    // 翻译文本
    function translate(text) {
        if (typeof text !== 'string' || !text) return text;
        var t = text.trim();
        if (index[t.toLowerCase()]) return index[t.toLowerCase()];
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
            // 跳过已经是中文的
            if (/[\u4e00-\u9fff]/.test(text)) continue;
            // 跳过纯数字/符号
            if (!/[A-Za-z]{2,}/.test(text)) continue;
            var translated = translate(text);
            if (translated !== text) {
                node.nodeValue = translated;
            }
        }
    }

    // 页面加载后翻译
    function onReady() {
        setTimeout(function() { translateDOM(document.body); }, 200);
        setTimeout(function() { translateDOM(document.body); }, 1000);
        setTimeout(function() { translateDOM(document.body); }, 3000);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', onReady);
    } else {
        onReady();
    }

    // 定期扫描（处理Vue动态渲染）
    setInterval(function() {
        if (document.body) translateDOM(document.body);
    }, 5000);

    console.log('[汉化] 运行时翻译引擎已加载');
})();
