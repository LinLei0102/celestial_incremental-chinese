addLayer("savebank", {
    name: "存档库", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "SVB", // This appears on the layer's node. Default is the id with the first letter capitalized
    row: 1,
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
    }},
    tooltip: "存档库",
    color: "white",
    clickables: {
        2: {
            title() { return "设置" },
            canClick: true,
            unlocked: true,
            onClick() {
                player.tab = "settings"
            },
            style: { width: '125px', minHeight: '50px', color: "var(--textColor)", background: "var(--miscButtonDisable)", borderRadius: '0px', border: "3px solid var(--regBorder)", margin: "0px 5px" },
        },
        4: {
            title() { return "存档库<br><small style='color:#f44'>[高度开发中]</small>" },
            canClick: true,
            unlocked: true,
            onClick() {
                player.tab = "savebank"
            },
            style: { width: '125px', minHeight: '50px', color: "var(--textColor)", background: "var(--miscButtonDisable)", borderRadius: '0px', border: "3px solid var(--regBorder)", margin: "0px 5px" },
        },
        5: {
            title() { return "更新日志" },
            canClick: true,
            unlocked: true,
            onClick() {
                player.tab = "changelog"
            },
            style: { width: '125px', minHeight: '50px', color: "var(--textColor)", background: "var(--miscButtonDisable)", borderRadius: '0px', border: "3px solid var(--regBorder)", margin: "0px 5px" },
        },
        7: {
            title() { return "音乐盒" },
            canClick() { return true },
            unlocked() { return true },
            onClick() {
                player.tab = "jukebox"
            },
            style: { width: '125px', minHeight: '50px', color: "var(--textColor)", background: "var(--miscButtonDisable)", borderRadius: '0px', border: "3px solid var(--regBorder)", margin: "0px 5px" },
        },
        11: {
            title() { return "信息" },
            canClick: true,
            unlocked: true,
            onClick() {
                player.subtabs["savebank"]["stuff"] = "Info"
            },
            style: { width: '100px', minHeight: '50px', color: 'black', background: 'grey', borderRadius: '0px', border: '2px solid white'},
        },
        12: {
            title() { return "开始<br>回溯" },
            canClick: true,
            unlocked: true,
            onClick() {
                player.subtabs["savebank"]["stuff"] = "Start-Checkback"
            },
            style: { width: '125px', minHeight: '50px', color: 'rgba(0,0,0,0.8)', background: '#83cecf', borderRadius: '0px', border: '2px solid white'},
        },
        13: {
            title() { return "回溯<br>无限" },
            canClick: true,
            unlocked: true,
            onClick() {
                player.subtabs["savebank"]["stuff"] = "Checkback-Infinity"
            },
            style: { width: '125px', minHeight: '50px', color: 'rgba(0,0,0,0.8)', background: '#094599', borderRadius: '0px', border: '2px solid white'},
        },
        14: {
            title() { return "无限<br>塔夫" },
            canClick: true,
            unlocked: true,
            onClick() {
                player.subtabs["savebank"]["stuff"] = "Infinity-Tav"
            },
            style: { width: '125px', minHeight: '50px', color: 'rgba(0,0,0,0.8)', background: 'linear-gradient(315deg, rgba(211,161,101,1) 0%, #FFBF00 100%)', borderRadius: '0px', border: '2px solid white'},
        },
        15: {
            title() { return "塔夫<br>突破无限" },
            canClick: true,
            unlocked: true,
            onClick() {
                player.subtabs["savebank"]["stuff"] = "Tav-BreakInfinity"
            },
            style: { width: '150px', minHeight: '50px', color: 'rgba(0,0,0,0.8)', background: 'linear-gradient(150deg, #008080, 0%, #b2d8d8 100%)', borderRadius: '0px', border: '2px solid white'},
        },
        16: {
            title() { return "突破无限<br>坎特" },
            canClick: true,
            unlocked: true,
            onClick() {
                player.subtabs["savebank"]["stuff"] = "BreakInfinity-Cante"
            },
            style: { width: '150px', minHeight: '50px', color: 'rgba(0,0,0,0.8)', background: 'linear-gradient(150deg, #889110, 0%, #73A112 100%)', borderRadius: '0px', border: '2px solid white'},
        },
        17: {
            title() { return "坎特<br>奇点" },
            canClick: true,
            unlocked: true,
            onClick() {
                player.subtabs["savebank"]["stuff"] = "Cante-Singularity"
            },
            style: { width: '125px', minHeight: '50px', color: 'rgba(0,0,0,0.8)', background: 'linear-gradient(45deg, #0a82b9 0%, #7dd3f9 100%)', borderRadius: '0px', border: '2px solid white'},
        },
        18: {
            title() { return "奇点<br>星金属" },
            canClick: true,
            unlocked: true,
            onClick() {
                player.subtabs["savebank"]["stuff"] = "Singularity-Starmetal"
            },
            style: { width: '125px', minHeight: '50px', color: 'rgba(0,0,0,0.8)', background: 'linear-gradient(140deg, red 0%, black 120%)', borderRadius: '0px', border: '2px solid white'},
        },
        19: {
            title() { return "星金属<br>马托斯" },
            canClick: true,
            unlocked: true,
            onClick() {
                player.subtabs["savebank"]["stuff"] = "Starmetal-Matos"
            },
            style: { width: '125px', minHeight: '50px', color: '#282363', background: 'linear-gradient(120deg, #e6eb57 0%, #bf9a32 25%,#eb6077 50%, #d460eb, 75%, #60cfeb 100%)', borderRadius: '0px', border: '2px solid white'},
        },
        21: {
            title() { return "马托斯<br>终章" },
            canClick: true,
            unlocked: true,
            onClick() {
                player.subtabs["savebank"]["stuff"] = "Matos-End"
            },
            style: { width: '125px', minHeight: '50px', color: 'black', background: 'linear-gradient(120deg,rgb(138, 14, 121) 0%,rgb(168, 12, 51) 100%)', borderRadius: '0px', border: '2px solid white'},
        },
        // Start-Checkback
        101: {
            title: "加载",
            canClick: true,
            unlocked: true,
            onClick() {
                if (confirm("你确定要加载此存档吗？")) {
                    const xhttp = new XMLHttpRequest()
                    xhttp.open("GET", "Savebank/Stage_1/001.txt", true)
                    xhttp.onload = function () {
                        let file = this.responseText
                        importSave(file)
                    }
                    xhttp.send()
                }
            },
            style: { width: '100px', minHeight: '50px', background: "#83cecf", borderRadius: '0px', border: '0px solid white'},
        },
        102: {
            title: "加载",
            canClick: true,
            unlocked: true,
            onClick() {
                if (confirm("你确定要加载此存档吗？")) {
                    const xhttp = new XMLHttpRequest()
                    xhttp.open("GET", "Savebank/Stage_1/002.txt", true)
                    xhttp.onload = function () {
                        let file = this.responseText
                        importSave(file)
                    }
                    xhttp.send()
                }
            },
            style: { width: '100px', minHeight: '50px', background: "#83cecf", borderRadius: '0px', border: '0px solid white'},
        },
        103: {
            title: "加载",
            canClick: true,
            unlocked: true,
            onClick() {
                if (confirm("你确定要加载此存档吗？")) {
                    const xhttp = new XMLHttpRequest()
                    xhttp.open("GET", "Savebank/Stage_1/003.txt", true)
                    xhttp.onload = function () {
                        let file = this.responseText
                        importSave(file)
                    }
                    xhttp.send()
                }
            },
            style: { width: '100px', minHeight: '50px', background: "#83cecf", borderRadius: '0px', border: '0px solid white'},
        },
        104: {
            title: "加载",
            canClick: true,
            unlocked: true,
            onClick() {
                if (confirm("你确定要加载此存档吗？")) {
                    const xhttp = new XMLHttpRequest()
                    xhttp.open("GET", "Savebank/Stage_1/004.txt", true)
                    xhttp.onload = function () {
                        let file = this.responseText
                        importSave(file)
                    }
                    xhttp.send()
                }
            },
            style: { width: '100px', minHeight: '50px', background: "#83cecf", borderRadius: '0px', border: '0px solid white'},
        },
        105: {
            title: "加载",
            canClick: true,
            unlocked: true,
            onClick() {
                if (confirm("你确定要加载此存档吗？")) {
                    const xhttp = new XMLHttpRequest()
                    xhttp.open("GET", "Savebank/Stage_1/005.txt", true)
                    xhttp.onload = function () {
                        let file = this.responseText
                        importSave(file)
                    }
                    xhttp.send()
                }
            },
            style: { width: '100px', minHeight: '50px', background: "#83cecf", borderRadius: '0px', border: '0px solid white'},
        },
        106: {
            title: "加载",
            canClick: true,
            unlocked: true,
            onClick() {
                if (confirm("你确定要加载此存档吗？")) {
                    const xhttp = new XMLHttpRequest()
                    xhttp.open("GET", "Savebank/Stage_1/006.txt", true)
                    xhttp.onload = function () {
                        let file = this.responseText
                        importSave(file)
                    }
                    xhttp.send()
                }
            },
            style: { width: '100px', minHeight: '50px', background: "#83cecf", borderRadius: '0px', border: '0px solid white'},
        },
        107: {
            title: "加载",
            canClick: true,
            unlocked: true,
            onClick() {
                if (confirm("你确定要加载此存档吗？")) {
                    const xhttp = new XMLHttpRequest()
                    xhttp.open("GET", "Savebank/Stage_1/007.txt", true)
                    xhttp.onload = function () {
                        let file = this.responseText
                        importSave(file)
                    }
                    xhttp.send()
                }
            },
            style: { width: '100px', minHeight: '50px', background: "#83cecf", borderRadius: '0px', border: '0px solid white'},
        },
        108: {
            title: "加载",
            canClick: true,
            unlocked: true,
            onClick() {
                if (confirm("你确定要加载此存档吗？")) {
                    const xhttp = new XMLHttpRequest()
                    xhttp.open("GET", "Savebank/Stage_1/008.txt", true)
                    xhttp.onload = function () {
                        let file = this.responseText
                        importSave(file)
                    }
                    xhttp.send()
                }
            },
            style: { width: '100px', minHeight: '50px', background: "#83cecf", borderRadius: '0px', border: '0px solid white'},
        },
        109: {
            title: "加载",
            canClick: true,
            unlocked: true,
            onClick() {
                if (confirm("你确定要加载此存档吗？")) {
                    const xhttp = new XMLHttpRequest()
                    xhttp.open("GET", "Savebank/Stage_1/009.txt", true)
                    xhttp.onload = function () {
                        let file = this.responseText
                        importSave(file)
                    }
                    xhttp.send()
                }
            },
            style: { width: '100px', minHeight: '50px', background: "#83cecf", borderRadius: '0px', border: '0px solid white'},
        },
        110: {
            title: "加载",
            canClick: true,
            unlocked: true,
            onClick() {
                if (confirm("你确定要加载此存档吗？")) {
                    const xhttp = new XMLHttpRequest()
                    xhttp.open("GET", "Savebank/Stage_1/010.txt", true)
                    xhttp.onload = function () {
                        let file = this.responseText
                        importSave(file)
                    }
                    xhttp.send()
                }
            },
            style: { width: '100px', minHeight: '50px', background: "#83cecf", borderRadius: '0px', border: '0px solid white'},
        },
        // Checkback-Infinity
        201: {
            title: "加载",
            canClick: true,
            unlocked: true,
            onClick() {
                if (confirm("你确定要加载此存档吗？")) {
                    const xhttp = new XMLHttpRequest()
                    xhttp.open("GET", "Savebank/Stage_2/011.txt", true)
                    xhttp.onload = function () {
                        let file = this.responseText
                        importSave(file)
                    }
                    xhttp.send()
                }
            },
            style: { width: '100px', minHeight: '50px', background: "#06366e", borderRadius: '0px', border: '0px solid white'},
        },
        202: {
            title: "加载",
            canClick: true,
            unlocked: true,
            onClick() {
                if (confirm("你确定要加载此存档吗？")) {
                    const xhttp = new XMLHttpRequest()
                    xhttp.open("GET", "Savebank/Stage_2/012.txt", true)
                    xhttp.onload = function () {
                        let file = this.responseText
                        importSave(file)
                    }
                    xhttp.send()
                }
            },
            style: { width: '100px', minHeight: '50px', background: "#06366e", borderRadius: '0px', border: '0px solid white'},
        },
        203: {
            title: "加载",
            canClick: true,
            unlocked: true,
            onClick() {
                if (confirm("你确定要加载此存档吗？")) {
                    const xhttp = new XMLHttpRequest()
                    xhttp.open("GET", "Savebank/Stage_2/013.txt", true)
                    xhttp.onload = function () {
                        let file = this.responseText
                        importSave(file)
                    }
                    xhttp.send()
                }
            },
            style: { width: '100px', minHeight: '50px', background: "#06366e", borderRadius: '0px', border: '0px solid white'},
        },
        204: {
            title: "加载",
            canClick: true,
            unlocked: true,
            onClick() {
                if (confirm("你确定要加载此存档吗？")) {
                    const xhttp = new XMLHttpRequest()
                    xhttp.open("GET", "Savebank/Stage_2/014.txt", true)
                    xhttp.onload = function () {
                        let file = this.responseText
                        importSave(file)
                    }
                    xhttp.send()
                }
            },
            style: { width: '100px', minHeight: '50px', background: "#06366e", borderRadius: '0px', border: '0px solid white'},
        },
        // Infinity-Tav
        301: {
            title: "加载",
            canClick: true,
            unlocked: true,
            onClick() {
                if (confirm("你确定要加载此存档吗？")) {
                    const xhttp = new XMLHttpRequest()
                    xhttp.open("GET", "Savebank/Stage_3/015.txt", true)
                    xhttp.onload = function () {
                        let file = this.responseText
                        importSave(file)
                    }
                    xhttp.send()
                }
            },
            style: { width: '100px', minHeight: '50px', background: "linear-gradient(315deg, rgba(211,161,101,1) 0%, #FFBF00 100%)", borderRadius: '0px', border: '0px solid white'},
        },
        302: {
            title: "加载",
            canClick: true,
            unlocked: true,
            onClick() {
                if (confirm("你确定要加载此存档吗？")) {
                    const xhttp = new XMLHttpRequest()
                    xhttp.open("GET", "Savebank/Stage_3/016.txt", true)
                    xhttp.onload = function () {
                        let file = this.responseText
                        importSave(file)
                    }
                    xhttp.send()
                }
            },
            style: { width: '100px', minHeight: '50px', background: "linear-gradient(315deg, rgba(211,161,101,1) 0%, #FFBF00 100%)", borderRadius: '0px', border: '0px solid white'},
        },
        303: {
            title: "加载",
            canClick: true,
            unlocked: true,
            onClick() {
                if (confirm("你确定要加载此存档吗？")) {
                    const xhttp = new XMLHttpRequest()
                    xhttp.open("GET", "Savebank/Stage_3/017.txt", true)
                    xhttp.onload = function () {
                        let file = this.responseText
                        importSave(file)
                    }
                    xhttp.send()
                }
            },
            style: { width: '100px', minHeight: '50px', background: "linear-gradient(315deg, rgba(211,161,101,1) 0%, #FFBF00 100%)", borderRadius: '0px', border: '0px solid white'},
        },
        304: {
            title: "加载",
            canClick: true,
            unlocked: true,
            onClick() {
                if (confirm("你确定要加载此存档吗？")) {
                    const xhttp = new XMLHttpRequest()
                    xhttp.open("GET", "Savebank/Stage_3/018.txt", true)
                    xhttp.onload = function () {
                        let file = this.responseText
                        importSave(file)
                    }
                    xhttp.send()
                }
            },
            style: { width: '100px', minHeight: '50px', background: "linear-gradient(315deg, rgba(211,161,101,1) 0%, #FFBF00 100%)", borderRadius: '0px', border: '0px solid white'},
        },
        305: {
            title: "加载",
            canClick: true,
            unlocked: true,
            onClick() {
                if (confirm("你确定要加载此存档吗？")) {
                    const xhttp = new XMLHttpRequest()
                    xhttp.open("GET", "Savebank/Stage_3/019.txt", true)
                    xhttp.onload = function () {
                        let file = this.responseText
                        importSave(file)
                    }
                    xhttp.send()
                }
            },
            style: { width: '100px', minHeight: '50px', background: "linear-gradient(315deg, rgba(211,161,101,1) 0%, #FFBF00 100%)", borderRadius: '0px', border: '0px solid white'},
        },
        306: {
            title: "加载",
            canClick: true,
            unlocked: true,
            onClick() {
                if (confirm("你确定要加载此存档吗？")) {
                    const xhttp = new XMLHttpRequest()
                    xhttp.open("GET", "Savebank/Stage_3/020.txt", true)
                    xhttp.onload = function () {
                        let file = this.responseText
                        importSave(file)
                    }
                    xhttp.send()
                }
            },
            style: { width: '100px', minHeight: '50px', background: "linear-gradient(315deg, rgba(211,161,101,1) 0%, #FFBF00 100%)", borderRadius: '0px', border: '0px solid white'},
        },
        307: {
            title: "加载",
            canClick: true,
            unlocked: true,
            onClick() {
                if (confirm("你确定要加载此存档吗？")) {
                    const xhttp = new XMLHttpRequest()
                    xhttp.open("GET", "Savebank/Stage_3/021.txt", true)
                    xhttp.onload = function () {
                        let file = this.responseText
                        importSave(file)
                    }
                    xhttp.send()
                }
            },
            style: { width: '100px', minHeight: '50px', background: "linear-gradient(315deg, rgba(211,161,101,1) 0%, #FFBF00 100%)", borderRadius: '0px', border: '0px solid white'},
        },
        308: {
            title: "加载",
            canClick: true,
            unlocked: true,
            onClick() {
                if (confirm("你确定要加载此存档吗？")) {
                    const xhttp = new XMLHttpRequest()
                    xhttp.open("GET", "Savebank/Stage_3/022.txt", true)
                    xhttp.onload = function () {
                        let file = this.responseText
                        importSave(file)
                    }
                    xhttp.send()
                }
            },
            style: { width: '100px', minHeight: '50px', background: "linear-gradient(315deg, rgba(211,161,101,1) 0%, #FFBF00 100%)", borderRadius: '0px', border: '0px solid white'},
        },
        309: {
            title: "加载",
            canClick: true,
            unlocked: true,
            onClick() {
                if (confirm("你确定要加载此存档吗？")) {
                    const xhttp = new XMLHttpRequest()
                    xhttp.open("GET", "Savebank/Stage_3/023.txt", true)
                    xhttp.onload = function () {
                        let file = this.responseText
                        importSave(file)
                    }
                    xhttp.send()
                }
            },
            style: { width: '100px', minHeight: '50px', background: "linear-gradient(315deg, rgba(211,161,101,1) 0%, #FFBF00 100%)", borderRadius: '0px', border: '0px solid white'},
        },
        310: {
            title: "加载",
            canClick: true,
            unlocked: true,
            onClick() {
                if (confirm("你确定要加载此存档吗？")) {
                    const xhttp = new XMLHttpRequest()
                    xhttp.open("GET", "Savebank/Stage_3/024.txt", true)
                    xhttp.onload = function () {
                        let file = this.responseText
                        importSave(file)
                    }
                    xhttp.send()
                }
            },
            style: { width: '100px', minHeight: '50px', background: "linear-gradient(315deg, rgba(211,161,101,1) 0%, #FFBF00 100%)", borderRadius: '0px', border: '0px solid white'},
        },
        311: {
            title: "加载",
            canClick: true,
            unlocked: true,
            onClick() {
                if (confirm("你确定要加载此存档吗？")) {
                    const xhttp = new XMLHttpRequest()
                    xhttp.open("GET", "Savebank/Stage_3/025.txt", true)
                    xhttp.onload = function () {
                        let file = this.responseText
                        importSave(file)
                    }
                    xhttp.send()
                }
            },
            style: { width: '100px', minHeight: '50px', background: "linear-gradient(315deg, rgba(211,161,101,1) 0%, #FFBF00 100%)", borderRadius: '0px', border: '0px solid white'},
        },
        312: {
            title: "加载",
            canClick: true,
            unlocked: true,
            onClick() {
                if (confirm("你确定要加载此存档吗？")) {
                    const xhttp = new XMLHttpRequest()
                    xhttp.open("GET", "Savebank/Stage_3/026.txt", true)
                    xhttp.onload = function () {
                        let file = this.responseText
                        importSave(file)
                    }
                    xhttp.send()
                }
            },
            style: { width: '100px', minHeight: '50px', background: "linear-gradient(315deg, rgba(211,161,101,1) 0%, #FFBF00 100%)", borderRadius: '0px', border: '0px solid white'},
        },
        401: {
            title: "加载",
            canClick: true,
            unlocked: true,
            onClick() {
                if (confirm("你确定要加载此存档吗？")) {
                    const xhttp = new XMLHttpRequest()
                    xhttp.open("GET", "Savebank/Stage_4/027.txt", true)
                    xhttp.onload = function () {
                        let file = this.responseText
                        importSave(file)
                    }
                    xhttp.send()
                }
            },
            style: { width: '100px', minHeight: '50px', background: "linear-gradient(150deg, #008080, 0%, #b2d8d8 100%)", borderRadius: '0px', border: '0px solid white'},
        },
        402: {
            title: "加载",
            canClick: true,
            unlocked: true,
            onClick() {
                if (confirm("你确定要加载此存档吗？")) {
                    const xhttp = new XMLHttpRequest()
                    xhttp.open("GET", "Savebank/Stage_4/028.txt", true)
                    xhttp.onload = function () {
                        let file = this.responseText
                        importSave(file)
                    }
                    xhttp.send()
                }
            },
            style: { width: '100px', minHeight: '50px', background: "linear-gradient(150deg, #008080, 0%, #b2d8d8 100%)", borderRadius: '0px', border: '0px solid white'},
        },
        403: {
            title: "加载",
            canClick: true,
            unlocked: true,
            onClick() {
                if (confirm("你确定要加载此存档吗？")) {
                    const xhttp = new XMLHttpRequest()
                    xhttp.open("GET", "Savebank/Stage_4/029.txt", true)
                    xhttp.onload = function () {
                        let file = this.responseText
                        importSave(file)
                    }
                    xhttp.send()
                }
            },
            style: { width: '100px', minHeight: '50px', background: "linear-gradient(150deg, #008080, 0%, #b2d8d8 100%)", borderRadius: '0px', border: '0px solid white'},
        },
        404: {
            title: "加载",
            canClick: true,
            unlocked: true,
            onClick() {
                if (confirm("你确定要加载此存档吗？")) {
                    const xhttp = new XMLHttpRequest()
                    xhttp.open("GET", "Savebank/Stage_4/030.txt", true)
                    xhttp.onload = function () {
                        let file = this.responseText
                        importSave(file)
                    }
                    xhttp.send()
                }
            },
            style: { width: '100px', minHeight: '50px', background: "linear-gradient(150deg, #008080, 0%, #b2d8d8 100%)", borderRadius: '0px', border: '0px solid white'},
        },
        405: {
            title: "加载",
            canClick: true,
            unlocked: true,
            onClick() {
                if (confirm("你确定要加载此存档吗？")) {
                    const xhttp = new XMLHttpRequest()
                    xhttp.open("GET", "Savebank/Stage_4/031.txt", true)
                    xhttp.onload = function () {
                        let file = this.responseText
                        importSave(file)
                    }
                    xhttp.send()
                }
            },
            style: { width: '100px', minHeight: '50px', background: "linear-gradient(150deg, #008080, 0%, #b2d8d8 100%)", borderRadius: '0px', border: '0px solid white'},
        },
        406: {
            title: "加载",
            canClick: true,
            unlocked: true,
            onClick() {
                if (confirm("你确定要加载此存档吗？")) {
                    const xhttp = new XMLHttpRequest()
                    xhttp.open("GET", "Savebank/Stage_4/032.txt", true)
                    xhttp.onload = function () {
                        let file = this.responseText
                        importSave(file)
                    }
                    xhttp.send()
                }
            },
            style: { width: '100px', minHeight: '50px', background: "linear-gradient(150deg, #008080, 0%, #b2d8d8 100%)", borderRadius: '0px', border: '0px solid white'},
        },
        407: {
            title: "加载",
            canClick: true,
            unlocked: true,
            onClick() {
                if (confirm("你确定要加载此存档吗？")) {
                    const xhttp = new XMLHttpRequest()
                    xhttp.open("GET", "Savebank/Stage_4/033.txt", true)
                    xhttp.onload = function () {
                        let file = this.responseText
                        importSave(file)
                    }
                    xhttp.send()
                }
            },
            style: { width: '100px', minHeight: '50px', background: "linear-gradient(150deg, #008080, 0%, #b2d8d8 100%)", borderRadius: '0px', border: '0px solid white'},
        },
        408: {
            title: "加载",
            canClick: true,
            unlocked: true,
            onClick() {
                if (confirm("你确定要加载此存档吗？")) {
                    const xhttp = new XMLHttpRequest()
                    xhttp.open("GET", "Savebank/Stage_4/034.txt", true)
                    xhttp.onload = function () {
                        let file = this.responseText
                        importSave(file)
                    }
                    xhttp.send()
                }
            },
            style: { width: '100px', minHeight: '50px', background: "linear-gradient(150deg, #008080, 0%, #b2d8d8 100%)", borderRadius: '0px', border: '0px solid white'},
        },
        409: {
            title: "加载",
            canClick: true,
            unlocked: true,
            onClick() {
                if (confirm("你确定要加载此存档吗？")) {
                    const xhttp = new XMLHttpRequest()
                    xhttp.open("GET", "Savebank/Stage_4/035.txt", true)
                    xhttp.onload = function () {
                        let file = this.responseText
                        importSave(file)
                    }
                    xhttp.send()
                }
            },
            style: { width: '100px', minHeight: '50px', background: "linear-gradient(150deg, #008080, 0%, #b2d8d8 100%)", borderRadius: '0px', border: '0px solid white'},
        },
        501: {
            title: "加载",
            canClick: true,
            unlocked: true,
            onClick() {
                if (confirm("你确定要加载此存档吗？")) {
                    const xhttp = new XMLHttpRequest()
                    xhttp.open("GET", "Savebank/Stage_5/036.txt", true)
                    xhttp.onload = function () {
                        let file = this.responseText
                        importSave(file)
                    }
                    xhttp.send()
                }
            },
            style: { width: '100px', minHeight: '50px', background: "linear-gradient(150deg, #889110, 0%, #73A112 100%)", borderRadius: '0px', border: '0px solid white'},
        },
        502: {
            title: "加载",
            canClick: true,
            unlocked: true,
            onClick() {
                if (confirm("你确定要加载此存档吗？")) {
                    const xhttp = new XMLHttpRequest()
                    xhttp.open("GET", "Savebank/Stage_5/037.txt", true)
                    xhttp.onload = function () {
                        let file = this.responseText
                        importSave(file)
                    }
                    xhttp.send()
                }
            },
            style: { width: '100px', minHeight: '50px', background: "linear-gradient(150deg, #889110, 0%, #73A112 100%)", borderRadius: '0px', border: '0px solid white'},
        },
        503: {
            title: "加载",
            canClick: true,
            unlocked: true,
            onClick() {
                if (confirm("你确定要加载此存档吗？")) {
                    const xhttp = new XMLHttpRequest()
                    xhttp.open("GET", "Savebank/Stage_5/038.txt", true)
                    xhttp.onload = function () {
                        let file = this.responseText
                        importSave(file)
                    }
                    xhttp.send()
                }
            },
            style: { width: '100px', minHeight: '50px', background: "linear-gradient(150deg, #889110, 0%, #73A112 100%)", borderRadius: '0px', border: '0px solid white'},
        },
        504: {
            title: "加载",
            canClick: true,
            unlocked: true,
            onClick() {
                if (confirm("你确定要加载此存档吗？")) {
                    const xhttp = new XMLHttpRequest()
                    xhttp.open("GET", "Savebank/Stage_5/039.txt", true)
                    xhttp.onload = function () {
                        let file = this.responseText
                        importSave(file)
                    }
                    xhttp.send()
                }
            },
            style: { width: '100px', minHeight: '50px', background: "linear-gradient(150deg, #889110, 0%, #73A112 100%)", borderRadius: '0px', border: '0px solid white'},
        },
        505: {
            title: "加载",
            canClick: true,
            unlocked: true,
            onClick() {
                if (confirm("你确定要加载此存档吗？")) {
                    const xhttp = new XMLHttpRequest()
                    xhttp.open("GET", "Savebank/Stage_5/040.txt", true)
                    xhttp.onload = function () {
                        let file = this.responseText
                        importSave(file)
                    }
                    xhttp.send()
                }
            },
            style: { width: '100px', minHeight: '50px', background: "linear-gradient(150deg, #889110, 0%, #73A112 100%)", borderRadius: '0px', border: '0px solid white'},
        },
        506: {
            title: "加载",
            canClick: true,
            unlocked: true,
            onClick() {
                if (confirm("你确定要加载此存档吗？")) {
                    const xhttp = new XMLHttpRequest()
                    xhttp.open("GET", "Savebank/Stage_5/041.txt", true)
                    xhttp.onload = function () {
                        let file = this.responseText
                        importSave(file)
                    }
                    xhttp.send()
                }
            },
            style: { width: '100px', minHeight: '50px', background: "linear-gradient(150deg, #889110, 0%, #73A112 100%)", borderRadius: '0px', border: '0px solid white'},
        },
        507: {
            title: "加载",
            canClick: true,
            unlocked: true,
            onClick() {
                if (confirm("你确定要加载此存档吗？")) {
                    const xhttp = new XMLHttpRequest()
                    xhttp.open("GET", "Savebank/Stage_5/042.txt", true)
                    xhttp.onload = function () {
                        let file = this.responseText
                        importSave(file)
                    }
                    xhttp.send()
                }
            },
            style: { width: '100px', minHeight: '50px', background: "linear-gradient(150deg, #889110, 0%, #73A112 100%)", borderRadius: '0px', border: '0px solid white'},
        },
        508: {
            title: "加载",
            canClick: true,
            unlocked: true,
            onClick() {
                if (confirm("你确定要加载此存档吗？")) {
                    const xhttp = new XMLHttpRequest()
                    xhttp.open("GET", "Savebank/Stage_5/043.txt", true)
                    xhttp.onload = function () {
                        let file = this.responseText
                        importSave(file)
                    }
                    xhttp.send()
                }
            },
            style: { width: '100px', minHeight: '50px', background: "linear-gradient(150deg, #889110, 0%, #73A112 100%)", borderRadius: '0px', border: '0px solid white'},
        },
        509: {
            title: "加载",
            canClick: true,
            unlocked: true,
            onClick() {
                if (confirm("你确定要加载此存档吗？")) {
                    const xhttp = new XMLHttpRequest()
                    xhttp.open("GET", "Savebank/Stage_5/044.txt", true)
                    xhttp.onload = function () {
                        let file = this.responseText
                        importSave(file)
                    }
                    xhttp.send()
                }
            },
            style: { width: '100px', minHeight: '50px', background: "linear-gradient(150deg, #889110, 0%, #73A112 100%)", borderRadius: '0px', border: '0px solid white'},
        },
        510: {
            title: "加载",
            canClick: true,
            unlocked: true,
            onClick() {
                if (confirm("你确定要加载此存档吗？")) {
                    const xhttp = new XMLHttpRequest()
                    xhttp.open("GET", "Savebank/Stage_5/045.txt", true)
                    xhttp.onload = function () {
                        let file = this.responseText
                        importSave(file)
                    }
                    xhttp.send()
                }
            },
            style: { width: '100px', minHeight: '50px', background: "linear-gradient(150deg, #889110, 0%, #73A112 100%)", borderRadius: '0px', border: '0px solid white'},
        },
        511: {
            title: "加载",
            canClick: true,
            unlocked: true,
            onClick() {
                if (confirm("你确定要加载此存档吗？")) {
                    const xhttp = new XMLHttpRequest()
                    xhttp.open("GET", "Savebank/Stage_5/046.txt", true)
                    xhttp.onload = function () {
                        let file = this.responseText
                        importSave(file)
                    }
                    xhttp.send()
                }
            },
            style: { width: '100px', minHeight: '50px', background: "linear-gradient(150deg, #889110, 0%, #73A112 100%)", borderRadius: '0px', border: '0px solid white'},
        },
        512: {
            title: "加载",
            canClick: true,
            unlocked: true,
            onClick() {
                if (confirm("你确定要加载此存档吗？")) {
                    const xhttp = new XMLHttpRequest()
                    xhttp.open("GET", "Savebank/Stage_5/047.txt", true)
                    xhttp.onload = function () {
                        let file = this.responseText
                        importSave(file)
                    }
                    xhttp.send()
                }
            },
            style: { width: '100px', minHeight: '50px', background: "linear-gradient(150deg, #889110, 0%, #73A112 100%)", borderRadius: '0px', border: '0px solid white'},
        },
    },
    microtabs: {
        stuff: {
            "Info": {
                buttonStyle() { return { 'color': 'white' } },
                style: { background: 'black' },
                unlocked: true,
                content: [
                    ["blank", "25px"],
                    ["raw-html", "存档库允许你从游戏的任何阶段加载存档。<br>", { "color": "white", "font-size": "16px", "font-family": "monospace" }],
                    ["blank", "25px"],
                    ["raw-html", "警告：加载存档将覆盖你当前的存档。<br>在使用存档库前请先导出当前存档。", { "color": "red", "font-size": "16px", "font-family": "monospace" }],
                    ["blank", "10px"],
                    ["raw-html", "剧透警告：存档名称会透露游戏部分内容，请谨慎浏览。", { "color": "red", "font-size": "16px", "font-family": "monospace" }],
                    ["blank", "25px"],
                ]
            },
            "Start-Checkback": {
                buttonStyle() { return { 'color': 'white' } },
                style: { background: 'black' },
                unlocked: true,
                content: [
                    ["row", [
                        ["style-row", [
                            ["style-row", [["raw-html", "001 - 已解锁威望"]], { width: "296.5px", height: "50px" }],
                            ["clickable", 101],
                        ], { width: "396.5", height: "50px", border: "2px solid white" }],
                        ["style-row", [
                            ["style-row", [["raw-html", "002 - 已解锁力量"]], { width: "296.5px", height: "50px" }],
                            ["clickable", 102],
                        ], { width: "396.5", height: "50px", border: "2px solid white" }],
                    ]],
                    ["row", [
                        ["style-row", [
                            ["style-row", [["raw-html", "003 - 已解锁树木"]], { width: "296.5px", height: "50px" }],
                            ["clickable", 103],
                        ], { width: "396.5", height: "50px", border: "2px solid white" }],
                        ["style-row", [
                            ["style-row", [["raw-html", "004 - 已解锁草地"]], { width: "296.5px", height: "50px" }],
                            ["clickable", 104],
                        ], { width: "396.5", height: "50px", border: "2px solid white" }],
                    ]],
                    ["row", [
                        ["style-row", [
                            ["style-row", [["raw-html", "005 - 已解锁五阶1"]], { width: "296.5px", height: "50px" }],
                            ["clickable", 105],
                        ], { width: "396.5", height: "50px", border: "2px solid white" }],
                        ["style-row", [
                            ["style-row", [["raw-html", "006 - 已解锁五阶2"]], { width: "296.5px", height: "50px" }],
                            ["clickable", 106],
                        ], { width: "396.5", height: "50px", border: "2px solid white" }],
                    ]],
                    ["row", [
                        ["style-row", [
                            ["style-row", [["raw-html", "007 - 首次草跃重置"]], { width: "296.5px", height: "50px" }],
                            ["clickable", 107],
                        ], { width: "396.5", height: "50px", border: "2px solid white" }],
                        ["style-row", [
                            ["style-row", [["raw-html", "008 - 已解锁五阶3"]], { width: "296.5px", height: "50px" }],
                            ["clickable", 108],
                        ], { width: "396.5", height: "50px", border: "2px solid white" }],
                    ]],
                    ["row", [
                        ["style-row", [
                            ["style-row", [["raw-html", "009 - 已解锁五阶5"]], { width: "296.5px", height: "50px" }],
                            ["clickable", 109],
                        ], { width: "396.5", height: "50px", border: "2px solid white" }],
                        ["style-row", [
                            ["style-row", [["raw-html", "010 - 已解锁回溯"]], { width: "296.5px", height: "50px" }],
                            ["clickable", 110],
                        ], { width: "396.5", height: "50px", border: "2px solid white" }],
                    ]],
                ]
            },
            "Checkback-Infinity": {
                buttonStyle() { return { 'color': 'white' } },
                style: { background: '#021124' },
                unlocked: true,
                content: [
                    ["row", [
                        ["style-row", [
                            ["style-row", [["raw-html", "011 - 已解锁传送门"]], { width: "296.5px", height: "50px" }],
                            ["clickable", 201],
                        ], { width: "396.5", height: "50px", border: "2px solid white" }],
                        ["style-row", [
                            ["style-row", [["raw-html", "012 - 达到1e200点数"]], { width: "296.5px", height: "50px" }],
                            ["clickable", 202],
                        ], { width: "396.5", height: "50px", border: "2px solid white" }],
                    ]],
                    ["row", [
                        ["style-row", [
                            ["style-row", [["raw-html", "013 - 达到1e250点数"]], { width: "296.5px", height: "50px" }],
                            ["clickable", 203],
                        ], { width: "396.5", height: "50px", border: "2px solid white" }],
                        ["style-row", [
                            ["style-row", [["raw-html", "014 - 首次达到无限"]], { width: "296.5px", height: "50px" }],
                            ["clickable", 204],
                        ], { width: "396.5", height: "50px", border: "2px solid white" }],
                    ]],
                ]
            },
            "Infinity-Tav": {
                buttonStyle() { return { 'color': 'white' } },
                style: { background: '#001f18' },
                unlocked: true,
                content: [
                    ["row", [
                        ["style-row", [
                            ["style-row", [["raw-html", "015 - 首次无限过半"]], { width: "296.5px", height: "50px" }],
                            ["clickable", 301],
                        ], { width: "396.5", height: "50px", border: "2px solid white" }],
                        ["style-row", [
                            ["style-row", [["raw-html", "016 - 第二次达到无限"]], { width: "296.5px", height: "50px" }],
                            ["clickable", 302],
                        ], { width: "396.5", height: "50px", border: "2px solid white" }],
                    ]],
                    ["row", [
                        ["style-row", [
                            ["style-row", [["raw-html", "017 - 第二次无限过半"]], { width: "296.5px", height: "50px" }],
                            ["clickable", 303],
                        ], { width: "396.5", height: "50px", border: "2px solid white" }],
                        ["style-row", [
                            ["style-row", [["raw-html", "018 - 第三次达到无限"]], { width: "296.5px", height: "50px" }],
                            ["clickable", 304],
                        ], { width: "396.5", height: "50px", border: "2px solid white" }],
                    ]],
                    ["row", [
                        ["style-row", [
                            ["style-row", [["raw-html", "019 - 首次无限挑战"]], { width: "296.5px", height: "50px" }],
                            ["clickable", 305],
                        ], { width: "396.5", height: "50px", border: "2px solid white" }],
                        ["style-row", [
                            ["style-row", [["raw-html", "020 - 第二次无限挑战"]], { width: "296.5px", height: "50px" }],
                            ["clickable", 306],
                        ], { width: "396.5", height: "50px", border: "2px solid white" }],
                    ]],
                    ["row", [
                        ["style-row", [
                            ["style-row", [["raw-html", "021 - 第三次无限挑战"]], { width: "296.5px", height: "50px" }],
                            ["clickable", 307],
                        ], { width: "396.5", height: "50px", border: "2px solid white" }],
                        ["style-row", [
                            ["style-row", [["raw-html", "022 - 第四次无限挑战"]], { width: "296.5px", height: "50px" }],
                            ["clickable", 308],
                        ], { width: "396.5", height: "50px", border: "2px solid white" }],
                    ]],
                    ["row", [
                        ["style-row", [
                            ["style-row", [["raw-html", "023 - 第五次无限挑战"]], { width: "296.5px", height: "50px" }],
                            ["clickable", 309],
                        ], { width: "396.5", height: "50px", border: "2px solid white" }],
                        ["style-row", [
                            ["style-row", [["raw-html", "024 - 第六次无限挑战"]], { width: "296.5px", height: "50px" }],
                            ["clickable", 310],
                        ], { width: "396.5", height: "50px", border: "2px solid white" }],
                    ]],
                    ["row", [
                        ["style-row", [
                            ["style-row", [["raw-html", "025 - 第七次无限挑战"]], { width: "296.5px", height: "50px" }],
                            ["clickable", 311],
                        ], { width: "396.5", height: "50px", border: "2px solid white" }],
                        ["style-row", [
                            ["style-row", [["raw-html", "026 - 第八次无限挑战"]], { width: "296.5px", height: "50px" }],
                            ["clickable", 312],
                        ], { width: "396.5", height: "50px", border: "2px solid white" }],
                    ]],
                ]
            },
            "Tav-BreakInfinity": {
                buttonStyle() { return { 'color': 'white' } },
                style: { background: '#001f18' },
                unlocked: true,
                content: [
                    ["row", [
                        ["style-row", [
                            ["style-row", [["raw-html", "027 - 收集了一些负无限点数"]], { width: "296.5px", height: "50px" }],
                            ["clickable", 401],
                        ], { width: "396.5", height: "50px", border: "2px solid white" }],
                        ["style-row", [
                            ["style-row", [["raw-html", "028 - 第五个塔夫负无限升级"]], { width: "296.5px", height: "50px" }],
                            ["clickable", 402],
                        ], { width: "396.5", height: "50px", border: "2px solid white" }],
                    ]],
                    ["row", [
                        ["style-row", [
                            ["style-row", [["raw-html", "029 - 第六个塔夫负无限升级"]], { width: "296.5px", height: "50px" }],
                            ["clickable", 403],
                        ], { width: "396.5", height: "50px", border: "2px solid white" }],
                        ["style-row", [
                            ["style-row", [["raw-html", "030 - 第七个塔夫负无限升级"]], { width: "296.5px", height: "50px" }],
                            ["clickable", 404],
                        ], { width: "396.5", height: "50px", border: "2px solid white" }],
                    ]],
                    ["row", [
                        ["style-row", [
                            ["style-row", [["raw-html", "031 - 第八个塔夫负无限升级"]], { width: "296.5px", height: "50px" }],
                            ["clickable", 405],
                        ], { width: "396.5", height: "50px", border: "2px solid white" }],
                        ["style-row", [
                            ["style-row", [["raw-html", "032 - 第九个塔夫负无限升级"]], { width: "296.5px", height: "50px" }],
                            ["clickable", 406],
                        ], { width: "396.5", height: "50px", border: "2px solid white" }],
                    ]],
                    ["row", [
                        ["style-row", [
                            ["style-row", [["raw-html", "033 - 塔夫领域的首次无限"]], { width: "296.5px", height: "50px" }],
                            ["clickable", 407],
                        ], { width: "396.5", height: "50px", border: "2px solid white" }],
                        ["style-row", [
                            ["style-row", [["raw-html", "034 - 1,000 OIP 研磨"]], { width: "296.5px", height: "50px" }],
                            ["clickable", 408],
                        ], { width: "396.5", height: "50px", border: "2px solid white" }],
                    ]],
                    ["row", [
                        ["style-row", [
                            ["style-row", [["raw-html", "035 - 突破无限"]], { width: "296.5px", height: "50px" }],
                            ["clickable", 409],
                        ], { width: "396.5", height: "50px", border: "2px solid white" }],
                    ]],
                ]
            },
            "BreakInfinity-Cante": {
                buttonStyle() { return { 'color': 'white' } },
                style: { background: '#001f18' },
                unlocked: true,
                content: [
                    ["row", [
                        ["style-row", [
                            ["style-row", [["raw-html", "036 - 塔夫领域后一万次无限"]], { width: "296.5px", height: "50px" }],
                            ["clickable", 501],
                        ], { width: "396.5", height: "50px", border: "2px solid white" }],
                        ["style-row", [
                            ["style-row", [["raw-html", "037 - 突破无限-无限点:1 负无限点:2"]], { width: "296.5px", height: "50px" }],
                            ["clickable", 502],
                        ], { width: "396.5", height: "50px", border: "2px solid white" }],
                    ]],
                    ["row", [
                        ["style-row", [
                            ["style-row", [["raw-html", "038 - 突破无限-无限点:2 负无限点:3<br>全魔咒恩典"]], { width: "296.5px", height: "50px" }],
                            ["clickable", 503],
                        ], { width: "396.5", height: "50px", border: "2px solid white" }],
                        ["style-row", [
                            ["style-row", [["raw-html", "039 - 突破无限-无限点:4 负无限点:3"]], { width: "296.5px", height: "50px" }],
                            ["clickable", 504],
                        ], { width: "396.5", height: "50px", border: "2px solid white" }],
                    ]],
                    ["row", [
                        ["style-row", [
                            ["style-row", [["raw-html", "040 - 突破无限-无限点:4 负无限点:7"]], { width: "296.5px", height: "50px" }],
                            ["clickable", 505],
                        ], { width: "396.5", height: "50px", border: "2px solid white" }],
                        ["style-row", [
                            ["style-row", [["raw-html", "041 - 突破无限-无限点:5 负无限点:7"]], { width: "296.5px", height: "50px" }],
                            ["clickable", 506],
                        ], { width: "396.5", height: "50px", border: "2px solid white" }],
                    ]],
                    ["row", [
                        ["style-row", [
                            ["style-row", [["raw-html", "042 - 突破无限-无限点:6 负无限点:8"]], { width: "296.5px", height: "50px" }],
                            ["clickable", 507],
                        ], { width: "396.5", height: "50px", border: "2px solid white" }],
                        ["style-row", [
                            ["style-row", [["raw-html", "043 - 所有传粉者升级"]], { width: "296.5px", height: "50px" }],
                            ["clickable", 508],
                        ], { width: "396.5", height: "50px", border: "2px solid white" }],
                    ]],
                    ["row", [
                        ["style-row", [
                            ["style-row", [["raw-html", "044 - 突破无限-无限点:7 负无限点:8"]], { width: "296.5px", height: "50px" }],
                            ["clickable", 509],
                        ], { width: "396.5", height: "50px", border: "2px solid white" }],
                        ["style-row", [
                            ["style-row", [["raw-html", "045 - 突破无限-无限点:8 负无限点:8"]], { width: "296.5px", height: "50px" }],
                            ["clickable", 510],
                        ], { width: "396.5", height: "50px", border: "2px solid white" }],
                    ]],
                    ["row", [
                        ["style-row", [
                            ["style-row", [["raw-html", "046 - 突破无限-无限点:9 负无限点:8"]], { width: "296.5px", height: "50px" }],
                            ["clickable", 511],
                        ], { width: "396.5", height: "50px", border: "2px solid white" }],
                        ["style-row", [
                            ["style-row", [["raw-html", "047 - 突破无限-无限点:9 负无限点:9"]], { width: "296.5px", height: "50px" }],
                            ["clickable", 512],
                        ], { width: "396.5", height: "50px", border: "2px solid white" }],
                    ]],
                    ["style-row", [
                        ["raw-html", "感谢 Sophie 制作这些存档！"],
                    ], { width: "796px", height: "50px", border: "2px solid white" }],
                ]
            },
            "Cante-Singularity": {
                buttonStyle() { return { 'color': 'white' } },
                style: { background: '#2a3e66' },
                unlocked: true,
                content: [
                    ["blank", "25px"],
                    ["raw-html", "开发中"],
                    ["blank", "25px"],
                ]
            },
            "Singularity-Starmetal": {
                buttonStyle() { return { 'color': 'white' } },
                style: { background: '#2D0000' },
                unlocked: true,
                content: [
                    ["blank", "25px"],
                    ["raw-html", "开发中"],
                    ["blank", "25px"],
                ]
            },
            "Starmetal-Matos": {
                buttonStyle() { return { 'color': 'white' } },
                style: { background: '#2D0000' },
                unlocked: true,
                content: [
                    ["blank", "25px"],
                    ["raw-html", "开发中"],
                    ["blank", "25px"],
                ]
            },
            "Matos-End": {
                buttonStyle() { return { 'color': 'white' } },
                style: { background: '#2D0000' },
                unlocked: true,
                content: [
                    ["blank", "25px"],
                    ["raw-html", "开发中"],
                    ["blank", "25px"],
                ]
            },
        },
    },
    tabFormat: [
        ["row", [["clickable", 2], ["clickable", 7], ["clickable", 4], ["clickable", 5]]],
        ["blank", "50px"],
        ["style-column", [
            ["scroll-row", [
                ["hoverless-clickable", 11], ["hoverless-clickable", 12], ["hoverless-clickable", 13], ["hoverless-clickable", 14], ["hoverless-clickable", 15],
                ["hoverless-clickable", 16], ["hoverless-clickable", 17], ["hoverless-clickable", 18], ["hoverless-clickable", 19], ["hoverless-clickable", 21],
            ], {width: "800px", background: "repeating-linear-gradient(-45deg, #161616 0 15px, #101010 0 30px)"}],
            ["buttonless-microtabs", "stuff", { 'border-width': '0px' }],
        ], {border: "2px solid white"}],
        ["blank", "25px"],
    ],
    layerShown() { return false }
})