const modules = {
    "modules":[
        {
            "name":"SkinImprove",
            "show":true,
            "unit":[
                {
                    "name":"enable",
                    "show":true,
                    "chinese":"是否启用",
                    "type":"switch",
                    "child":[

                    ]
                }
            ]
        },
        {
            "name":"HighPass",
            "show":true,
            "unit":[
                {
                    "name":"enable",
                    "chinese":"是否启用",
                    "type":"switch",
                    "show":true,
                    "child":[

                    ]
                },
                {
                    "name":"useFaceMask",
                    "chinese":"使用脸部蒙版",
                    "type":"Accordion",
                    "show":true,
                    "child":[
                        {
                            "name":"enable",
                            "chinese":"是否启用",
                            "type":"switch",
                            "show":true,
                            "child":[

                            ]
                        },
                        {
                            "name":"blendOpacity",
                            "chinese":"混合不透明度",
                            "type":"input",
                            "show":true,
                            "child":[

                            ]
                        },
                        {
                            "name":"blendOpacity",
                            "chinese":"混合模式",
                            "type":"input",
                            "show":true,
                            "child":[

                            ]
                        },
                        {
                            "name":"blendOpacity",
                            "chinese":"内容模式",
                            "type":"input",
                            "show":true,
                            "child":[

                            ]
                        },
                        {
                            "name":"blendOpacity",
                            "chinese":"对齐方式",
                            "type":"input",
                            "show":true,
                            "child":[

                            ]
                        }
                    ]
                }
            ]
        }
    ]
}

export default modules
