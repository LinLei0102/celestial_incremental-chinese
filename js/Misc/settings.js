addLayer("settings", {
    name: "设置", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "SET", // This appears on the layer's node. Default is the id with the first letter capitalized
    row: 1,
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
    }},
    tooltip: "设置",
    color: "white",
    clickables: {
        2: {
            title() { return "设置" },
            canClick() { return true },
            unlocked() { return true },
            onClick() {
                player.tab = "settings"
            },
            style: { width: '125px', minHeight: '50px', color: "var(--textColor)", background: "var(--miscButtonDisable)", borderRadius: '0px', border: "3px solid var(--regBorder)", margin: "0px 5px" },
        },
        4: {
            title() { return "Savebank<br><small style='color:#f44'>[高度开发中]</small>" },
            canClick() { return true },
            unlocked() { return true },
            onClick() {
                player.tab = "savebank"
            },
            style: { width: '125px', minHeight: '50px', color: "var(--textColor)", background: "var(--miscButtonDisable)", borderRadius: '0px', border: "3px solid var(--regBorder)", margin: "0px 5px" },
        },
        5: {
            title() { return "更新日志" },
            canClick() { return true },
            unlocked() { return true },
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
            title() { return "保存" },
            canClick: true,
            unlocked: true,
            onClick() {
                save()
            },
            style: { width: '100px', minHeight: '80px', color: "var(--textColor)", background: "var(--miscButton)", borderRadius: '0', border: "3px solid var(--miscButtonDisable)"},
        },
        13: {
            title() { return "导入存档" },
            canClick: true,
            unlocked: true,
            onClick() {
                importSave()
            },
            style: { width: '100px', minHeight: '80px', color: "var(--textColor)", background: "var(--miscButton)", borderRadius: '0', border: "3px solid var(--miscButtonDisable)"},
        },
        14: {
            title() { return "自动保存<hr style='border:1px solid #888;margin-top:1px'>" + (options.autosave ? "开" : "关") },
            canClick: true,
            unlocked: true,
            onClick() {
                toggleOpt('autosave')
            },
            style: { width: '100px', minHeight: '80px', color: "var(--textColor)", background: "var(--miscButton)", borderRadius: '0', border: "3px solid var(--miscButtonDisable)"},
        },
        15: {
            title() { return "导出文件" },
            canClick: true,
            unlocked: true,
            onClick() {
                exportFile()
            },
            style: { width: '100px', minHeight: '80px', color: "var(--textColor)", background: "var(--miscButton)", borderRadius: '0', border: "3px solid var(--miscButtonDisable)"},
        },
        16: {
            title() { return "导出到剪贴板" },
            canClick: true,
            unlocked: true,
            onClick() {
                exportSave()
            },
            style: { width: '100px', minHeight: '80px', color: "var(--textColor)", background: "var(--miscButton)", borderRadius: '0', border: "3px solid var(--miscButtonDisable)"},
        },
        17: {
            title() { return "硬重置" },
            canClick: true,
            unlocked: true,
            onClick() {
                hardReset()
            },
            style: { width: '100px', minHeight: '80px', color: "#c88", background: "#300", borderRadius: '0', border: "3px solid #200"},
        },
        18: {
            title() { return "保存备份" },
            canClick: true,
            unlocked: true,
            tooltip() {return "保存你的存档备份。<br>不能防止缓存清除，<br>但可以防止损坏。<br>彻底防止存档丢失的唯一方法<br>是定期导出你的文件。"},
            onClick() {
                saveBackup()
            },
            style: { width: '100px', minHeight: '80px', color: "var(--textColor)", background: "var(--miscButton)", borderRadius: '0', border: "3px solid var(--miscButtonDisable)"},
        },
        19: {
            title() { return "加载备份<br><div style='color:#c88;background:#300;font-size:10px;border:3px solid #200;line-height:1;margin-bottom:-20px;margin-top:2px'>会重置当前存档</div>" },
            canClick: true,
            unlocked: true,
            onClick() {
                loadBackup()
            },
            style: { width: '100px', minHeight: '80px', color: "var(--textColor)", background: "var(--miscButton)", borderRadius: '0', border: "3px solid var(--miscButtonDisable)"},
        },
        21: {
            title() { return "隐藏里程碑弹窗<hr style='border:1px solid #888;margin-top:1px'>" + (options.hideMilestonePopups ? "开" : "关") },
            canClick: true,
            unlocked: true,
            onClick() {
                toggleOpt('hideMilestonePopups')
            },
            style: { width: '100px', minHeight: '60px', color: "var(--textColor)", background: "var(--miscButton)", fontSize: "8px", lineHeight: "1", borderRadius: '0', border: "3px solid var(--miscButtonDisable)"},
        },
        22: {
            title() { return "隐藏成就弹窗<hr style='border:1px solid #888;margin-top:1px'>" + (options.hideAchievementPopups ? "开" : "关") },
            canClick: true,
            unlocked: true,
            onClick() {
                toggleOpt('hideAchievementPopups')
            },
            style: { width: '100px', minHeight: '60px', color: "var(--textColor)", background: "var(--miscButton)", fontSize: "8px", lineHeight: "1", borderRadius: '0', border: "3px solid var(--miscButtonDisable)"},
        },
        23: {
            title() { return "隐藏通用弹窗<hr style='border:1px solid #888;margin-top:1px'>" + (options.hideGeneralPopups ? "开" : "关") },
            canClick: true,
            unlocked: true,
            onClick() {
                toggleOpt('hideGeneralPopups')
            },
            style: { width: '100px', minHeight: '60px', color: "var(--textColor)", background: "var(--miscButton)", fontSize: "8px", lineHeight: "1", borderRadius: '0', border: "3px solid var(--miscButtonDisable)"},
        },
        24: {
            title() { return "即时过场文本<hr style='border:1px solid #888;margin-top:1px'>" + (options.instantCutsceneText ? "开" : "关") },
            canClick: true,
            unlocked: true,
            onClick() {
                toggleOpt('instantCutsceneText')
            },
            style: { width: '100px', minHeight: '60px', color: "var(--textColor)", background: "var(--miscButton)", fontSize: "8px", lineHeight: "1", borderRadius: '0', border: "3px solid var(--miscButtonDisable)"},
        },
        25: {
            title() { return "画布性能模式<hr style='border:1px solid #888;margin-top:1px'>" + (options.performanceMode ? "开" : "关") },
            canClick: true,
            unlocked: true,
            tooltip: "Disables fancy backgrounds and removes shadows from canvas elements.",
            onClick() {
                toggleOpt('performanceMode')
            },
            style: { width: '100px', minHeight: '60px', color: "var(--textColor)", background: "var(--miscButton)", fontSize: "8px", lineHeight: "1", borderRadius: '0', border: "3px solid var(--miscButtonDisable)"},
        },
        26: {
            title() { return player.depth3.milestone[25] == 0 ? "[功能未解锁]" : "弹幕地狱键盘控制<hr style='border:1px solid #888;margin-top:1px'>" + (options.bhKeyboard ? "开" : "关") },
            canClick() {return player.depth3.milestone[25] > 0},
            unlocked: true,
            onClick() {
                toggleOpt('bhKeyboard')
            },
            style() {
                let look = {width: '100px', minHeight: '60px', color: "var(--textColor)", background: "var(--miscButton)", fontSize: "8px", lineHeight: "1", borderRadius: '0', border: "3px solid var(--miscButtonDisable)"}
                if (!this.canClick()) {look.background = "var(--miscButtonDisable)";look.borderColor = "var(--layerBackground)"}
                return look
            },
        },

        27: {
            title() { return "切换快捷键<hr style='border:1px solid #888;margin-top:1px'>" + (options.toggleHotkey ? "开" : "关") },
            canClick: true,
            unlocked: true,
            onClick() {
                toggleOpt('toggleHotkey')
            },
            style: { width: '100px', minHeight: '60px', color: "var(--textColor)", background: "var(--miscButton)", fontSize: "9px", lineHeight: "1.1", borderRadius: '0', border: "3px solid var(--miscButtonDisable)"},
        },
        28: {
            title() { return "切换音乐<hr style='border:1px solid #888;margin-top:1px'>" + (options.musicToggle ? "开" : "关") },
            canClick: true,
            unlocked: true,
            onClick() {
                toggleOpt('musicToggle')
            },
            style: { width: '100px', minHeight: '57px', color: "var(--textColor)", background: "var(--miscButton)", fontSize: "9px", lineHeight: "1.1", borderRadius: '0', border: "3px solid var(--miscButtonDisable)"},
        },
        31: {
            title: "Tree Layout",
            canClick() {return options.menuType != "Tree"},
            unlocked: "true",
            onClick() {
                options.menuType = "Tree"
            },
            style() {
                let look = {width: '100px', minHeight: '45px', color: "var(--textColor)", borderRadius: '0'}
                if (this.canClick()) {
                    look.background = "var(--miscButton)"
                    look.border = "3px solid var(--miscButtonDisable)"
                } else {
                    look.background = "var(--miscButtonDisable)"
                    look.border = "3px solid var(--layerBackground)"
                }
                return look
            },
        },
        32: {
            title: "Tab Layout",
            canClick() {return options.menuType != "Tab"},
            unlocked: "true",
            onClick() {
                options.menuType = "Tab"
            },
            style() {
                let look = {width: '100px', minHeight: '45px', color: "var(--textColor)", borderRadius: '0'}
                if (this.canClick()) {
                    look.background = "var(--miscButton)"
                    look.border = "3px solid var(--miscButtonDisable)"
                } else {
                    look.background = "var(--miscButtonDisable)"
                    look.border = "3px solid var(--layerBackground)"
                }
                return look
            },
        },
        33: {
            title: "Grid Layout",
            canClick() {return options.menuType != "Grid"},
            unlocked: "true",
            onClick() {
                options.menuType = "Grid"
            },
            style() {
                let look = {width: '100px', minHeight: '45px', color: "var(--textColor)", borderRadius: '0'}
                if (this.canClick()) {
                    look.background = "var(--miscButton)"
                    look.border = "3px solid var(--miscButtonDisable)"
                } else {
                    look.background = "var(--miscButtonDisable)"
                    look.border = "3px solid var(--layerBackground)"
                }
                return look
            },
        },

        100: {
            title() {return player.c.cutscenes["U3-Earned-Starmetal"] < 2 ? "[已锁定]" : options.themeDarken ? "切换到浅色模式" : "切换到深色模式"},
            canClick() {return player.c.cutscenes["U3-Earned-Starmetal"] > 1},
            unlocked: "true",
            tooltip() {return player.c.cutscenes["U3-Earned-Starmetal"] < 2 ? "从黑暗之地获得。" : ""},
            onClick() {
                if (options.themeDarken) {
                    options.themeDarken = false
                } else {
                    options.themeDarken = true
                }
	            changeTheme();
	            resizeCanvas();
            },
            style() {
                let look = {width: '306px', minHeight: '35px', color: "var(--textColor)", borderRadius: '0'}
                if (!options.themeDarken) {
                    if (this.canClick()) {
                        look.background = colors["default"].miscButton;look.border = "3px solid " + colors["default"].miscButtonDisable
                    } else {
                        look.background = colors["default"].miscButtonDisable;look.border = "3px solid " + colors["default"].layerBackground
                    }
                } else {
                    if (this.canClick()) {
                        look.background = colors["default"].darkButton;look.border = "3px solid " + colors["default"].darkButtonDisable
                    } else {
                        look.background = colors["default"].darkButtonDisable;look.border = "3px solid " + colors["default"].darkLayerBackground
                    }
                }
                return look
            },
        },
        101: {
            title: "Default Theme",
            canClick() {return options.theme != "default"},
            unlocked: "true",
            onClick() {
                options.theme = "default"
	            changeTheme();
	            resizeCanvas();
            },
            style() {
                let look = {width: '100px', minHeight: '45px', color: "var(--textColor)", borderRadius: '0'}
                if (!player.sma.inStarmetalChallenge && !options.themeDarken) {
                    if (this.canClick()) {
                        look.background = colors["default"].miscButton;look.border = "3px solid " + colors["default"].miscButtonDisable
                    } else {
                        look.background = colors["default"].miscButtonDisable;look.border = "3px solid " + colors["default"].layerBackground
                    }
                } else {
                    if (this.canClick()) {
                        look.background = colors["default"].darkButton;look.border = "3px solid " + colors["default"].darkButtonDisable
                    } else {
                        look.background = colors["default"].darkButtonDisable;look.border = "3px solid " + colors["default"].darkLayerBackground
                    }
                }
                return look
            },
        },
        102: {
            title: "Bright Theme",
            canClick() {return options.theme != "bright"},
            unlocked: "true",
            onClick() {
                options.theme = "bright"
	            changeTheme();
	            resizeCanvas();
            },
            style() {
                let look = {width: '100px', minHeight: '45px', color: "var(--textColor)", borderRadius: '0'}
                if (!player.sma.inStarmetalChallenge && !options.themeDarken) {
                    if (this.canClick()) {
                        look.background = colors["bright"].miscButton;look.border = "3px solid " + colors["bright"].miscButtonDisable
                    } else {
                        look.background = colors["bright"].miscButtonDisable;look.border = "3px solid " + colors["bright"].layerBackground
                    }
                } else {
                    if (this.canClick()) {
                        look.background = colors["bright"].darkButton;look.border = "3px solid " + colors["bright"].darkButtonDisable
                    } else {
                        look.background = colors["bright"].darkButtonDisable;look.border = "3px solid " + colors["bright"].darkLayerBackground
                    }
                }
                return look
            },
        },
        103: {
            title: "Dark Theme",
            canClick() {return options.theme != "dark"},
            unlocked: "true",
            onClick() {
                options.theme = "dark"
	            changeTheme();
	            resizeCanvas();
            },
            style() {
                let look = {width: '100px', minHeight: '45px', color: "var(--textColor)", borderRadius: '0'}
                if (!player.sma.inStarmetalChallenge && !options.themeDarken) {
                    if (this.canClick()) {
                        look.background = colors["dark"].miscButton;look.border = "3px solid " + colors["dark"].miscButtonDisable
                    } else {
                        look.background = colors["dark"].miscButtonDisable;look.border = "3px solid " + colors["dark"].layerBackground
                    }
                } else {
                    if (this.canClick()) {
                        look.background = colors["dark"].darkButton;look.border = "3px solid " + colors["dark"].darkButtonDisable
                    } else {
                        look.background = colors["dark"].darkButtonDisable;look.border = "3px solid " + colors["dark"].darkLayerBackground
                    }
                }
                return look
            },
        },
        104: {
            title() {return hasUpgrade("i", 16) || player.in.unlockedInfinity ? "木质主题" : "[已锁定]"},
            canClick() {return options.theme != "wood" && (hasUpgrade("i", 16) || player.in.unlockedInfinity)},
            unlocked: "true",
            tooltip() {return !(hasUpgrade("i", 16) || player.in.unlockedInfinity) ? "从你的第一个有机超物理值获得。" : ""},
            onClick() {
                options.theme = "wood"
	            changeTheme();
	            resizeCanvas();
            },
            style() {
                let look = {width: '100px', minHeight: '45px', color: "var(--textColor)", borderRadius: '0'}
                if (!player.sma.inStarmetalChallenge && !options.themeDarken) {
                    if (this.canClick()) {
                        look.background = colors["wood"].miscButton;look.border = "3px solid " + colors["wood"].miscButtonDisable
                    } else {
                        look.background = colors["wood"].miscButtonDisable;look.border = "3px solid " + colors["wood"].layerBackground
                    }
                } else {
                    if (this.canClick()) {
                        look.background = colors["wood"].darkButton;look.border = "3px solid " + colors["wood"].darkButtonDisable
                    } else {
                        look.background = colors["wood"].darkButtonDisable;look.border = "3px solid " + colors["wood"].darkLayerBackground
                    }
                }
                return look
            },
        },
        105: {
            title() {return player.in.unlockedInfinity ? "金色主题" : "[已锁定]"},
            canClick() {return options.theme != "gold" && player.in.unlockedInfinity},
            unlocked: "true",
            tooltip() {return !player.in.unlockedInfinity ? "从达到你的极限获得。" : ""},
            onClick() {
                options.theme = "gold"
	            changeTheme();
	            resizeCanvas();
            },
            style() {
                let look = {width: '100px', minHeight: '45px', color: "var(--textColor)", borderRadius: '0'}
                if (!player.sma.inStarmetalChallenge && !options.themeDarken) {
                    if (this.canClick()) {
                        look.background = colors["gold"].miscButton;look.border = "3px solid " + colors["gold"].miscButtonDisable
                    } else {
                        look.background = colors["gold"].miscButtonDisable;look.border = "3px solid " + colors["gold"].layerBackground
                    }
                } else {
                    if (this.canClick()) {
                        look.background = colors["gold"].darkButton;look.border = "3px solid " + colors["gold"].darkButtonDisable
                    } else {
                        look.background = colors["gold"].darkButtonDisable;look.border = "3px solid " + colors["gold"].darkLayerBackground
                    }
                }
                return look
            },
        },
        106: {
            title() {return hasChallenge("ip", 18) || player.s.highestSingularityPoints.gt(0) ? "银色主题" : "[已锁定]"},
            canClick() {return options.theme != "silver" && (hasChallenge("ip", 18) || player.s.highestSingularityPoints.gt(0))},
            unlocked: "true",
            tooltip() {return !(hasChallenge("ip", 18) || player.s.highestSingularityPoints.gt(0)) ? "从达到一个被封锁的极限获得。" : ""},
            onClick() {
                options.theme = "silver"
	            changeTheme();
	            resizeCanvas();
            },
            style() {
                let look = {width: '100px', minHeight: '45px', color: "var(--textColor)", borderRadius: '0'}
                if (!player.sma.inStarmetalChallenge && !options.themeDarken) {
                    if (this.canClick()) {
                        look.background = colors["silver"].miscButton;look.border = "3px solid " + colors["silver"].miscButtonDisable
                    } else {
                        look.background = colors["silver"].miscButtonDisable;look.border = "3px solid " + colors["silver"].layerBackground
                    }
                } else {
                    if (this.canClick()) {
                        look.background = colors["silver"].darkButton;look.border = "3px solid " + colors["silver"].darkButtonDisable
                    } else {
                        look.background = colors["silver"].darkButtonDisable;look.border = "3px solid " + colors["silver"].darkLayerBackground
                    }
                }
                return look
            },
        },
        107: {
            title() {return player.in.unlockedBreak ? "苔藓主题" : "[已锁定]"},
            canClick() {return options.theme != "moss" && player.in.unlockedBreak},
            unlocked: "true",
            tooltip() {return !player.in.unlockedBreak ? "从超越你的极限获得。" : ""},
            onClick() {
                options.theme = "moss"
	            changeTheme();
	            resizeCanvas();
            },
            style() {
                let look = {width: '100px', minHeight: '45px', color: "var(--textColor)", borderRadius: '0'}
                if (!player.sma.inStarmetalChallenge && !options.themeDarken) {
                    if (this.canClick()) {
                        look.background = colors["moss"].miscButton;look.border = "3px solid " + colors["moss"].miscButtonDisable
                    } else {
                        look.background = colors["moss"].miscButtonDisable;look.border = "3px solid " + colors["moss"].layerBackground
                    }
                } else {
                    if (this.canClick()) {
                        look.background = colors["moss"].darkButton;look.border = "3px solid " + colors["moss"].darkButtonDisable
                    } else {
                        look.background = colors["moss"].darkButtonDisable;look.border = "3px solid " + colors["moss"].darkLayerBackground
                    }
                }
                return look
            },
        },
        108: {
            title() {return player.s.highestSingularityPoints.gt(0) ? "Coral Theme" : "[已锁定]"},
            canClick() {return options.theme != "coral" && player.s.highestSingularityPoints.gt(0)},
            unlocked: "true",
            tooltip() {return player.s.highestSingularityPoints.lte(0) ? "Compress mass to an infinitesimally small space." : ""},
            onClick() {
                options.theme = "coral"
	            changeTheme();
	            resizeCanvas();
            },
            style() {
                let look = {width: '100px', minHeight: '45px', color: "var(--textColor)", borderRadius: '0'}
                if (!player.sma.inStarmetalChallenge && !options.themeDarken) {
                    if (this.canClick()) {
                        look.background = colors["coral"].miscButton;look.border = "3px solid " + colors["coral"].miscButtonDisable
                    } else {
                        look.background = colors["coral"].miscButtonDisable;look.border = "3px solid " + colors["coral"].layerBackground
                    }
                } else {
                    if (this.canClick()) {
                        look.background = colors["coral"].darkButton;look.border = "3px solid " + colors["coral"].darkButtonDisable
                    } else {
                        look.background = colors["coral"].darkButtonDisable;look.border = "3px solid " + colors["coral"].darkLayerBackground
                    }
                }
                return look
            },
        },
        109: {
            title() {return player.au2.au2Unlocked ? "Midnight Theme" : "[已锁定]"},
            canClick() {return options.theme != "midnight" && player.au2.au2Unlocked},
            unlocked: "true",
            tooltip() {return !player.au2.au2Unlocked ? "Begin exploration of a vast expanse." : ""},
            onClick() {
                options.theme = "midnight"
	            changeTheme();
	            resizeCanvas();
            },
            style() {
                let look = {width: '100px', minHeight: '45px', color: "var(--textColor)", borderRadius: '0'}
                if (!player.sma.inStarmetalChallenge && !options.themeDarken) {
                    if (this.canClick()) {
                        look.background = colors["midnight"].miscButton;look.border = "3px solid " + colors["midnight"].miscButtonDisable
                    } else {
                        look.background = colors["midnight"].miscButtonDisable;look.border = "3px solid " + colors["midnight"].layerBackground
                    }
                } else {
                    if (this.canClick()) {
                        look.background = colors["midnight"].darkButton;look.border = "3px solid " + colors["midnight"].darkButtonDisable
                    } else {
                        look.background = colors["midnight"].darkButtonDisable;look.border = "3px solid " + colors["midnight"].darkLayerBackground
                    }
                }
                return look
            },
        },
    },
    tabFormat: [
        ["row", [["clickable", 2], ["clickable", 7], ["clickable", 4], ["clickable", 5]]],
        ["blank", "50px"],
        ["style-row", [
            ["column", [
                ["style-column", [
                    ["style-row", [
                        ["raw-html", "存档选项", {color: "var(--textColor)", fontSize: "20px", fontFamily: "monospace"}]
                    ], {width: "306px", height: "30px", borderBottom: "3px solid var(--regBorder)"}],
                    ["style-row", [
                        ["clickable", 11], ["style-row", [], {width: "3px", height: "80px", background: "var(--regBorder)"}],
                        ["raw-html", () => "<label class=can for='importfile' style='display:flex;align-items:center;justify-content:center;width:94px;height:74px;background:var(--miscButton);border:3px solid var(--miscButtonDisable)'>导入<br>文件</label><input id='importfile' type='file' onchange='importFile()' style='display:none' />", {color: "var(--textColor)", fontFamily: "monospace"}], ["style-row", [], {width: "3px", height: "80px", background: "var(--regBorder)"}],
                        ["clickable", 13],
                    ], {width: "306px", borderBottom: "3px solid var(--regBorder)"}],
                    ["style-row", [
                        ["clickable", 14], ["style-row", [], {width: "3px", height: "80px", background: "var(--regBorder)"}],
                        ["clickable", 15], ["style-row", [], {width: "3px", height: "80px", background: "var(--regBorder)"}],
                        ["clickable", 16],
                    ], {width: "306px", borderBottom: "3px solid var(--regBorder)"}],
                    ["row", [
                        ["bt-clickable", 18], ["style-row", [], {width: "3px", height: "80px", background: "var(--regBorder)"}],
                        ["clickable", 19], ["style-row", [], {width: "3px", height: "80px", background: "var(--regBorder)"}],
                        ["clickable", 17],
                    ]],
                ], {width: "306px", background: "var(--layerBackground)", border: "3px solid var(--regBorder)"}],
                ["blank", "8px"],
                ["style-column", [
                    ["style-row", [
                        ["raw-html", "视觉选项", {color: "var(--textColor)", fontSize: "20px", fontFamily: "monospace"}],
                    ], {width: "306px", height: "30px", borderBottom: "3px solid var(--regBorder)"}],
                    ["style-row", [
                        ["raw-html", "主题", {color: "var(--textColor)", fontSize: "16px", fontFamily: "monospace"}],
                    ], {width: "306px", height: "25px", background: "var(--miscButtonDisable)", borderBottom: "3px solid var(--regBorder)"}],
                    ["style-row", [
                        ["clickable", 101], ["style-row", [], {width: "3px", height: "45px", background: "var(--regBorder)"}],
                        ["clickable", 102], ["style-row", [], {width: "3px", height: "45px", background: "var(--regBorder)"}],
                        ["clickable", 103],
                    ], {width: "306px", borderBottom: "3px solid var(--regBorder)"}],
                    ["style-row", [
                        ["clickable", 104], ["style-row", [], {width: "3px", height: "45px", background: "var(--regBorder)"}],
                        ["clickable", 105], ["style-row", [], {width: "3px", height: "45px", background: "var(--regBorder)"}],
                        ["clickable", 106],
                    ], {width: "306px", borderBottom: "3px solid var(--regBorder)"}],
                    ["style-row", [
                        ["clickable", 107], ["style-row", [], {width: "3px", height: "45px", background: "var(--regBorder)"}],
                        ["clickable", 108], ["style-row", [], {width: "3px", height: "45px", background: "var(--regBorder)"}],
                        ["clickable", 109],
                    ], {width: "306px", borderBottom: "3px solid var(--regBorder)"}],
                    ["style-row", [
                        ["clickable", 100]
                    ], {width: "306px", borderBottom: "3px solid var(--regBorder)"}],
                    ["style-row", [
                        ["raw-html", "布局", {color: "var(--textColor)", fontSize: "16px", fontFamily: "monospace"}],
                    ], {width: "306px", height: "25px", background: "var(--miscButtonDisable)", borderBottom: "3px solid var(--regBorder)"}],
                    ["style-row", [
                        ["clickable", 31], ["style-row", [], {width: "3px", height: "45px", background: "var(--regBorder)"}],
                        ["clickable", 32], ["style-row", [], {width: "3px", height: "45px", background: "var(--regBorder)"}],
                        ["clickable", 33],
                    ], {width: "306px"}],
                ], {width: "306px", background: "var(--layerBackground)", border: "3px solid var(--regBorder)"}],
            ]],
            ["blank", "8px"],
            ["column", [
                ["style-column", [
                    ["style-row", [
                        ["raw-html", "开关选项", {color: "var(--textColor)", fontSize: "20px", fontFamily: "monospace"}]
                    ], {width: "306px", height: "30px", borderBottom: "3px solid var(--regBorder)"}],
                    ["style-row", [
                        ["clickable", 21], ["style-row", [], {width: "3px", height: "60px", background: "var(--regBorder)"}],
                        ["clickable", 22], ["style-row", [], {width: "3px", height: "60px", background: "var(--regBorder)"}],
                        ["clickable", 23],
                    ], {width: "306px", borderBottom: "3px solid var(--regBorder)"}],
                    ["style-row", [
                        ["clickable", 24], ["style-row", [], {width: "3px", height: "60px", background: "var(--regBorder)"}],
                        ["clickable", 25], ["style-row", [], {width: "3px", height: "60px", background: "var(--regBorder)"}],
                        ["clickable", 26],
                    ], {width: "306px", borderBottom: "3px solid var(--regBorder)"}],
                    ["style-row", [
                        ["clickable", 27],
                        ["style-column", [
                            ["raw-html", "通用快捷键", {color: "var(--textColor)", fontSize: "14px", fontFamily: "monospace"}],
                            ["raw-html", "Alt - 切换音乐关闭", {color: "var(--textColor)", fontSize: "12px", fontFamily: "monospace"}],
                            ["raw-html", "[未来更多]", {color: "var(--textColor)", fontSize: "12px", fontFamily: "monospace"}],
                        ], {width: "203px", height: "60px", borderLeft: "3px solid var(--regBorder)"}],
                    ], {width: "306px", borderBottom: "3px solid var(--regBorder)"}],
                    ["style-row", [
                        ["clickable", 28],
                        ["style-column", [
                            ["raw-html", () => {return "音量: " + options.musicVolume}, {color: "var(--textColor)", fontSize: "16px", fontFamily: "monospace"}],
                            ["blank", "5px"],
                            ["raw-html", () => {return "</td><td><div style=\"margin: 0 10px\"><input type=range id=音量 name=音乐音量 min=1 max=10 value=" + options.musicVolume + " oninput=updateMusicVolume()><br>"}, {color: "var(--textColor)", fontSize: "18px", fontFamily: "monospace"}],
                        ], {width: "203px", height: "57px", borderLeft: "3px solid var(--regBorder)"}],
                    ], {width: "306px"}],
                ], {width: "306px", background: "var(--layerBackground)", border: "3px solid var(--regBorder)"}],
                ["blank", "8px"],
                ["top-column", [
                    ["style-row", [
                        ["raw-html", "致谢", {color: "var(--textColor)", fontSize: "20px", fontFamily: "monospace"}],
                    ], {width: "306px", height: "30px", borderBottom: "3px solid var(--regBorder)"}],
                    ["top-column", [
                        ["blank", "10px"]
                        ["raw-html", "游戏制作：Icecreamdude", {color: "var(--textColor)", fontSize: "14px", fontFamily: "monospace"}],
                        ["raw-html", "音乐：Icecreamdude !Sweet 150percent Citrine/Niko/Flushmak<br>" +
                            "内容：Icecreamdude Forwaken<br>" +
                            "创意：Nova<br>" +
                            "美术：Jtoh_Sc Lemonsja<br>" +
                            "测试：Nova Piterpicher Vel<br>" +
                            "修复：Tsanth Forwaken", {color: "var(--textColor)", fontSize: "12px", fontFamily: "monospace"}],
                    ], {width: "306px", height: "206px"}],
                    ["style-row", [
                        ["raw-html", () => "<a href=https://discord.gg/icecreamdude-s-incremental-games-850817562040467556><button class=can style='display:flex;align-items:center;justify-content:center;width:306px;height:40px;font-size:20px;color:#dde0fc;background:#5865f2;border:3px solid #2c3279'>加入 Discord！</button></a>", {fontFamily: "monospace",}],
                    ], {width: "306px", height: "40px", borderTop: "3px solid var(--regBorder)"}],
                    ["style-row", [
                        ["raw-html", () => {return "游戏时间：" + formatTime(player.timePlayed)}, {color: "var(--textColor)", fontSize: "16px", fontFamily: "monospace"}],
                    ], {width: "306px", height: "30px", borderTop: "3px solid var(--regBorder)"}],
                ], {width: "306px", height: "315px", background: "var(--layerBackground)", border: "3px solid var(--regBorder)"}],
            ]],
        ], {width: "634px", background: "var(--miscButtonHover)", border: "3px solid var(--regBorder)", padding: "8px"}],
        ["blank", "25px"],
    ],
    layerShown() { return false }
})