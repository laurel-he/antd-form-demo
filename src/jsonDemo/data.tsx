const data = {
  "base": {
      "version": 1
  },
  "params": {
      "list": [
          {
              "enable": true,
              "description": "皮肤改善工作流",
              "type": "SkinImprove",
              "skinSmooth": 60,
              "dynamicSkinSmooth": {
                  "enable": true,
                  "low": 40,
                  "mid": 55,
                  "high": 65
              },
              "xiuRong": 0,
              "removeAcneValue": 30,
              "skinTextureValue": 60,
              "adjustSkinColor": 0,
              "skinAdjustTargetH": 10,
              "skinAdjustTargetV": 0.8,
              "enableSkinAdjustMask": true,
              "useFaceMask": {
                  "enable": true,
                  "blendOpacity": 100,
                  "blendMode": 0,
                  "contentMode": 1,
                  "alignmentMode": 1,
                  "gaussianBlur": 10,
                  "rad_reverse": 1
              }
          },
          {
              "enable": false,
              "description": "皮肤改善工作流",
              "type": "SkinImprove",
              "skinSmooth": 0,
              "xiuRong": 0,
              "removeAcneValue": 0,
              "skinTextureValue": 0,
              "adjustSkinColor": 50,
              "skinAdjustTargetH": 10,
              "skinAdjustTargetV": 0.8,
              "enableSkinAdjustMask": true,
              "useFaceMask": {
                  "enable": false,
                  "blendOpacity": 100,
                  "blendMode": 0,
                  "contentMode": 1,
                  "alignmentMode": 1,
                  "gaussianBlur": 5,
                  "rad_reverse": 1
              }
          },
          {
              "enable": true,
              "description": "高反差保留",
              "type": "HighPass",
              "param_a": 0.0033,
              "param_b": 1.259,
              "useFaceMask": {
                  "enable": true,
                  "blendOpacity": 50,
                  "blendMode": 9,
                  "contentMode": 1,
                  "alignmentMode": 1,
                  "gaussianBlur": 1,
                  "rad_reverse": 0
              }
          },
          {
              "enable": false,
              "description": "lut处理 useFaceMask.type : 0=人像肤色蒙版，1=眼睛蒙版，2=嘴巴蒙版",
              "type": "Lut",
              "filepath": "ACRlut.png",
              "useFaceMask": {
                  "enable": false,
                  "type": 0,
                  "blendOpacity": 100,
                  "blendMode": 0,
                  "contentMode": 1,
                  "alignmentMode": 1,
                  "gaussianBlur": 5,
                  "rad_reverse": 1
              }
          },
          {
              "enable": true,
              "description": "美妆",
              "type": "Makeup",
              "baiYa": 0,
              "liangYan": 10,
              "men": {
                  "faLingWen": 0,
                  "yuWeiWen": 0,
                  "heiYanQuan": 0,
                  "shouBi": 0,
                  "daYan": 12,
                  "daYanRight": 12,
                  "conditionalJudgment": {
                      "shouLian": 10,
                      "xiaoLian": 0,
                      "VLian": 15
                  },
                  "conditionalJudgmentRight": {
                      "shouLian": 10,
                      "xiaoLian": 0,
                      "VLian": 15
                  },
                  "isEnableMask": false,
                  "isEnforceMake": true
              },
              "women": {
                  "faLingWen": 0,
                  "yuWeiWen": 0,
                  "heiYanQuan": 0,
                  "shouBi": 0,
                  "daYan": 12,
                  "daYanRight": 12,
                  "conditionalJudgment": {
                      "shouLian": 10,
                      "xiaoLian": 0,
                      "VLian": 15
                  },
                  "conditionalJudgmentRight": {
                      "shouLian": 10,
                      "xiaoLian": 0,
                      "VLian": 15
                  },
                  "isEnableMask": false,
                  "isEnforceMake": true
              }
          }
      ]
  }
}
export default data;