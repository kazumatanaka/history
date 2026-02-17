// cards.js
// Rarity: 1=N, 2=R, 3=SR, 4=SSR, 5=UR

const cardData = [
    {
        "id": "c001",
        "name": "卑弥呼",
        "title": "邪馬台国の女王",
        "rarity": 4,
        "stats": {
            "str": 20,
            "int": 95,
            "cha": 98
        },
        "desc": "占いで国を治めた謎多き女王。「魏」に使いを送って「親魏倭王」の金印をもらったよ。",
        "img": "/Users/kazumatanaka/.gemini/antigravity/brain/06e72343-820c-4f36-9e64-a04a9092413e/card_himiko_1771327623087.png",
        "group": "弥生",
        "kana": "卑弥呼",
        "lifespan": "?-248",
        "timeline": [
            {
                "y": "239",
                "e": "中国（魏）に使いを送る"
            }
        ],
        "keywords": [
            "邪馬台国",
            "金印",
            "魏志倭人伝"
        ],
        "mnemonic": "文（239）ください卑弥呼さん",
        "relations": [
            {
                "name": "魏の皇帝",
                "type": "同盟",
                "dir": "to"
            },
            {
                "name": "壱与",
                "type": "後継者",
                "dir": "from"
            }
        ],
        "era": "弥生時代"
    },
    {
        "id": "c002",
        "name": "聖徳太子",
        "title": "飛鳥の超人",
        "rarity": 4,
        "stats": {
            "str": 50,
            "int": 100,
            "cha": 95
        },
        "desc": "一度に10人の話を聞けた天才！？天皇中心の国づくりを目指して、憲法や位の制度を作ったよ。",
        "img": "/Users/kazumatanaka/.gemini/antigravity/brain/06e72343-820c-4f36-9e64-a04a9092413e/card_shotoku_1771327605575.png",
        "group": "飛鳥",
        "kana": "聖徳太子",
        "lifespan": "574-622",
        "timeline": [
            {
                "y": "603",
                "e": "冠位十二階を定める"
            },
            {
                "y": "604",
                "e": "十七条の憲法を制定"
            },
            {
                "y": "607",
                "e": "小野妹子を遣隋使として送る"
            }
        ],
        "keywords": [
            "冠位十二階",
            "十七条の憲法",
            "法隆寺"
        ],
        "mnemonic": "群（603）がる役人十二階",
        "relations": [
            {
                "name": "小野妹子",
                "type": "家臣",
                "dir": "to"
            },
            {
                "name": "蘇我馬子",
                "type": "協力者",
                "dir": "from"
            }
        ],
        "era": "飛鳥時代"
    },
    {
        "id": "c003",
        "name": "小野妹子",
        "title": "最初の遣隋使",
        "rarity": 3,
        "stats": {
            "str": 40,
            "int": 85,
            "cha": 80
        },
        "desc": "「日出づる処の天子…」という有名な手紙を中国（隋）の皇帝に渡した度胸ある外交官！",
        "img": "/Users/kazumatanaka/.gemini/antigravity/brain/06e72343-820c-4f36-9e64-a04a9092413e/card_imoko_1771331521760.png",
        "group": "飛鳥",
        "kana": "小野妹子",
        "lifespan": "?-?",
        "timeline": [
            {
                "y": "607",
                "e": "第1回遣隋使として派遣"
            },
            {
                "y": "608",
                "e": "隋の使者を連れて帰国"
            }
        ],
        "keywords": [
            "遣隋使",
            "煬帝",
            "裴世清"
        ],
        "mnemonic": "無礼な（607）手紙で妹子ピンチ",
        "relations": [
            {
                "name": "聖徳太子",
                "type": "上司",
                "dir": "to"
            },
            {
                "name": "煬帝",
                "type": "相手",
                "dir": "from"
            }
        ],
        "era": "飛鳥時代"
    },
    {
        "id": "c004",
        "name": "中大兄皇子",
        "title": "大化の改新の主役",
        "rarity": 4,
        "stats": {
            "str": 85,
            "int": 92,
            "cha": 88
        },
        "desc": "中臣鎌足と協力して蘇我氏をたおした！「公地公民」を目指して改革を始めたよ（後の天智天皇）。",
        "img": "/Users/kazumatanaka/.gemini/antigravity/brain/06e72343-820c-4f36-9e64-a04a9092413e/card_nakanooe_1771331544522.png",
        "group": "飛鳥",
        "kana": "中大兄皇子",
        "lifespan": "626-671",
        "timeline": [
            {
                "y": "645",
                "e": "大化の改新（乙巳の変）"
            },
            {
                "y": "663",
                "e": "白村江の戦いで敗れる"
            },
            {
                "y": "667",
                "e": "近江大津宮に都を移す"
            }
        ],
        "keywords": [
            "大化の改新",
            "公地公民",
            "班田収授法"
        ],
        "mnemonic": "蒸し（645）焼き蘇我氏、大化の改新",
        "relations": [
            {
                "name": "中臣鎌足",
                "type": "親友",
                "dir": "to"
            },
            {
                "name": "大海人皇子",
                "type": "弟",
                "dir": "from"
            }
        ],
        "era": "飛鳥時代"
    },
    {
        "id": "c005",
        "name": "中臣鎌足",
        "title": "藤原氏の祖",
        "rarity": 3,
        "stats": {
            "str": 60,
            "int": 96,
            "cha": 85
        },
        "desc": "中大兄皇子を支えた名参謀。死ぬ直前に「藤原」という名字をもらい、のちの藤原氏の祖先となった！",
        "img": "/Users/kazumatanaka/.gemini/antigravity/brain/06e72343-820c-4f36-9e64-a04a9092413e/card_kamatari_1771331574326.png",
        "group": "飛鳥",
        "kana": "中臣鎌足",
        "lifespan": "614-669",
        "timeline": [
            {
                "y": "645",
                "e": "蘇我入鹿をたおす"
            }
        ],
        "keywords": [
            "大化の改新",
            "藤原氏",
            "興福寺"
        ],
        "mnemonic": "蒸し（645）殺せ入鹿、大化の改新",
        "relations": [
            {
                "name": "中大兄皇子",
                "type": "主君",
                "dir": "to"
            },
            {
                "name": "蘇我入鹿",
                "type": "敵",
                "dir": "from"
            }
        ],
        "era": "飛鳥時代"
    },
    {
        "id": "c006",
        "name": "聖武天皇",
        "title": "大仏建立",
        "rarity": 4,
        "stats": {
            "str": 40,
            "int": 88,
            "cha": 90
        },
        "desc": "仏教の力で国を守ろうとした天皇。奈良の大仏を作り、全国に国分寺を建てさせたよ。",
        "img": "/Users/kazumatanaka/.gemini/antigravity/brain/06e72343-820c-4f36-9e64-a04a9092413e/card_shomu_1771331595763.png",
        "group": "奈良",
        "kana": "聖武天皇",
        "lifespan": "701-756",
        "timeline": [
            {
                "y": "741",
                "e": "国分寺・国分尼寺建立の詔"
            },
            {
                "y": "743",
                "e": "墾田永年私財法を出す"
            },
            {
                "y": "752",
                "e": "東大寺の大仏が開眼"
            }
        ],
        "keywords": [
            "東大寺",
            "墾田永年私財法",
            "正倉院"
        ],
        "mnemonic": "梨（743）の土地なら私有OK",
        "relations": [
            {
                "name": "行基",
                "type": "協力者",
                "dir": "to"
            },
            {
                "name": "光明皇后",
                "type": "妻",
                "dir": "from"
            }
        ],
        "era": "奈良時代"
    },
    {
        "id": "c007",
        "name": "行基",
        "title": "民衆の救済者",
        "rarity": 3,
        "stats": {
            "str": 10,
            "int": 90,
            "cha": 99
        },
        "desc": "橋や道路を作って民衆を助けたお坊さん。その人気を見込まれて、大仏作りにも協力したよ。",
        "img": "./assets/images/card_gyoki_1771334846901.png",
        "group": "奈良",
        "kana": "行基",
        "lifespan": "668-749",
        "timeline": [
            {
                "y": "745",
                "e": "大僧正（お坊さんのトップ）になる"
            }
        ],
        "keywords": [
            "東大寺",
            "社会事業",
            "大僧正"
        ],
        "mnemonic": "",
        "relations": [
            {
                "name": "聖武天皇",
                "type": "協力",
                "dir": "to"
            },
            {
                "name": "民衆",
                "type": "支持者",
                "dir": "from"
            }
        ],
        "era": "奈良時代"
    },
    {
        "id": "c008",
        "name": "鑑真",
        "title": "不屈の伝道者",
        "rarity": 3,
        "stats": {
            "str": 10,
            "int": 95,
            "cha": 95
        },
        "desc": "日本に正しい仏教を伝えるため、5回の失敗と失明を乗り越えて来日した唐の高僧。唐招提寺を建てた。",
        "img": "./assets/images/card_ganjin_1771334875863.png",
        "group": "奈良",
        "kana": "鑑真",
        "lifespan": "688-763",
        "timeline": [
            {
                "y": "753",
                "e": "6度目の挑戦で来日成功"
            },
            {
                "y": "759",
                "e": "唐招提寺を建てる"
            }
        ],
        "keywords": [
            "戒律",
            "唐招提寺",
            "遣唐使"
        ],
        "mnemonic": "名（753）波を越えて鑑真来日",
        "relations": [
            {
                "name": "聖武天皇",
                "type": "招請者",
                "dir": "to"
            },
            {
                "name": "弟子",
                "type": "同行",
                "dir": "from"
            }
        ],
        "era": "奈良時代"
    },
    {
        "id": "c009",
        "name": "藤原道長",
        "title": "摂関政治の頂点",
        "rarity": 4,
        "stats": {
            "str": 60,
            "int": 98,
            "cha": 90
        },
        "desc": "「この世は私のものだ」と歌うほど権力を握った！娘を天皇の后にして摂関政治の全盛期を築いた。",
        "img": "./assets/images/card_michinaga_1771334912735.png",
        "group": "平安",
        "kana": "藤原道長",
        "lifespan": "966-1027",
        "timeline": [
            {
                "y": "1016",
                "e": "摂政になる"
            },
            {
                "y": "1019",
                "e": "「この世をば…」の歌を詠む"
            }
        ],
        "keywords": [
            "摂関政治",
            "御堂関白記",
            "平等院"
        ],
        "mnemonic": "遠い（101）未来（6）も道長全盛",
        "relations": [
            {
                "name": "紫式部",
                "type": "支援",
                "dir": "to"
            },
            {
                "name": "藤原頼通",
                "type": "子",
                "dir": "from"
            }
        ],
        "era": "平安時代"
    },
    {
        "id": "c010",
        "name": "紫式部",
        "title": "世界最古の長編作家",
        "rarity": 4,
        "stats": {
            "str": 10,
            "int": 99,
            "cha": 92
        },
        "desc": "世界最古の長編小説『源氏物語』の作者。藤原道長の娘（彰子）の家庭教師をしていた才女。",
        "img": "./assets/images/card_murasaki_new_1771334947275.png",
        "group": "平安",
        "kana": "紫式部",
        "lifespan": "?-?",
        "timeline": [
            {
                "y": "1000頃",
                "e": "『源氏物語』を執筆"
            }
        ],
        "keywords": [
            "源氏物語",
            "国風文化",
            "かな文字"
        ],
        "mnemonic": "",
        "relations": [
            {
                "name": "藤原道長",
                "type": "パトロン",
                "dir": "to"
            },
            {
                "name": "清少納言",
                "type": "ライバル",
                "dir": "from"
            }
        ],
        "era": "平安時代"
    },
    {
        "id": "c011",
        "name": "平清盛",
        "title": "武士初の太政大臣",
        "rarity": 4,
        "stats": {
            "str": 95,
            "int": 90,
            "cha": 70
        },
        "desc": "武士として初めて太政大臣になり政治の実権を握った！中国（宋）との貿易で巨万の富を得たよ。",
        "img": "./assets/images/card_kiyomori_1771335031022.png",
        "group": "平安",
        "kana": "平清盛",
        "lifespan": "1118-1181",
        "timeline": [
            {
                "y": "1159",
                "e": "平治の乱で源義朝を破る"
            },
            {
                "y": "1167",
                "e": "太政大臣になる"
            }
        ],
        "keywords": [
            "日宋貿易",
            "厳島神社",
            "平氏政権"
        ],
        "mnemonic": "人々（11）無（67）視の清盛政治",
        "relations": [
            {
                "name": "源頼朝",
                "type": "宿敵",
                "dir": "to"
            },
            {
                "name": "後白河法皇",
                "type": "対立",
                "dir": "from"
            }
        ],
        "era": "平安末期"
    },
    {
        "id": "c012",
        "name": "源頼朝",
        "title": "鎌倉幕府の創始者",
        "rarity": 4,
        "stats": {
            "str": 85,
            "int": 95,
            "cha": 88
        },
        "desc": "初めて武家政権（幕府）を開いた！弟の義経を使って平氏を滅ぼし、守護・地頭を置いて全国を支配した。",
        "img": "./assets/images/card_yoritomo_1771335087716.png",
        "group": "鎌倉",
        "kana": "源頼朝",
        "lifespan": "1147-1199",
        "timeline": [
            {
                "y": "1185",
                "e": "壇ノ浦の戦いで平氏滅亡"
            },
            {
                "y": "1185",
                "e": "守護・地頭を設置"
            },
            {
                "y": "1192",
                "e": "征夷大将軍になる"
            }
        ],
        "keywords": [
            "守護・地頭",
            "征夷大将軍",
            "鎌倉幕府"
        ],
        "mnemonic": "いい国（1192）作ろう鎌倉幕府",
        "relations": [
            {
                "name": "北条政子",
                "type": "妻",
                "dir": "to"
            },
            {
                "name": "源義経",
                "type": "弟",
                "dir": "from"
            }
        ],
        "era": "鎌倉時代"
    },
    {
        "id": "c013",
        "name": "北条政子",
        "title": "尼将軍",
        "rarity": 3,
        "stats": {
            "str": 50,
            "int": 98,
            "cha": 95
        },
        "desc": "頼朝の死後、「尼将軍」として幕府を支えた！承久の乱では御家人たちに涙の演説を行い、結束させた。",
        "img": "./assets/images/card_masako_1771335130916.png",
        "group": "鎌倉",
        "kana": "北条政子",
        "lifespan": "1157-1225",
        "timeline": [
            {
                "y": "1221",
                "e": "承久の乱で演説を行う"
            }
        ],
        "keywords": [
            "承久の乱",
            "執権政治",
            "御恩と奉公"
        ],
        "mnemonic": "人に不意（1221）打ち承久の乱",
        "relations": [
            {
                "name": "源頼朝",
                "type": "夫",
                "dir": "to"
            },
            {
                "name": "北条義時",
                "type": "弟",
                "dir": "from"
            }
        ],
        "era": "鎌倉時代"
    },
    {
        "id": "c014",
        "name": "北条時宗",
        "title": "元寇を撃退した執権",
        "rarity": 3,
        "stats": {
            "str": 80,
            "int": 90,
            "cha": 85
        },
        "desc": "18歳で執権になり、モンゴル帝国（元）の2度の襲来（元寇）を防ぎきった若きリーダー！",
        "img": "./assets/images/card_tokimune_1771336608169.png",
        "group": "鎌倉",
        "kana": "北条時宗",
        "lifespan": "1251-1284",
        "timeline": [
            {
                "y": "1274",
                "e": "文永の役（1回目の元寇）"
            },
            {
                "y": "1281",
                "e": "弘安の役（2回目の元寇）"
            }
        ],
        "keywords": [
            "元寇",
            "てつはう",
            "執権"
        ],
        "mnemonic": "人に那（1274）須与一はいない元寇",
        "relations": [
            {
                "name": "フビライ・ハン",
                "type": "敵",
                "dir": "to"
            },
            {
                "name": "謝国明",
                "type": "協力者",
                "dir": "from"
            }
        ],
        "era": "鎌倉時代"
    },
    {
        "id": "c015",
        "name": "足利義満",
        "title": "金閣を建てた将軍",
        "rarity": 4,
        "stats": {
            "str": 60,
            "int": 98,
            "cha": 90
        },
        "desc": "南北朝を合体させ、室町幕府の全盛期を築いた！明（中国）と貿易をして巨万の富を得たよ。",
        "img": "./assets/images/card_yoshimitsu_1771335314852.png",
        "group": "室町",
        "kana": "足利義満",
        "lifespan": "1358-1408",
        "timeline": [
            {
                "y": "1392",
                "e": "南北朝の合一"
            },
            {
                "y": "1397",
                "e": "金閣を建てる"
            },
            {
                "y": "1404",
                "e": "勘合貿易（日明貿易）開始"
            }
        ],
        "keywords": [
            "金閣",
            "勘合貿易",
            "北山文化"
        ],
        "mnemonic": "いざ国（1392）まとめよ義満で",
        "relations": [
            {
                "name": "足利尊氏",
                "type": "祖父",
                "dir": "to"
            },
            {
                "name": "世阿弥",
                "type": "保護",
                "dir": "from"
            }
        ],
        "era": "室町時代"
    },
    {
        "id": "c016",
        "name": "織田信長",
        "title": "第六天魔王",
        "rarity": 4,
        "stats": {
            "str": 95,
            "int": 92,
            "cha": 85
        },
        "desc": "室町幕府をほろぼし、安土城をきずいて天下統一目前まで迫った革命児！楽市・楽座で商業も活性化。",
        "img": "./assets/images/card_nobunaga_1771328819637.png",
        "group": "戦国",
        "kana": "織田信長",
        "lifespan": "1534-1582",
        "timeline": [
            {
                "y": "1560",
                "e": "桶狭間の戦い"
            },
            {
                "y": "1575",
                "e": "長篠の戦い"
            },
            {
                "y": "1582",
                "e": "本能寺の変"
            }
        ],
        "keywords": [
            "楽市・楽座",
            "安土城",
            "鉄砲"
        ],
        "mnemonic": "イチゴ（15）パンツ（82）の本能寺",
        "relations": [
            {
                "name": "豊臣秀吉",
                "type": "家臣",
                "dir": "to"
            },
            {
                "name": "明智光秀",
                "type": "裏切り",
                "dir": "from"
            }
        ],
        "era": "安土桃山"
    },
    {
        "id": "c017",
        "name": "豊臣秀吉",
        "title": "天下人",
        "rarity": 4,
        "stats": {
            "str": 88,
            "int": 96,
            "cha": 98
        },
        "desc": "農民から天下人へ大出世！検地と刀狩で兵農分離を進め、戦国の世を終わらせた。",
        "img": "./assets/images/card_hideyoshi_1771331116985.png",
        "group": "戦国",
        "kana": "豊臣秀吉",
        "lifespan": "1537-1598",
        "timeline": [
            {
                "y": "1582",
                "e": "山崎の戦い"
            },
            {
                "y": "1590",
                "e": "全国統一を達成"
            },
            {
                "y": "1592",
                "e": "朝鮮出兵（文禄の役）"
            }
        ],
        "keywords": [
            "太閤検地",
            "刀狩",
            "大阪城"
        ],
        "mnemonic": "以後（15）く（9）るしい桃山文化",
        "relations": [
            {
                "name": "織田信長",
                "type": "主君",
                "dir": "to"
            },
            {
                "name": "徳川家康",
                "type": "五大老",
                "dir": "from"
            }
        ],
        "era": "安土桃山"
    },
    {
        "id": "c018",
        "name": "徳川家康",
        "title": "江戸の開祖",
        "rarity": 4,
        "stats": {
            "str": 90,
            "int": 98,
            "cha": 90
        },
        "desc": "「鳴かぬなら鳴くまで待とう」の人。260年続く江戸幕府を開いた平和の創始者。",
        "img": "./assets/images/card_ieyasu_1771327641028.png",
        "group": "江戸",
        "kana": "徳川家康",
        "lifespan": "1543-1616",
        "timeline": [
            {
                "y": "1600",
                "e": "関ヶ原の戦い"
            },
            {
                "y": "1603",
                "e": "江戸幕府を開く"
            },
            {
                "y": "1615",
                "e": "大坂夏の陣"
            }
        ],
        "keywords": [
            "武家諸法度",
            "参勤交代",
            "朱印船貿易"
        ],
        "mnemonic": "ヒーロー（16）王（00）座だ関ヶ原",
        "relations": [
            {
                "name": "豊臣秀吉",
                "type": "ライバル",
                "dir": "to"
            },
            {
                "name": "織田信長",
                "type": "同盟",
                "dir": "from"
            }
        ],
        "era": "江戸初期"
    },
    {
        "id": "c019",
        "name": "徳川家光",
        "title": "生まれながらの将軍",
        "rarity": 3,
        "stats": {
            "str": 70,
            "int": 85,
            "cha": 80
        },
        "desc": "3代将軍。参勤交代を義務付け、鎖国を完成させた！幕府の支配体制を盤石にしたよ。",
        "img": "./assets/images/card_iemitsu_1771335393732.png",
        "group": "江戸",
        "kana": "徳川家光",
        "lifespan": "1604-1651",
        "timeline": [
            {
                "y": "1635",
                "e": "参勤交代の制度化"
            },
            {
                "y": "1639",
                "e": "ポルトガル船の来航禁止（鎖国）"
            },
            {
                "y": "1641",
                "e": "オランダ商館を長崎の出島へ"
            }
        ],
        "keywords": [
            "参勤交代",
            "鎖国",
            "島原・天草一揆"
        ],
        "mnemonic": "疲労（16）散（3）々、参勤交代",
        "relations": [
            {
                "name": "徳川家康",
                "type": "祖父",
                "dir": "to"
            },
            {
                "name": "天草四郎",
                "type": "敵",
                "dir": "from"
            }
        ],
        "era": "江戸前期"
    },
    {
        "id": "c020",
        "name": "徳川吉宗",
        "title": "米将軍",
        "rarity": 3,
        "stats": {
            "str": 80,
            "int": 90,
            "cha": 92
        },
        "desc": "8代将軍。「享保の改革」を行い、目安箱を設置して民衆の声を聞いた名君。質素倹約を奨励。",
        "img": "./assets/images/card_yoshimune_1771335425803.png",
        "group": "江戸",
        "kana": "徳川吉宗",
        "lifespan": "1684-1751",
        "timeline": [
            {
                "y": "1716",
                "e": "享保の改革を始める"
            },
            {
                "y": "1721",
                "e": "目安箱の設置"
            },
            {
                "y": "1742",
                "e": "公事方御定書を制定"
            }
        ],
        "keywords": [
            "享保の改革",
            "目安箱",
            "新田開発"
        ],
        "mnemonic": "避難（17）色（16）々、享保の改革",
        "relations": [
            {
                "name": "大岡忠相",
                "type": "部下",
                "dir": "to"
            },
            {
                "name": "青木昆陽",
                "type": "登用",
                "dir": "from"
            }
        ],
        "era": "江戸中期"
    },
    {
        "id": "c021",
        "name": "近松門左衛門",
        "title": "人形浄瑠璃の神",
        "rarity": 2,
        "stats": {
            "str": 10,
            "int": 95,
            "cha": 88
        },
        "desc": "元禄文化を代表する脚本家。心中ものなどの人情ドラマを書き、庶民の涙を誘った。",
        "img": "./assets/images/card_chikamatsu_1771336801350.png",
        "group": "江戸",
        "kana": "近松門左衛門",
        "lifespan": "1653-1724",
        "timeline": [
            {
                "y": "1703",
                "e": "『曽根崎心中』を発表"
            }
        ],
        "keywords": [
            "人形浄瑠璃",
            "元禄文化",
            "歌舞伎"
        ],
        "mnemonic": "",
        "relations": [
            {
                "name": "井原西鶴",
                "type": "同時代",
                "dir": "to"
            },
            {
                "name": "竹本義太夫",
                "type": "相棒",
                "dir": "from"
            }
        ],
        "era": "江戸中期"
    },
    {
        "id": "c022",
        "name": "伊能忠敬",
        "title": "歩いて日本を測った男",
        "rarity": 3,
        "stats": {
            "str": 60,
            "int": 99,
            "cha": 85
        },
        "desc": "50歳を過ぎてから測量を学び、自分の足で歩いて日本地図を完成させた努力の天才！",
        "img": "./assets/images/card_ino_1771336943022.png",
        "group": "江戸",
        "kana": "伊能忠敬",
        "lifespan": "1745-1818",
        "timeline": [
            {
                "y": "1800",
                "e": "蝦夷地（北海道）の測量開始"
            },
            {
                "y": "1821",
                "e": "『大日本沿海輿地全図』完成"
            }
        ],
        "keywords": [
            "大日本沿海輿地全図",
            "測量",
            "化政文化"
        ],
        "mnemonic": "",
        "relations": [
            {
                "name": "徳川家斉",
                "type": "将軍",
                "dir": "to"
            },
            {
                "name": "高橋至時",
                "type": "師匠",
                "dir": "from"
            }
        ],
        "era": "江戸後期"
    },
    {
        "id": "c023",
        "name": "ペリー",
        "title": "黒船の提督",
        "rarity": 4,
        "stats": {
            "str": 85,
            "int": 90,
            "cha": 70
        },
        "desc": "巨大な黒船に乗って浦賀に来航！鎖国していた日本に開国を迫ったアメリカ人。",
        "img": "./assets/images/card_perry_1771335515879.png",
        "group": "幕末",
        "kana": "ペリー",
        "lifespan": "1794-1858",
        "timeline": [
            {
                "y": "1853",
                "e": "浦賀に来航（黒船）"
            },
            {
                "y": "1854",
                "e": "日米和親条約を結ぶ"
            }
        ],
        "keywords": [
            "黒船",
            "日米和親条約",
            "開国"
        ],
        "mnemonic": "いや（18）でご（5）ざ（3）んすペリーさん",
        "relations": [
            {
                "name": "徳川家慶",
                "type": "将軍",
                "dir": "to"
            },
            {
                "name": "ハリス",
                "type": "後任",
                "dir": "from"
            }
        ],
        "era": "幕末"
    },
    {
        "id": "c024",
        "name": "坂本龍馬",
        "title": "幕末のフィクサー",
        "rarity": 4,
        "stats": {
            "str": 85,
            "int": 92,
            "cha": 98
        },
        "desc": "仲の悪かった薩摩と長州の手を結ばせ（薩長同盟）、新しい日本の夜明けを切り開いた土佐の志士！",
        "img": "./assets/images/card_ryoma_1771327587698.png",
        "group": "幕末",
        "kana": "坂本龍馬",
        "lifespan": "1836-1867",
        "timeline": [
            {
                "y": "1866",
                "e": "薩長同盟の仲介"
            },
            {
                "y": "1867",
                "e": "船中八策を考案"
            },
            {
                "y": "1867",
                "e": "近江屋で暗殺される"
            }
        ],
        "keywords": [
            "薩長同盟",
            "大政奉還",
            "海援隊"
        ],
        "mnemonic": "一夜（18）む（6）な（7）しく大政奉還",
        "relations": [
            {
                "name": "西郷隆盛",
                "type": "同盟者",
                "dir": "to"
            },
            {
                "name": "桂小五郎",
                "type": "同盟者",
                "dir": "from"
            }
        ],
        "era": "幕末"
    },
    {
        "id": "c025",
        "name": "西郷隆盛",
        "title": "維新の三傑",
        "rarity": 3,
        "stats": {
            "str": 98,
            "int": 85,
            "cha": 95
        },
        "desc": "薩摩藩のリーダー。江戸城無血開城を実現したが、最後は西南戦争で政府と戦い散った。",
        "img": "./assets/images/card_saigo_1771331182238.png",
        "group": "幕末",
        "kana": "西郷隆盛",
        "lifespan": "1828-1877",
        "timeline": [
            {
                "y": "1866",
                "e": "薩長同盟を結ぶ"
            },
            {
                "y": "1868",
                "e": "江戸城無血開城"
            },
            {
                "y": "1877",
                "e": "西南戦争で敗れる"
            }
        ],
        "keywords": [
            "戊辰戦争",
            "版籍奉還",
            "征韓論"
        ],
        "mnemonic": "いや（18）な（7）内（7）乱、西南戦争",
        "relations": [
            {
                "name": "勝海舟",
                "type": "交渉相手",
                "dir": "to"
            },
            {
                "name": "大久保利通",
                "type": "親友敵",
                "dir": "from"
            }
        ],
        "era": "幕末〜明治"
    },
    {
        "id": "c026",
        "name": "大久保利通",
        "title": "冷徹な政治家",
        "rarity": 3,
        "stats": {
            "str": 70,
            "int": 98,
            "cha": 75
        },
        "desc": "版籍奉還や廃藩置県を断行し、近代日本の基礎を作った実力者。殖産興業を推進した。",
        "img": "./assets/images/card_okubo_1771335625732.png",
        "group": "明治",
        "kana": "大久保利通",
        "lifespan": "1830-1878",
        "timeline": [
            {
                "y": "1871",
                "e": "岩倉使節団に参加"
            },
            {
                "y": "1873",
                "e": "征韓論を退け内務卿になる"
            }
        ],
        "keywords": [
            "富国強兵",
            "殖産興業",
            "地租改正"
        ],
        "mnemonic": "",
        "relations": [
            {
                "name": "西郷隆盛",
                "type": "親友敵",
                "dir": "to"
            },
            {
                "name": "木戸孝允",
                "type": "同僚",
                "dir": "from"
            }
        ],
        "era": "明治時代"
    },
    {
        "id": "c027",
        "name": "伊藤博文",
        "title": "初代内閣総理大臣",
        "rarity": 4,
        "stats": {
            "str": 75,
            "int": 96,
            "cha": 90
        },
        "desc": "初代内閣総理大臣。ドイツの憲法を学んで大日本帝国憲法を作り、立憲政治を始めた。",
        "img": "./assets/images/card_ito_1771335811400.png",
        "group": "明治",
        "kana": "伊藤博文",
        "lifespan": "1841-1909",
        "timeline": [
            {
                "y": "1885",
                "e": "初代内閣総理大臣になる"
            },
            {
                "y": "1889",
                "e": "大日本帝国憲法を発布"
            },
            {
                "y": "1900",
                "e": "立憲政友会を結成"
            }
        ],
        "keywords": [
            "内閣制度",
            "大日本帝国憲法",
            "枢密院"
        ],
        "mnemonic": "いち（1）早（8）く（9）発布だ大日本帝国憲法",
        "relations": [
            {
                "name": "板垣退助",
                "type": "ライバル",
                "dir": "to"
            },
            {
                "name": "大隈重信",
                "type": "ライバル",
                "dir": "from"
            }
        ],
        "era": "明治時代"
    },
    {
        "id": "c028",
        "name": "板垣退助",
        "title": "自由民権運動の父",
        "rarity": 3,
        "stats": {
            "str": 80,
            "int": 90,
            "cha": 95
        },
        "desc": "「板垣死すとも自由は死せず」の名言で有名。国会を開くことを求めて自由民権運動を指導した。",
        "img": "./assets/images/card_itagaki_1771335688261.png",
        "group": "明治",
        "kana": "板垣退助",
        "lifespan": "1837-1919",
        "timeline": [
            {
                "y": "1874",
                "e": "民撰議院設立の建白書を提出"
            },
            {
                "y": "1881",
                "e": "自由党を結成"
            }
        ],
        "keywords": [
            "自由民権運動",
            "自由党",
            "国会開設"
        ],
        "mnemonic": "いや（18）な（7）世（4）直し民撰議院",
        "relations": [
            {
                "name": "大隈重信",
                "type": "ライバル",
                "dir": "to"
            },
            {
                "name": "伊藤博文",
                "type": "政府側",
                "dir": "from"
            }
        ],
        "era": "明治時代"
    },
    {
        "id": "c029",
        "name": "福沢諭吉",
        "title": "独立自尊の教育者",
        "rarity": 4,
        "stats": {
            "str": 30,
            "int": 100,
            "cha": 95
        },
        "desc": "『学問のすゝめ』で「天は人の上に人を造らず」と説いた。慶應義塾を創設し、近代教育を広めた。",
        "img": "./assets/images/card_fukuzawa_1771335926223.png",
        "group": "明治",
        "kana": "福沢諭吉",
        "lifespan": "1835-1901",
        "timeline": [
            {
                "y": "1872",
                "e": "『学問のすゝめ』出版"
            },
            {
                "y": "1868",
                "e": "慶應義塾と名付ける"
            }
        ],
        "keywords": [
            "文明開化",
            "学問のすゝめ",
            "慶應義塾"
        ],
        "mnemonic": "",
        "relations": [
            {
                "name": "勝海舟",
                "type": "友人",
                "dir": "to"
            },
            {
                "name": "大隈重信",
                "type": "友人",
                "dir": "from"
            }
        ],
        "era": "明治時代"
    },
    {
        "id": "c030",
        "name": "陸奥宗光",
        "title": "カミソリ大臣",
        "rarity": 2,
        "stats": {
            "str": 50,
            "int": 98,
            "cha": 85
        },
        "desc": "外務大臣として不平等条約の改正（領事裁判権の撤廃）に成功！「カミソリ」と呼ばれる切れ者。",
        "img": "./assets/images/card_mutsu_1771337139327.png",
        "group": "明治",
        "kana": "陸奥宗光",
        "lifespan": "1844-1897",
        "timeline": [
            {
                "y": "1894",
                "e": "日英通商航海条約（領事裁判権撤廃）"
            },
            {
                "y": "1895",
                "e": "下関条約に調印"
            }
        ],
        "keywords": [
            "条約改正",
            "日清戦争",
            "ノルマントン号事件"
        ],
        "mnemonic": "一発（18）急（9）死（4）だ領事裁判権",
        "relations": [
            {
                "name": "伊藤博文",
                "type": "上司",
                "dir": "to"
            },
            {
                "name": "小村寿太郎",
                "type": "後輩",
                "dir": "from"
            }
        ],
        "era": "明治時代"
    },
    {
        "id": "c031",
        "name": "小村寿太郎",
        "title": "関税自主権の回復者",
        "rarity": 2,
        "stats": {
            "str": 50,
            "int": 95,
            "cha": 80
        },
        "desc": "日露戦争後のポーツマス条約を結んだ。その後、外務大臣として関税自主権の完全回復を成し遂げた。",
        "img": "./assets/images/card_komura_1771336028802.png",
        "group": "明治",
        "kana": "小村寿太郎",
        "lifespan": "1855-1911",
        "timeline": [
            {
                "y": "1905",
                "e": "ポーツマス条約に調印"
            },
            {
                "y": "1911",
                "e": "関税自主権の回復"
            }
        ],
        "keywords": [
            "条約改正",
            "日露戦争",
            "ポーツマス条約"
        ],
        "mnemonic": "遠く（19）いい（11）日、関税回復",
        "relations": [
            {
                "name": "セオドア・ルーズベルト",
                "type": "仲介者",
                "dir": "to"
            },
            {
                "name": "桂太郎",
                "type": "首相",
                "dir": "from"
            }
        ],
        "era": "明治時代"
    },
    {
        "id": "c032",
        "name": "野口英世",
        "title": "世界的な医学者",
        "rarity": 3,
        "stats": {
            "str": 20,
            "int": 98,
            "cha": 90
        },
        "desc": "貧しい農家に生まれ、左手の火傷を乗り越えて医学者になった。黄熱病の研究中にアフリカで亡くなった。",
        "img": "./assets/images/card_noguchi_1771336242704.png",
        "group": "大正",
        "kana": "野口英世",
        "lifespan": "1876-1928",
        "timeline": [
            {
                "y": "1911",
                "e": "黄熱病の研究を開始"
            },
            {
                "y": "1928",
                "e": "アフリカのガーナで死去"
            }
        ],
        "keywords": [
            "黄熱病",
            "ノーベル賞候補",
            "千円札"
        ],
        "mnemonic": "",
        "relations": [
            {
                "name": "北里柴三郎",
                "type": "恩師",
                "dir": "to"
            },
            {
                "name": "ロックフェラー",
                "type": "支援",
                "dir": "from"
            }
        ],
        "era": "大正・昭和"
    },
    {
        "id": "c033",
        "name": "マッカーサー",
        "title": "GHQ最高司令官",
        "rarity": 4,
        "stats": {
            "str": 90,
            "int": 95,
            "cha": 88
        },
        "desc": "戦後、GHQのトップとして日本を占領統治した。財閥解体や農地改革など、民主化政策を進めた。",
        "img": "./assets/images/card_macarthur_1771336491426.png",
        "group": "昭和",
        "kana": "マッカーサー",
        "lifespan": "1880-1964",
        "timeline": [
            {
                "y": "1945",
                "e": "厚木飛行場に到着"
            },
            {
                "y": "1950",
                "e": "朝鮮戦争で指揮を執る"
            },
            {
                "y": "1951",
                "e": "解任され帰国"
            }
        ],
        "keywords": [
            "GHQ",
            "財閥解体",
            "農地改革"
        ],
        "mnemonic": "徳（19）行（5）う（0）ぞ朝鮮戦争",
        "relations": [
            {
                "name": "吉田茂",
                "type": "交渉相手",
                "dir": "to"
            },
            {
                "name": "昭和天皇",
                "type": "会見",
                "dir": "from"
            }
        ],
        "era": "昭和（戦後）"
    }
];

function getCardById(id) {
    return cardData.find(c => c.id === id);
}

function getRandomDrop() {
    // 確率設定 (N:60%, R:30%, SR:8%, UR:2%)
    const rand = Math.random() * 100;
    let targetRarity = 1;

    if (rand > 98) targetRarity = 4; // 2% SSR/UR
    else if (rand > 90) targetRarity = 3; // 8% SR
    else if (rand > 60) targetRarity = 2; // 30% R
    else targetRarity = 1; // 60% N

    let pool = cardData.filter(c => c.rarity === targetRarity);
    if (pool.length === 0) {
        pool = cardData;
    }

    if (pool.length === 0) return null;
    return pool[Math.floor(Math.random() * pool.length)];
}
