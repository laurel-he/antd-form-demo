const treeRule = {
    "tree":[
        {
            "treeId":1,
            "name":"SkinImprove",
            "show":true,
            "chinese":"皮肤改善工作流",
            "child":[
                {
                    "treeId": 5,
                    "name":"dynamicSkinSmooth",
                    "show":false,
                    "chinese":"动态皮肤光滑",
                    "child": []
                },
                {
                    "treeId": 6,
                    "name":"useFaceMask",
                    "show":false,
                    "chinese":"使用皮肤蒙版",
                    "child": []
                }
            ]
        },
        {
            "treeId": 2,
            "name":"HighPass",
            "show":true,
            "chinese":"高反差保留",
            "child":[{
                "treeId":7,
                "name":"useFaceMask",
                "show":false,
                "chinese":"使用皮肤蒙版",
                "child": []
            }]
        },
        {
            "treeId": 3,
            "name":"Lut",
            "show":false,
            "chinese":"lut处理",
            "child":[
                {
                    "treeId":8,
                    "name":"useFaceMask",
                    "show":false,
                    "chinese":"使用皮肤蒙版",
                    "child": []
                }
            ]
        },
        {
            "treeId": 4,
            "name":"Makeup",
            "show":true,
            "chinese":"美妆",
            "child":[
                {
                    "treeId":10,
                    "name":"men",
                    "show":true,
                    "chinese":"男",
                    "child":[
                        {
                            "treeId": 11,
                            "name":"conditionalJudgment",
                            "show":true,
                            "chinese":"附条件判决",
                            "child": []
                        },
                        {
                            "treeId": 12,
                            "name":"conditionalJudgmentRight",
                            "show":true,
                            "chinese":"附条件判决右",
                            "child": []
                        }
                    ]
                },
                {
                    "treeId":4,
                    "name":"women",
                    "show":true,
                    "chinese":"女",
                    "child":[
                        {
                            "treeId": 13,
                            "name":"conditionalJudgment",
                            "show":true,
                            "chinese":"附条件判决",
                            "child": []
                        },
                        {
                            "treeId": 14,
                            "name":"conditionalJudgmentRight",
                            "show":true,
                            "chinese":"附条件判决右",
                            "child": []
                        }
                    ]
                }
            ]
        }
    ],
    "modules":{
        "data-params-list-SkinImprove-enable":{
            "tree":"data-params-list-SkinImprove-enable",
            "show":true,
            "type":"switch",
            "value":"1",
            "chinese":"是否启用",
            "readyOnly":true,
            "parentId": 1
        },
        "data-params-list-HighPass-enable":{
            "tree":"",
            "show":true,
            "type":"switch",
            "value":"1",
            "chinese":"是否启用",
            "readyOnly":false,
            "parentId": 2
        },
        "data-params-list-HighPass-useFaceMask-enable":{
            "tree":"",
            "show":true,
            "type":"switch",
            "value":"1",
            "chinese":"是否启用",
            "readyOnly":false,
            "parentId": 7
        },
        "data-params-list-HighPass-useFaceMask-blendOpacity":{
            "show":true,
            "type":"input",
            "value":"1",
            "chinese":"混合不透明度",
            "readyOnly":false,
            "parentId": 7
        },
        "data-params-list-Makeup-liangYan":{
            "show":true,
            "type":"radioNumber",
            "value":"1",
            "chinese":"亮眼",
            "readyOnly":false,
            "parentId": 4
        },
        "data-params-list-Makeup-men-shouBi":{
            "show":true,
            "type":"radioNumber",
            "value":"1",
            "chinese":"男：瘦鼻",
            "readyOnly":false,
            "parentId": 10
        },
        "data-params-list-Makeup-men-daYan":{
            "show":true,
            "type":"radioNumber",
            "value":"1",
            "chinese":"男：大眼",
            "readyOnly":false,
            "parentId": 10
        }
    }
}

export default treeRule;
