addLayer("i", {
    name: "起源", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "OR", // This appears on the layer's node. Default is the id with the first letter capitalized
    row: 1,
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,

        bestPoints: new Decimal(10),
        preOTFMult: new Decimal(1),
        postOTFMult: new Decimal(1),

        cutsceneInput: new Decimal(0),
        cutsceneInputAmount: new Decimal(0),

        pylonBuilt: false,
        pylonEnergyMax: new Decimal(100),
        pylonEnergy: new Decimal(0),
        pylonEnergyEffect: new Decimal(1),
        pylonEnergyEffect2: new Decimal(1),
        pylonEnergyEffect3: new Decimal(1),
        pylonEnergyPerSecond: new Decimal(0),
        
        pylonPassiveEffect: new Decimal(1),

        pylonTier: new Decimal(1),
        pylonTierEffect: new Decimal(1),
        
        doomSoftcapStart: new Decimal("1e2000000"),
    }
    },
    automate() {
        if (player.i.auto == true && hasMilestone("ip", 19)) {
            buyUpgrade("i", 11)
            buyUpgrade("i", 12)
            buyUpgrade("i", 13)
            buyUpgrade("i", 14)
            buyUpgrade("i", 15)
            buyUpgrade("i", 16)
            buyUpgrade("i", 17)
            buyUpgrade("i", 18)
            buyUpgrade("i", 19)
            buyUpgrade("i", 21)
        }
        if (hasMilestone("s", 17)) {
            buyUpgrade("i", 11)
            buyUpgrade("i", 12)
            buyUpgrade("i", 13)
            buyUpgrade("i", 14)
            buyUpgrade("i", 15)
            buyUpgrade("i", 16)
            buyUpgrade("i", 17)
            buyUpgrade("i", 18)
            buyUpgrade("i", 19)
            buyUpgrade("i", 21)
            buyUpgrade("i", 22)
            buyUpgrade("i", 23)
            buyUpgrade("i", 24)
            buyUpgrade("i", 25)
            buyUpgrade("i", 26)
            buyUpgrade("i", 27)
            buyUpgrade("i", 28)
            buyUpgrade("i", 29)
            buyUpgrade("i", 30)
            buyUpgrade("i", 31)
            buyUpgrade("i", 32)
            buyUpgrade("i", 33)
            buyUpgrade("i", 34)
            buyUpgrade("i", 35)
            buyUpgrade("i", 36)
            buyUpgrade("i", 37)
            buyUpgrade("i", 38)
            buyUpgrade("i", 39)
            buyUpgrade("i", 41)
            buyUpgrade("i", 101)
    }},
    nodeStyle: {
        background: "linear-gradient(315deg, #bababa 0%, #efefef 100%)",
        backgroundOrigin: "border-box",
        borderColor: "#333",
    },
    tooltip: "起源",
    branches: ["r", "f"],
    color: "white",
    update(delta) {
        let onepersec = new Decimal(1)

       // stopRain()

        // START OF PRE-OTF-MULT MODIFIERS
        player.i.preOTFMult = new Decimal(1)
        if (hasUpgrade("s", 11)) player.i.preOTFMult = player.i.preOTFMult.mul(10)
        player.i.preOTFMult = player.i.preOTFMult.mul(levelableEffect("pu", 301)[1])
        if (inChallenge("ip", 13) || player.po.hex || hasUpgrade("s", 18)) player.i.preOTFMult = player.i.preOTFMult.mul(player.hre.refinementEffect[5][1])
        if (hasMilestone("r", 20)) player.i.preOTFMult = player.i.preOTFMult.mul(100)
        player.i.preOTFMult = player.i.preOTFMult.mul(player.d.boosterEffects[15])
        if (hasMilestone("fa", 22)) player.i.preOTFMult = player.i.preOTFMult.mul(player.fa.milestoneEffect[10])
        player.i.preOTFMult = player.i.preOTFMult.mul(player.depth2.negComboEffect)

        player.i.preOTFMult = player.i.preOTFMult.pow(player.i.pylonEnergyEffect2)
        player.i.preOTFMult = player.i.preOTFMult.pow(levelableEffect("car", 301)[0])
        //----------------------------------------

        //cutscene
        player.i.cutsceneInputAmount = player.i.cutsceneInput.floor()
        if (player.i.cutsceneInput.lt(0)) player.i.cutsceneInputAmount = new Decimal(0)
        // START OF POST-OTF-MULT MODIFIERS
        player.i.postOTFMult = new Decimal(1)
        player.i.postOTFMult = player.i.postOTFMult.mul(player.depth2.comboEffect)
        if (player.ir.iriditeDefeated) player.i.postOTFMult = player.i.postOTFMult.mul(1e12)

        player.i.postOTFMult = player.i.postOTFMult.pow(player.i.pylonEnergyEffect3)
        player.i.postOTFMult = player.i.postOTFMult.pow(levelableEffect("car", 302)[0])

        //----------------------------------------

        // START OF CELESTIAL POINT MODIFIERS
        player.gain = new Decimal(1)
        player.gain = player.gain.mul(player.r.rankEffect)
        player.gain = player.gain.mul(player.r.tierEffect)
        player.gain = player.gain.mul(buyableEffect("f", 11))
        player.gain = player.gain.mul(buyableEffect("f", 12))
        player.gain = player.gain.mul(buyableEffect("f", 13))
        player.gain = player.gain.mul(buyableEffect("f", 14))
        player.gain = player.gain.mul(buyableEffect("f", 15))
        player.gain = player.gain.mul(buyableEffect("f", 16))
        player.gain = player.gain.mul(buyableEffect("f", 17))
        player.gain = player.gain.mul(buyableEffect("f", 18))
        if (hasUpgrade("cs", 201)) player.gain = player.gain.mul(buyableEffect("f", 101))
        player.gain = player.gain.mul(player.r.tetrEffect)
        if (hasUpgrade("p", 11)) player.gain = player.gain.mul(3)
        if (hasUpgrade("p", 12)) player.gain = player.gain.mul(player.p.prestigeEffect)
        player.gain = player.gain.mul(player.f.factorPowerEffect)
        player.gain = player.gain.mul(buyableEffect("t", 15))
        player.gain = player.gain.mul(buyableEffect("g", 14))
        player.gain = player.gain.mul(player.gh.grasshopperEffects[0])
        if (hasMilestone("r", 13)) player.gain = player.gain.mul(player.g.grassEffect2)
        player.gain = player.gain.mul(buyableEffect("m", 14))
        if (player.cb.effectActivate) player.gain = player.gain.mul(player.cb.levelEffect)
        player.gain = player.gain.mul(levelableEffect("pet", 101)[0])
        player.gain = player.gain.mul(player.d.boosterEffects[0])
        if (!inChallenge("ip", 16)) player.gain = player.gain.mul(player.rf.abilityEffects[0])
        player.gain = player.gain.mul(player.ad.antimatterEffect)
        if (inChallenge("ip", 13) || player.po.hex || hasUpgrade("s", 18)) player.gain = player.gain.mul(player.hpr.rankEffect[0][0])
        if (inChallenge("ip", 13) || player.po.hex || hasUpgrade("s", 18)) player.gain = player.gain.mul(player.hpr.rankEffect[1][0])
        if (inChallenge("ip", 13) || player.po.hex || hasUpgrade("s", 18)) player.gain = player.gain.mul(player.hpr.rankEffect[2][0])
        if (inChallenge("ip", 13) || player.po.hex || hasUpgrade("s", 18)) player.gain = player.gain.mul(player.hpr.rankEffect[3][0])
        if (inChallenge("ip", 13) || player.po.hex || hasUpgrade("s", 18)) player.gain = player.gain.mul(player.hpr.rankEffect[4][0])
        if (inChallenge("ip", 13) || player.po.hex || hasUpgrade("s", 18)) player.gain = player.gain.mul(player.hpr.rankEffect[5][0])

        // CHALLENGE CONTENT
        player.gain = player.gain.div(player.pe.pestEffect[0])
        if (inChallenge("ip", 13)) player.gain = player.gain.pow(0.75)
        if (inChallenge("ip", 14)) player.gain = player.gain.div(player.r.challengeIVEffect)
        if (inChallenge("ip", 15)) player.gain = player.gain.pow(0.9)
        if (hasUpgrade("d", 13)) player.gain = player.gain.mul(upgradeEffect("d", 13))
        if (hasUpgrade("d", 17)) player.gain = player.gain.mul(upgradeEffect("d", 17))
        if (inChallenge("ip", 16)) player.gain = player.gain.pow(0.05)
        if (inChallenge("ip", 16)) player.gain = player.gain.mul(player.rf.abilityEffects[0])
        if (hasUpgrade("rf", 17)) player.gain = player.gain.mul(upgradeEffect("rf", 17))

        // CONTINUED REGULAR MODIFIERS
        if (player.pol.pollinatorEffects.beetle.enabled) player.gain = player.gain.mul(player.pol.pollinatorEffects.beetle.effects[0])
        player.gain = player.gain.mul(buyableEffect("gh", 31))
        player.gain = player.gain.mul(player.id.infinityPowerEffect2)
        player.gain = player.gain.mul(player.r.timeCubeEffects[0])
        player.gain = player.gain.mul(player.ca.replicantiEffect3)
        player.gain = player.gain.mul(player.i.preOTFMult)
        player.gain = player.gain.mul(player.co.cores.point.effect[0])
        if (hasUpgrade("ep2", 1)) player.gain = player.gain.mul(upgradeEffect("ep2", 1))

        // POWER MODIFIERS
        if (hasUpgrade("bi", 11)) player.gain = player.gain.pow(1.1)
        player.gain = player.gain.pow(player.co.cores.point.effect[1])
        player.gain = player.gain.pow(player.sd.singularityPowerEffect3)
        player.gain = player.gain.pow(player.st.starPowerEffect)
        player.gain = player.gain.pow(player.se.starsExploreEffect[0][1])
        player.gain = player.gain.pow(levelableEffect("ir", 2)[0])
        player.gain = player.gain.pow(player.cof.coreFragmentEffects[0])
        player.gain = player.gain.pow(buyableEffect("cof", 12))
        player.gain = player.gain.pow(buyableEffect("gwaTemple", 22))

        // SOFTCAP OF DOOM
        player.i.doomSoftcap = new Decimal(0.5)

        // SOFTCAP OF DOOM START
        player.i.doomSoftcapStart = new Decimal("1e2000000")
        player.i.doomSoftcapStart = player.i.doomSoftcapStart.mul(levelableEffect("car", 313)[0])
        player.i.doomSoftcapStart = player.i.doomSoftcapStart.pow(buyableEffect("fa", 405))

        // SOFTCAP WEAKENER
        let doomWeaken = new Decimal(1)
        doomWeaken = doomWeaken.mul(buyableEffect("fa", 401))
        if (player.zarDungeon.zarDefeated) doomWeaken = doomWeaken.mul(1.5)

        // PLACE ANY BASE MODIFIERS TO SOFTCAP OF DOOM BEFORE SCALING
        let amt = player.points
        if (player.gain.gte(player.points)) amt = player.gain
        player.i.doomSoftcap = player.i.doomSoftcap.div(amt.div(player.i.doomSoftcapStart).add(1).log(player.i.doomSoftcapStart).div(doomWeaken).add(1))
        if (hasUpgrade("depth2", 104)) player.i.doomSoftcap = player.i.doomSoftcap.max(0.01)

        // APPLY DOOM SOFTCAP
        if (player.gain.gt(player.i.doomSoftcapStart)) player.gain = player.gain.div(player.i.doomSoftcapStart).pow(player.i.doomSoftcap).mul(player.i.doomSoftcapStart)

        // ABNORMAL MODIFIERS, PLACE NEW MODIFIERS BEFORE THIS
        if (player.r.timeReversed) {
            player.gain = player.gain.mul(0)
            player.points = player.points.div(player.points.add(1).log10().mul(0.1).add(1).mul(delta))
        }
        if (player.po.halter.points.enabled == 1) player.gain = player.gain.div(player.po.halter.points.halt)
        if (player.po.halter.points.enabled == 2 && player.gain.gt(player.po.halter.points.halt)) player.gain = player.po.halter.points.halt
        if (!player.in.breakInfinity && player.gain.gte("9.99e309")) player.gain = new Decimal("9.99e309")

        // CELESTIAL POINT PER SECOND
        player.points = player.points.add(player.gain.mul(delta))

        //pylon
        player.i.pylonEnergyMax = Decimal.pow(1e6, player.i.pylonTier)

        if (player.i.pylonBuilt)
        {
            player.i.pylonEnergyPerSecond = new Decimal(1)
            player.i.pylonEnergyPerSecond = player.i.pylonEnergyPerSecond.mul(buyableEffect("i", 11))
            player.i.pylonEnergyPerSecond = player.i.pylonEnergyPerSecond.mul(buyableEffect("i", 12))
            player.i.pylonEnergyPerSecond = player.i.pylonEnergyPerSecond.mul(buyableEffect("i", 13))
            player.i.pylonEnergyPerSecond = player.i.pylonEnergyPerSecond.mul(player.in.pylonEnergyEffect3)
            player.i.pylonEnergyPerSecond = player.i.pylonEnergyPerSecond.mul(buyableEffect("sme", 143))

            player.i.pylonPassiveEffect = player.points.pow(0.002).add(1).pow(player.i.pylonTierEffect)
        } else
        {
            player.i.pylonEnergyPerSecond = new Decimal(0)

            player.i.pylonPassiveEffect = new Decimal(1)
        }

        if (player.i.pylonEnergy.gte(player.i.pylonEnergyMax))
        {
            player.i.pylonEnergy = player.i.pylonEnergyMax
            player.i.pylonEnergyPerSecond = new Decimal(0)
        }
        player.i.pylonEnergy = player.i.pylonEnergy.add(player.i.pylonEnergyPerSecond.mul(delta))

        player.i.pylonEnergyEffect = player.i.pylonEnergy.pow(4).add(1).pow(player.i.pylonTierEffect)
        player.i.pylonEnergyEffect2 = player.i.pylonEnergy.pow(0.15).add(1).pow(player.i.pylonTierEffect)
        if (player.i.pylonEnergyEffect2.gt(10000)) player.i.pylonEnergyEffect2 = player.i.pylonEnergyEffect2.div(10000).pow(0.1).mul(10000)
        player.i.pylonEnergyEffect3 = player.i.pylonEnergy.pow(0.1).add(1).pow(player.i.pylonTierEffect)
        if (player.i.pylonEnergyEffect3.gt(1000)) player.i.pylonEnergyEffect3 = player.i.pylonEnergyEffect3.div(1000).pow(0.1).mul(1000)

        player.i.pylonTierEffect = player.i.pylonTier.sub(1).pow(0.3).div(10).add(1)

        //tickspeed
        player.uni["U1"].tickspeed = new Decimal(1)
        player.uni["U1"].tickspeed = player.uni["U1"].tickspeed.mul(player.i.pylonEnergyEffect)
        player.uni["U1"].tickspeed = player.uni["U1"].tickspeed.mul(buyableEffect("gwaTemple", 21))
        // BEST CELESTIAL POINTS
        if (player.i.bestPoints.lt(player.points)) player.i.bestPoints = player.points
    },
    bars: {
        infbar: {
            unlocked() { return hasUpgrade("i", 21) && !player.in.unlockedInfinity },
            direction: RIGHT,
            width: 700,
            height: 50,
            progress() {
                return player.points.add(1).log10().div("308.25")
            },
            baseStyle: {backgroundColor: "rgba(0,0,0,0.5)", margin: "10px auto"},
            fillStyle: { backgroundColor: "#b28500" },
            borderStyle: { border: "3px solid", borderRadius: "20px"},
            display() {
                return "<h2>" + format(player.points.add(1).log10().div("308.25").mul(100)) + "%</h2>";
            },
        },
    },
    upgrades: {
        11: {
            title: "特性 I",
            unlocked() { return true },
            description: "解锁等级。",
            cost: new Decimal(10),
            currencyLocation() { return player },
            currencyDisplayName: "天体点数",
            currencyInternalName: "points",
            style: {color: "rgba(0,0,0,0.8)", border: "3px solid rgba(0,0,0,0.5)", borderRadius: "15px", margin: "2px"},
        },
        12: {
            title: "特性 II",
            unlocked() { return hasUpgrade("i", 11) },
            description: "解锁因子。",
            cost: new Decimal(40),
            currencyLocation() { return player },
            currencyDisplayName: "天体点数",
            currencyInternalName: "points",
            style: {color: "rgba(0,0,0,0.8)", border: "3px solid rgba(0,0,0,0.5)", borderRadius: "15px", margin: "2px"},
        },
        13: {
            title: "四阶",
            unlocked() { return hasUpgrade("i", 12) },
            description: "解锁四阶（在等级中）。",
            cost: new Decimal(2500),
            currencyLocation() { return player },
            currencyDisplayName: "天体点数",
            currencyInternalName: "points",
            style: {color: "rgba(0,0,0,0.8)", border: "3px solid rgba(0,0,0,0.5)", borderRadius: "15px", margin: "2px"},
        },
        14: {
            title: "威望",
            unlocked() { return hasUpgrade("i", 13) },
            description: "解锁威望。",
            cost: new Decimal(150000),
            currencyLocation() { return player },
            currencyDisplayName: "天体点数",
            currencyInternalName: "points",
            style: {color: "rgba(0,0,0,0.8)", border: "3px solid rgba(0,0,0,0.5)", borderRadius: "15px", margin: "2px"},
        },
        15: {
            title: "力量因子",
            unlocked() { return hasUpgrade("i", 14) },
            description: "解锁力量因子（在因子中）。",
            cost: new Decimal(4e10),
            currencyLocation() { return player },
            currencyDisplayName: "天体点数",
            currencyInternalName: "points",
            style: {color: "rgba(0,0,0,0.8)", border: "3px solid rgba(0,0,0,0.5)", borderRadius: "15px", margin: "2px"},
        },
        16: {
            title: "树木",
            unlocked() { return hasUpgrade("i", 15) },
            description: "解锁树木。",
            cost: new Decimal(1e15),
            currencyLocation() { return player },
            currencyDisplayName: "天体点数",
            currencyInternalName: "points",
            style: {color: "rgba(0,0,0,0.8)", border: "3px solid rgba(0,0,0,0.5)", borderRadius: "15px", margin: "2px"},
        },
        17: {
            title: "草地",
            unlocked() { return hasUpgrade("i", 16) },
            description: "解锁草地。",
            cost: new Decimal(1e20),
            currencyLocation() { return player },
            currencyDisplayName: "天体点数",
            currencyInternalName: "points",
            style: {color: "rgba(0,0,0,0.8)", border: "3px solid rgba(0,0,0,0.5)", borderRadius: "15px", margin: "2px"},
        },
        18: {
            title: "五阶",
            unlocked() { return hasUpgrade("i", 17) },
            description: "解锁五阶（在等级中）。",
            cost: new Decimal(1e28),
            currencyLocation() { return player },
            currencyDisplayName: "天体点数",
            currencyInternalName: "points",
            style: {color: "rgba(0,0,0,0.8)", border: "3px solid rgba(0,0,0,0.5)", borderRadius: "15px", margin: "2px"},
        },
        19: {
            title: "回溯",
            unlocked() { return hasUpgrade("i", 18) },
            description: "解锁回溯。",
            onPurchase() {
                if (!hasAchievement("achievements", 18)) completeAchievement("achievements", 18)
            },
            cost: new Decimal(1e100),
            currencyLocation() { return player },
            currencyDisplayName: "天体点数",
            currencyInternalName: "points",
            style: {color: "rgba(0,0,0,0.8)", border: "3px solid rgba(0,0,0,0.5)", borderRadius: "15px", margin: "2px"},
        },
        21: {
            title: "OTF",
            unlocked() { return hasUpgrade("i", 19) },
            description: "解锁异界特性。",
            cost: new Decimal(1e150),
            currencyLocation() { return player },
            currencyDisplayName: "天体点数",
            currencyInternalName: "points",
            style: {color: "rgba(0,0,0,0.8)", border: "3px solid rgba(0,0,0,0.5)", borderRadius: "15px", margin: "2px"},
        },
        22: {
            title: "授粉",
            unlocked() { return player.in.unlockedBreak},
            description: "利用害虫的经验来创造传粉者。",
            cost: new Decimal("1e450"),
            currencyLocation() { return player },
            currencyDisplayName: "天体点数",
            currencyInternalName: "points",
            style: {color: "rgba(0,0,0,0.8)", border: "3px solid rgba(0,0,0,0.5)", borderRadius: "15px", margin: "2px"},
        },
        23: {
            title: "钢铁",
            unlocked() { return hasUpgrade("i", 22) && hasUpgrade("bi", 106)},
            description: "解锁钢铁重置层（在草跃中）。",
            cost: new Decimal("1e800"),
            currencyLocation() { return player },
            currencyDisplayName: "天体点数",
            currencyInternalName: "points",
            style: {color: "rgba(0,0,0,0.8)", border: "3px solid rgba(0,0,0,0.5)", borderRadius: "15px", margin: "2px"},
        },
        24: {
            title: "结晶",
            unlocked() { return hasUpgrade("i", 23) && hasUpgrade("bi", 106)},
            description: "解锁结晶重置层（在威望中）。",
            cost: new Decimal("1e1000"),
            currencyLocation() { return player },
            currencyDisplayName: "天体点数",
            currencyInternalName: "points",
            style: {color: "rgba(0,0,0,0.8)", border: "3px solid rgba(0,0,0,0.5)", borderRadius: "15px", margin: "2px"},
        },
        25: {
            title: "高效授粉",
            unlocked() { return hasUpgrade("i", 24) && hasUpgrade("bi", 106)},
            description: "解锁更多传粉者升级。",
            cost: new Decimal("1e1200"),
            currencyLocation() { return player },
            currencyDisplayName: "天体点数",
            currencyInternalName: "points",
            style: {color: "rgba(0,0,0,0.8)", border: "3px solid rgba(0,0,0,0.5)", borderRadius: "15px", margin: "2px"},
        },
        26: {
            title: "时间逆转",
            unlocked() { return hasUpgrade("i", 25) && hasUpgrade("bi", 106)},
            description: "解锁时间逆转（在等级层中）。",
            cost: new Decimal("1e1400"),
            currencyLocation() { return player },
            currencyDisplayName: "天体点数",
            currencyInternalName: "points",
            style: {color: "rgba(0,0,0,0.8)", border: "3px solid rgba(0,0,0,0.5)", borderRadius: "15px", margin: "2px"},
        },
        27: {
            title: "五阶化",
            unlocked() { return hasUpgrade("i", 26) && hasUpgrade("bi", 106)},
            description: "自动获得五阶，无需重置。",
            cost: new Decimal("1e1600"),
            currencyLocation() { return player },
            currencyDisplayName: "天体点数",
            currencyInternalName: "points",
            style: {color: "rgba(0,0,0,0.8)", border: "3px solid rgba(0,0,0,0.5)", borderRadius: "15px", margin: "2px"},
        },
        28: {
            title: "第二OTF槽位...",
            unlocked() { return hasUpgrade("i", 27) && hasUpgrade("bi", 106)},
            description: "获得第二个OTF槽位。",
            cost: new Decimal("1e1800"),
            currencyLocation() { return player },
            currencyDisplayName: "天体点数",
            currencyInternalName: "points",
            style: {color: "rgba(0,0,0,0.8)", border: "3px solid rgba(0,0,0,0.5)", borderRadius: "15px", margin: "2px"},
        },
        29: {
            title: "真精炼",
            unlocked() { return hasUpgrade("i", 32) && hasUpgrade("bi", 106) && player.ca.unlockedCante},
            description: "解锁纯净魔咒。",
            cost: new Decimal("1e3000"),
            currencyLocation() { return player },
            currencyDisplayName: "天体点数",
            currencyInternalName: "points",
            style: {color: "rgba(0,0,0,0.8)", border: "3px solid rgba(0,0,0,0.5)", borderRadius: "15px", margin: "2px"},
        },
        30: {
            title: "魔咒力量",
            unlocked() { return hasUpgrade("i", 29) && hasUpgrade("bi", 106) && player.ca.unlockedCante},
            description: "解锁力量魔咒。",
            cost: new Decimal("1e3600"),
            currencyLocation() { return player },
            currencyDisplayName: "天体点数",
            currencyInternalName: "points",
            style: {color: "rgba(0,0,0,0.8)", border: "3px solid rgba(0,0,0,0.5)", borderRadius: "15px", margin: "2px"},
        },
        31: {
            title: "自动CDP",
            unlocked() { return (hasUpgrade("i", 28) && hasUpgrade("bi", 106) && player.po.dice && player.ca.unlockedCante && player.ev.evolutionsUnlocked[5]) || hasUpgrade("i", 31)},
            description: "Gain 5% challenge dice points 每秒.",
            cost: new Decimal("1e4600"),
            currencyLocation() { return player },
            currencyDisplayName: "天体点数",
            currencyInternalName: "points",
            style: {color: "rgba(0,0,0,0.8)", border: "3px solid rgba(0,0,0,0.5)", borderRadius: "15px", margin: "2px"},
        },
        32: {
            title: "完全五阶化",
            unlocked() { return hasUpgrade("i", 28) && hasUpgrade("bi", 106)},
            description: "You can now buy max pent.",
            cost: new Decimal("1e2400"),
            currencyLocation() { return player },
            currencyDisplayName: "天体点数",
            currencyInternalName: "points",
            style: {color: "rgba(0,0,0,0.8)", border: "3px solid rgba(0,0,0,0.5)", borderRadius: "15px", margin: "2px"},
        },
        101: {
            title: "工厂",
            unlocked() { return hasMilestone("s", 11)},
            description: "解锁工厂。",
            cost: new Decimal("1e16000"),
            currencyLocation() { return player },
            currencyDisplayName: "天体点数",
            currencyInternalName: "points",
            style: {color: "rgba(0,0,0,0.8)", border: "3px solid rgba(0,0,0,0.5)", borderRadius: "15px", margin: "2px"},
        },
    },
    clickables: {
        11: {
            title() { return "<h2>Replay Cutscene" },
            canClick() { return true },
            unlocked() { return true },
            onClick() {
                player.c.cutscene[player.i.cutsceneInput] = true
            },
            style: { width: '300px', "min-height": '60px' },
        },
        12: {
            title() { return "<h2>Build the Universe 1 Pylon<br>Cost: 1,000 Ancient Core Fragments" },
            canClick() { return player.cof.coreFragments[0].gte(1000) },
            unlocked() { return !player.i.pylonBuilt },
            onClick() {
                player.cof.coreFragments[0] = player.cof.coreFragments[0].sub(1000)

                player.i.pylonBuilt = true
            },
            style: {width: "600px", minHeight: "200px", color: "#1b110eff", backgroundImage: "radial-gradient(circle, #674134 80%, #A87B5A 95%, #C49574 110%)", border: "3px solid rgba(0,0,0,0.5)", borderRadius: "15px"},
        },
        13: {
            title() { return "<h2>Tier up the Ancient Pylon" },
            canClick() { return player.i.pylonEnergy.gte(player.i.pylonEnergyMax) },
            unlocked() { return player.i.pylonEnergy.gte(player.i.pylonEnergyMax) },
            onClick() {
                player.i.pylonEnergy = new Decimal(0)

                player.i.pylonTier = player.i.pylonTier.add(1)
            },
            style: {width: "600px", minHeight: "200px", color: "#1b110eff", backgroundImage: "radial-gradient(circle, #674134 80%, #A87B5A 95%, #C49574 110%)", border: "3px solid rgba(0,0,0,0.5)", borderRadius: "15px"},
        },
    },
    buyables: {
        11: {
            costBase() { return new Decimal(50) },
            costGrowth() { return new Decimal(1.2) },
            purchaseLimit() { return new Decimal(500) },
            currency() { return player.cof.coreFragments[0] },
            pay(amt) { player.cof.coreFragments[0] = this.currency().sub(amt) },
            effect(x) { return getBuyableAmount(this.layer, this.id).add(1)},
            unlocked() { return player.i.pylonBuilt },
            cost(x) { return this.costGrowth().pow(x || getBuyableAmount(this.layer, this.id)).mul(this.costBase()).floor() },
            canAfford() { return this.currency().gte(this.cost()) },
            title() {
                return "Ancient Pylon Factor I"
            },
            display() {
                return 'which are boosting ancient pylon energy by x' + format(tmp[this.layer].buyables[this.id].effect) + '.\n\
                    Cost: ' + formatWhole(tmp[this.layer].buyables[this.id].cost) + ' Core Fragments'
            },
            buy(mult) {
                if (mult != true) {
                    let buyonecost = new Decimal(this.costGrowth()).pow(getBuyableAmount(this.layer, this.id)).mul(this.costBase())
                    this.pay(buyonecost)

                    setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                } else {
                    let max = Decimal.affordGeometricSeries(this.currency(), this.costBase(), this.costGrowth(), getBuyableAmount(this.layer, this.id))
                    if (max.gt(this.purchaseLimit().sub(getBuyableAmount(this.layer, this.id)))) { max = this.purchaseLimit().sub(getBuyableAmount(this.layer, this.id)) }
                    let cost = Decimal.sumGeometricSeries(max, this.costBase(), this.costGrowth(), getBuyableAmount(this.layer, this.id))
                    this.pay(cost)

                    setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
                }
            },
            style: { width: '275px', height: '150px', color: "black", backgroundImage: "linear-gradient(120deg, #B8916A 0%, #BE8267 100%)" }
        },
        12: {
            costBase() { return new Decimal(250) },
            costGrowth() { return new Decimal(1.25) },
            purchaseLimit() { return new Decimal(500) },
            currency() { return player.cof.coreFragments[0] },
            pay(amt) { player.cof.coreFragments[0] = this.currency().sub(amt) },
            effect(x) { return getBuyableAmount(this.layer, this.id).add(1)},
            unlocked() { return player.i.pylonBuilt },
            cost(x) { return this.costGrowth().pow(x || getBuyableAmount(this.layer, this.id)).mul(this.costBase()).floor() },
            canAfford() { return this.currency().gte(this.cost()) },
            title() {
                return "Ancient Pylon Factor II"
            },
            display() {
                return 'which are boosting ancient pylon energy by x' + format(tmp[this.layer].buyables[this.id].effect) + '.\n\
                    Cost: ' + formatWhole(tmp[this.layer].buyables[this.id].cost) + ' Core Fragments'
            },
            buy(mult) {
                if (mult != true) {
                    let buyonecost = new Decimal(this.costGrowth()).pow(getBuyableAmount(this.layer, this.id)).mul(this.costBase())
                    this.pay(buyonecost)

                    setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                } else {
                    let max = Decimal.affordGeometricSeries(this.currency(), this.costBase(), this.costGrowth(), getBuyableAmount(this.layer, this.id))
                    if (max.gt(this.purchaseLimit().sub(getBuyableAmount(this.layer, this.id)))) { max = this.purchaseLimit().sub(getBuyableAmount(this.layer, this.id)) }
                    let cost = Decimal.sumGeometricSeries(max, this.costBase(), this.costGrowth(), getBuyableAmount(this.layer, this.id))
                    this.pay(cost)

                    setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
                }
            },
            style: { width: '275px', height: '150px', color: "black", backgroundImage: "linear-gradient(120deg, #B8916A 0%, #BE8267 100%)" }
        },
        13: {
            costBase() { return new Decimal(1500) },
            costGrowth() { return new Decimal(1.3) },
            purchaseLimit() { return new Decimal(500) },
            currency() { return player.cof.coreFragments[0] },
            pay(amt) { player.cof.coreFragments[0] = this.currency().sub(amt) },
            effect(x) { return getBuyableAmount(this.layer, this.id).add(1)},
            unlocked() { return player.i.pylonBuilt },
            cost(x) { return this.costGrowth().pow(x || getBuyableAmount(this.layer, this.id)).mul(this.costBase()).floor() },
            canAfford() { return this.currency().gte(this.cost()) },
            title() {
                return "Ancient Pylon Factor III"
            },
            display() {
                return 'which are boosting ancient pylon energy by x' + format(tmp[this.layer].buyables[this.id].effect) + '.\n\
                    Cost: ' + formatWhole(tmp[this.layer].buyables[this.id].cost) + ' Core Fragments'
            },
            buy(mult) {
                if (mult != true) {
                    let buyonecost = new Decimal(this.costGrowth()).pow(getBuyableAmount(this.layer, this.id)).mul(this.costBase())
                    this.pay(buyonecost)

                    setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                } else {
                    let max = Decimal.affordGeometricSeries(this.currency(), this.costBase(), this.costGrowth(), getBuyableAmount(this.layer, this.id))
                    if (max.gt(this.purchaseLimit().sub(getBuyableAmount(this.layer, this.id)))) { max = this.purchaseLimit().sub(getBuyableAmount(this.layer, this.id)) }
                    let cost = Decimal.sumGeometricSeries(max, this.costBase(), this.costGrowth(), getBuyableAmount(this.layer, this.id))
                    this.pay(cost)

                    setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
                }
            },
            style: { width: '275px', height: '150px', color: "black", backgroundImage: "linear-gradient(120deg, #B8916A 0%, #BE8267 100%)" }
        },
    },
    infoboxes: {
        1: {
            title: "超物理值",
            body() { return "根据我的研究，超物理值指的是如点数、威望点数和无限点数之类的货币；它们不是物理存在可以触碰的有形物品，但它们仍然存在于宇宙中，服务于不同的目的。超物理值存在于宇宙中的主要原因是为了赋予宇宙结构和意义。它们也可以用来促进真实的、非超物理值或物理物体的增长。这同时防止了完全的混沌产生。超物理值可以用来促进真实物理值和其他超物理值的增长。当一个宇宙被创造时，一个默认的超物理值也随之被创造。超物理值可以通过达到一定数量触发强制转化，或通过手动转化过程来转化和进化。" },
            unlocked() { return true },      
        },
        2: {
            title: "预知",
            body() { return "感知超物理值的能力只有少数人能够掌握。不过，在我们天体精灵之中这并不罕见。我不知道为什么，但这种力量是我们的天性。超物理值肉眼无法看见，但可以通过某种传感器来观测，这些传感器同样由超物理值构成。我还没给这些传感器命名。某些高级形式的预知可以导致对超物理值的操控。坎特可以操控复制体，诺娃可以操控奇点。另一种高级形式的预知是以物理方式使用超物理值。例如，我可以用超物理值操控物理法则。" },
            unlocked() { return hasUpgrade("i", 15) },       
        },
        3: {
            title: "宇宙",
            body() { return "在我穿越多元宇宙的旅途中，我注意到了许多不同类型的宇宙。第一种是空宇宙。这些宇宙只有边界，边界之内空无一物。第二种是无生命宇宙。这些宇宙有大量的物质，但缺乏生命有机体。第三种宇宙是生命宇宙。这些宇宙包含生命体，有时甚至包含高级文明。最后一种宇宙是幻想宇宙。这些宇宙包含魔法力量，这会导致宇宙中出现不同的超自然元素。现在。我正在尝试创造第五种宇宙。一个完全以超物理值运行的宇宙。这对天体精灵们会有很大好处。" },
            unlocked() { return hasUpgrade("i", 21) },      
        },
        4: {
            title: "领域",
            body() { return "多元宇宙被划分为六个领域。每个领域包含一定数量的宇宙，某些领域在形而上学层面上比其他领域更高。六个领域分别是：造物主领域、高阶存在位面、死亡领域、维度领域、梦境领域和虚空领域。据信在很久以前，一个拥有无上力量的存在将多元宇宙分裂成了这些领域。随着时间的推移，每个领域开始发展出自己独特的特性和生命形式。最终，领域之间开始相互接触，一场多元宇宙规模的冲突爆发了。随着时间的推移，一些领域结成了联盟对抗其他领域。战争仍在继续。" },
            unlocked() { return player.ca.defeatedCante || player.s.highestSingularityPoints.gt(0)},      
        },
    },
    microtabs: {
        stuff: {
            "Upgrades": {
                title: "升级",
                buttonStyle() { return { color: "white", borderRadius: "5px" } },
                unlocked() { return true },
                content: [
                    ["blank", "25px"],
                    ["style-row", [
                        ["upgrade", 11], ["upgrade", 12], ["upgrade", 13], ["upgrade", 14], ["upgrade", 15], ["upgrade", 16],
                        ["upgrade", 17], ["upgrade", 18], ["upgrade", 19], ["upgrade", 21], ["upgrade", 22], ["upgrade", 23],
                        ["upgrade", 24], ["upgrade", 25], ["upgrade", 26], ["upgrade", 27], ["upgrade", 28], ["upgrade", 32],
                        ["upgrade", 29], ["upgrade", 30], ["upgrade", 31], ["upgrade", 101],
                    ], {maxWidth: "800px"}],
                ],
            },
            "传说": {
                buttonStyle() { return { color: "white", borderRadius: "5px" } },
                unlocked() { return true},
                content: [
                    ["blank", "25px"],
                    ["infobox", "1"],
                    ["infobox", "2"],
                    ["infobox", "3"],
                    ["infobox", "4"],
                ],
            },
             "Pylon": {
                buttonStyle() { return { color: "white", borderRadius: "5px" } },
                unlocked() { return hasUpgrade("s", 28)},
                content: [
                    ["blank", "25px"],
                    ["left-row", [
                        ["tooltip-row", [
                            ["raw-html", "<img src='resources/fragments/ancientFragment.png'style='width:40px;height:40px;margin:5px'></img>", {width: "50px", height: "50px", display: "block"}],
                            ["raw-html", () => { return formatWhole(player.cof.coreFragments[0])}, {width: "103px", height: "50px", color: "#8B664B", display: "inline-flex", alignItems: "center", paddingLeft: "5px"}],
                            ["raw-html", "<div class='bottomTooltip'>Ancient Core Fragments</div>"],
                        ], {width: "158px", height: "50px",}],
                    ], {width: "158px", height: "50px", backgroundColor: "black", border: "2px solid white", borderRadius: "10px", userSelect: "none"}],
                    ["blank", "25px"],
                    ["clickable", 12],
                    ["raw-html", () => { return player.i.pylonBuilt ? "你有 <h3>" + format(player.i.pylonEnergy) + "/" + format(player.i.pylonEnergyMax) +  "</h3> ancient pylon energy (" + format(player.i.pylonEnergyPerSecond) + "/秒）." : "" }, {color: "#000000ff", fontSize: "24px", fontFamily: "monospace"}],
                    ["raw-html", () => {return player.i.pylonBuilt ? "提升 U1 tickspeed by x" + format(player.i.pylonEnergyEffect) + "." : ""}, {color: "black", fontSize: "20px", fontFamily: "monospace"}],
                    ["row", [
                        ["raw-html", () => {return player.i.pylonBuilt ? "提升 pre-otf multiplier by ^" + format(player.i.pylonEnergyEffect2) + "." : ""}, {color: "black", fontSize: "20px", fontFamily: "monospace"}],
                        ["raw-html", () => {return player.i.pylonEnergyEffect2.gt(10000) ? "<small style='margin-left:10px'>[SOFTCAPPED]</small>" : ""}, {color: "red", fontSize: "20px", fontFamily: "monospace"}],
                    ]],
                    ["row", [
                        ["raw-html", () => {return player.i.pylonBuilt ? "提升 post-otf multiplier by ^" + format(player.i.pylonEnergyEffect3) + "." : ""}, {color: "black", fontSize: "20px", fontFamily: "monospace"}],
                        ["raw-html", () => {return player.i.pylonEnergyEffect3.gt(1000) ? "<small style='margin-left:10px'>[SOFTCAPPED]</small>" : ""}, {color: "red", fontSize: "20px", fontFamily: "monospace"}],
                    ]],
                    ["raw-html", () => {return player.i.pylonBuilt ? "Passive effect: Boosts IP gain by x" + format(player.i.pylonPassiveEffect) + " (Based on points)" : ""}, {color: "black", fontSize: "20px", fontFamily: "monospace"}],
                    ["blank", "25px"],
                    ["row", [["ex-buyable", 11], ["ex-buyable", 12], ["ex-buyable", 13],]], 
                    ["blank", "25px"],
                    ["raw-html", () => {return player.i.pylonBuilt ? "Your ancient pylon is tier " + formatWhole(player.i.pylonTier) + ", which boosts all pylon effects by ^" + format(player.i.pylonTierEffect) + "." : ""}, {color: "black", fontSize: "20px", fontFamily: "monospace"}],
                    ["raw-html", () => {return player.i.pylonTier.gte(2) ? "Tier 2 Ancient Pylon unlocks the Universe 2 Pylon" : ""}, {color: "black", fontSize: "20px", fontFamily: "monospace"}],
                    ["blank", "25px"],
                    ["clickable", 13],
                ],
            },
            "过场查看器": {
                buttonStyle() { return { color: "white", borderRadius: "5px" } },
                unlocked() { return true},
                content: [
                    ["blank", "25px"],
                    ["style-row", [
                        ["raw-html", "过场查看器", {color: "var(--textColor)", fontSize: "24px", fontFamily: "monospace"}],
                    ], {width: "700px", height: "40px", background: "var(--scroll4)", border: "3px solid var(--regBorder)", marginBottom: "-3px"}],
                    ["theme-scroll-column", [
                        "cutscene-nodes",
                    ], {width: "690px", height: "590px", background: "var(--layerBackground)", border: "3px solid var(--regBorder)", padding: "5px"}],
                ],
            },
        },
    },
    tabFormat: [
        ["raw-html", () => {return "你有 <h3>" + format(player.points) + "</h3> 天体点数 (" + format(player.gain) + "/秒）."}, {color: "white", fontSize: "24px", fontFamily: "monospace"}],
        ["raw-html", () => {return player.gain.gt(player.i.doomSoftcapStart) ? "SOFTCAP OF DOOM: Gain past " + format(player.i.doomSoftcapStart) + " is raised by ^" + format(player.i.doomSoftcap, 3) + "." : ""}, {color: "red", fontSize: "16px", fontFamily: "monospace"}],
        ["bar", "infbar"],
        ["style-row", [
            ["style-row", [
                ["raw-html", () => {return "<h3>Pre-OTF Mult</h3><br>x" + format(player.i.preOTFMult)}, {color: "var(--textColor)", fontSize: "20px", fontFamily: "monospace"}],
            ], {width: "250px"}],
            ["style-row", [
                ["raw-html", () => {return "<h3>Post-OTF Mult</h3><br>x" + format(player.i.postOTFMult)}, {color: "var(--textColor)", fontSize: "20px", fontFamily: "monospace"}],
            ], () => {return player.i.postOTFMult.neq(1) ? {width: "250px", borderLeft: "3px solid #ccc"} : {display: "none !important"}}],
        ], () => {return player.i.postOTFMult.neq(1) ? {width: "503px", height: "50px", background: "rgba(0,0,0,0.5)", border: "3px solid #ccc", borderRadius: "25px", margin: "10px auto"} : player.i.preOTFMult.neq(1) ? {width: "250px", height: "50px", background: "var(--miscButton)", border: "3px solid var(--regBorder)", borderRadius: "25px", margin: "10px auto"} : {display: "none !important"}}],
        ["microtabs", "stuff", { 'border-width': '0px' }],
        ["blank", "25px"],
    ],
    layerShown() {
        if (player.startedGame == false) return true
        return !player.cp.cantepocalypseActive && !player.sma.inStarmetalChallenge
    }
})
function callAlert(message, imageUrl, imagePosition = 'top') {
    return new Promise((resolve) => {
        // Check if a modal already exists on the page
        if (document.querySelector('.modal-container')) {
            return; // If a modal is already present, exit the function
        }

        // Create modal container
        const modalContainer = document.createElement('div');
        modalContainer.classList.add('modal-container');

        // Create modal content
        const modalContent = document.createElement('div');
        modalContent.classList.add('modal-content');

        // Create modal message
        const modalMessage = document.createElement('p');
        modalMessage.innerHTML = message.replace(/\n/g, '<br>'); // Replace '\n' with a line break

        // Append modal message to modal content
        modalContent.appendChild(modalMessage);

        // If imageUrl is provided and imagePosition is 'top', create image element and append it to modal content before the message
        if (imageUrl && imagePosition === 'top') {
            const imageElement = document.createElement('img');
            imageElement.src = imageUrl; // Set image source
            modalContent.insertBefore(imageElement, modalMessage);
        }

        // Create close button
        const closeButton = document.createElement('button');
        closeButton.textContent = 'Next';
        closeButton.addEventListener('click', closeModal);

        // Append close button to modal content
        modalContent.appendChild(closeButton);

        // If imageUrl is provided and imagePosition is 'bottom', create image element and append it to modal content after the message and button
        if (imageUrl && imagePosition === 'bottom') {
            const imageElement = document.createElement('img');
            imageElement.src = imageUrl; // Set image source
            modalContent.appendChild(imageElement);
        }

        // Append modal content to modal container
        modalContainer.appendChild(modalContent);

        // Append modal container to body
        document.body.appendChild(modalContainer);

        // Show the modal
        modalContainer.style.display = 'flex';
        modalContainer.style.alignItems = 'center';
        modalContainer.style.justifyContent = 'center';
        modalContainer.style.zIndex = '5000';

        // Apply background color and increase width
        modalContent.style.background = '#ccc'; // Grey background
        modalContent.style.width = '30%'; // Adjust the width as needed

        // Function to close the modal
        function closeModal() {
            modalContainer.style.display = 'none';
            // Optionally, remove the modal from the DOM after closing
            document.body.removeChild(modalContainer);
            resolve();
        }
    });
}
    document.addEventListener('keydown', function(event) {
        if (event.altKey && options.toggleHotkey) {
            if (!options.musicToggle) 
            {
                options.musicToggle = true
                doPopup("milestone", "Music is toggled on.", "Milestone Gotten!", 3, "#ffffff")
            } else
            {
                options.musicToggle = false
                doPopup("milestone", "Music is toggled off.", "Milestone Gotten!", 3, "#ffffff")
            }
        }
    });