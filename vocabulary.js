const words = [
    ["astronomer", "天文学家"],
    ["banquet", "宴会"],
    ["oblivious", "健忘的, 无意识的"],
    ["crutch", "轮椅/拐杖"],
    ["stagnant", "停滞的"],
    ["tedious", "乏味的"],
    ["demoralizing", "令人沮丧的"],
    ["steamroll", "平推"],
    ["aperture", "光圈"],
    ["vicinity", "附近, 周围"],
    ["tweening", "补间/插值"],
    ["chasm", "裂谷，深渊"],
    ["sentient", "有感觉的，有意识的"],
    ["obscure", "模糊的"],
    ["damp", "潮湿的"],
    ["incentivize", "激励"],
    ["full-fledged", "成熟的，充分发展的"],
    ["guru", "大师"],
    ["emergent", "新兴的, 紧急的"],
    ["ornate", "装饰华丽的"],
    ["magma", "岩浆"],
    ["contour", "轮廓"],
    ["noxious", "有害的"],
    ["gimbal lock", "万向节锁"],
    ["tandem", "串联"],
    ["extrude", "挤压"],
    ["haphazard", "偶然的，随意的"],
    ["convex", "凸面的"],
    ["albedo", "反照率"],
    ["crevices", "裂缝"],
    ["subordinate", "下级的，从属的"],
    ["pertain", "相关的"],
    ["hectic", "忙乱的"],
    ["agonize", "（使）极度痛苦"],
    ["puppeteer", "木偶师"],
    ["denote", "表示"],
    ["wack", "怪人"],
    ["proactive", "积极主动的"],
    ["altruistic", "利他的"],
    ["deplete", "耗尽"],
    ["refraction", "折射"],
    ["vitality", "活力，生命力"],
    ["logistics", "物流"],
    ["syllabus", "教学大纲"],
    ["polygon", "多边形"],
    ["propagate", "传播"],
    ["notion", "概念"],
    ["presage", "预示"],
    ["spout", "喷口"],
    ["fact", "事实"],
    ["synopsis", "概要"],
    ["catapult", "弹射器"],
    ["morphing", "变形"],
    ["boffin", "专家，科学家（俚语）"],
    ["fray", "争吵"],
    ["dodgy", "可疑的"],
    ["ample", "充足的"],
    ["allude to", "暗指"],
    ["sprite", "精灵"],
    ["atlas", "精灵图集, spritesheet"],
    ["effectively", "基本上就是..., basically"],
    ["entail", "蕴涵"],
    ["composite", "复合的"],
    ["dither", "抖动"],
    ["interleave", "交错"],
    ["palette", "调色板"],
    ["arbitrary", "人为的, 任意的"],
    ["artifacting", "伪影"],
    ["faux", "假的, 人造的"],
    ["crude", "粗糙的"],
    ["gist", "要点"],
    ["ubiquitous, omnipresent", "无处不在的"],
    ["tactile", "触觉的"],
    ["apt", "恰当的"],
    ["synonymous", "同义的"],
    ["fling", "抛"],
    ["die", "骰子"],
    ["disparate", "不同的"],
    ["fixture", "固定装置"],
    ["kinematic", "运动学的"],
    ["affix", "附加"],
    ["climatic", "气候的"],
    ["objectively", "客观地"],
    ["restitution", "恢复"],
    ["joint", "关节"],
    ["treads", "踏板"],
    ["inclined", "倾斜的"],
    ["pertinent", "相关的"],
    ["coaxial", "同轴的"],
    ["suffice to say", "可以说..."],
    ["rigid body", "刚体"],
    ["pinball", "弹球"],
    ["yield", "让..."],
    ["pitch", "俯仰"],
    ["yaw", "偏航"],
    ["polling", "轮询"],
    ["boilerplate", "模板"],
    ["caveat", "注意事项"],
    ["imposter", "冒名顶替者"],
    ["geometry", "几何体"],
    ["cue", "暗示"],
    ["spline", "样条线"],
    ["buoyancy", "浮力"],
    ["pontoon", "浮桥"],
    ["murkiness", "浑浊度"],
    ["caustics", "焦散"],
    ["ambient occlusion", "环境光遮蔽"],
    ["locomotion", "运动"],
    ["translucent", "半透明"],
    ["decal", "贴花"],
    ["polynomial", "多项式"],
    ["jolly", "欢乐的"],
    ["niggling", "琐碎的"],
    ["scalar", "标量"],
    ["eigenvalues", "特征值"],
    ["canonical", "标准的"],
    ["pare", "削减"],
    ["parallelogram", "平行四边形"],
    ["associativity", "关联性(结合性)"],
    ["orthonormal", "正交的"],
    ["commutative", "交换的"],
    ["applet", "小程序"],
    ["composing transforms", "组合变换"],
    ["reciprocal", "倒数"],
    ["corollary", "推论"],
    ["euler angles", "欧拉角"],
    ["quaternions", "四元数"],
    ["sanity check", "完整性检查"],
    ["trigonometry", "三角学"],
    ["jargon", "行话"],
    ["triad", "三元组"],
    ["yank", "猛拉"],
    ["designated", "指定的"],
    ["proposition", "命题"],
    ["mitigate", "减轻"],
    ["dislodge", "移位"],
    ["annealing", "退火"],
    ["applicable", "适用的"],
    ["decimal", "小数"],
    ["interleave", "交错"],
    ["perceptron", "感知元"],
    ["outliers", "异常值"],
    ["holdout", "验证集"],
    ["suffice", "足够"],
    ["intricate", "复杂的"],
    ["plop", "放, 啪嗒声"],
    ["chronologically", "按时间顺序"],
    ["occlusions", "遮挡"],
    ["desaturate", "去饱和"],
    ["cheesy", "俗气的"],
    ["intensity", "强度"],
    ["tangent", "切线"],
    ["overhead view", "俯视图"],
    ["perspective projection", "透视投影"],
    ["focal plane", "焦平面"],
    ["frustum", "截锥体"],
    ["perturbed", "扰动的"],
    ["encompass", "包围"],
    ["discern", "辨别"],
    ["primitive", "图元"],
    ["stencil", "模板"],
    ["substitute", "替代"],
    ["uniform matrix", "均匀矩阵"],
    ["tessellation", "细分"],
    ["stride", "步长"],
    ["nuts and bolts", "螺母和螺栓"],
    ["diffuse", "散射"],
    ["specular", "镜面反射"],
    ["magenta", "品红"],
    ["advent", "到来"],
    ["glossy", "光滑的"],
    ["polished floor", "抛光之后的地板"],
    ["dielectric", "电介质"],
    ["quadratic", "二次的"],
    ["matte", "哑光的"],
    ["coarse", "粗糙的"],
    ["wood grain", "木纹"],
    ["bilinear", "双线性"],
    ["mipmap", "多级贴图"],
    ["brackets", "括号"],
    ["arbitrage", "套利"],
    ["nuance", "细微差别"],
    ["trippy", "迷幻的"],
    ["taxonomy", "分类学"],
    ["ethos", "精华"],
    ["interreflections", "互相反射"],
    ["tinge", "色调"],
    ["subsequently", "随后"],
    ["hindsight", "后见之明"],
    ["manifestation", "表现"],
    ["barycentric", "重心的"],
    ["ellipsoid", "椭球体"],
    ["nevertheless", "尽管如此"],
    ["jitter", "抖动"],
    ["jaggies", "锯齿状"],
    ["film", "画布"],
    ["cull", "剔除"],
    ["ambient", "环境的"],
    ["reminiscent", "回忆的"],
    ["finicky", "挑剔的"],
    ["nacho", "烤干酪辣味玉米片"],
    ["namely", "也就是..."],
    ["respectively", "分别"],
    ["elaborate", "阐述"],
    ["median", "中间值"],
    ["empirical", "经验的"],
    ["niche", "小众, 领域"],
    ["ecstatic", "欣喜若狂"],
    ["trivial", "琐碎的"],
    ["token", "代币, piece"],
    ["constituent", "组成的"],
    ["inaudible", "听不清的"],
    ["exhaustive", "详尽的"],
    ["fine-grained control", "细粒度控制"],
    ["inertia", "惯性"],
    ["quirks", "怪癖"],
    ["clumsy", "笨拙的"],
    ["infer", "推断"],
    ["lo and behold", "瞧！看！"],
    ["factorial", "阶乘"],
    ["punctuation", "标点"],
    ["lingo", "行话"],
    ["poised", "准备好的"],
    ["pseudonymous", "匿名的"],
    ["decimal point", "小数点"],
    ["redeem", "兑换"],
    ["evident", "明显的"],
    ["schism", "分裂"],
    ["implication", "预兆"],
    ["siloed", "孤立的"],
    ["scarce", "稀缺的"],
    ["formulate", "构想"],
    ["recur", "再次发生"],
    ["convoluted", "复杂的"],
    ["admissible", "可接受的"],
    ["intractable", "难以处理的"],
    ["adversarial search", "对抗搜索"],
    ["verbose", "详细的"],
    ["deduce", "推导"],
    ["convolution", "卷积"],
    ["pooling", "汇集"],
    ["recurrent", "循环的"],
    ["modus ponens", "MP"],
    ["exclusive or", "异或"],
    ["inclusive or", "或"],
    ["entail", "蕴涵"],
    ["complimentary literals", "互补文字"],
    ["clause", "子句"],
    ["disjunction", "or"],
    ["inference by resolution", "消解推理"],
    ["quantifier", "量词"],
    ["distill", "提取"],
    ["counterfeit", "伪造(的)"],
    ["axiom", "公理"],
    ["contrived", "人为的"],
    ["heredity", "遗传"],
    ["logistic sigmoid", "逻辑S型函数"],
    ["rectified", "整流的"],
    ["circumvent", "规避"],
    ["epoch", "轮, round"],
    ["syntax", "语法"],
    ["briskly", "轻快地"],
    ["semantics", "语义"],
    ["determiner", "限定词"],
    ["prepositions", "介词"],
    ["corpus", "语料库"],
    ["wind up", "结束，..."],
    ["proportional to", "正比于..."],
    ["sentiment", "情绪"],
    ["tensor", "张量"],
    ["monetary", "货币的"],
];