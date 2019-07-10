const data = {
    "base": {
      "version": 1.0
    },
    "params": {
      "chang_jing": {
        "enable": true,
        "description": "场景配置，如果这里指定了场景，将会强制使用该场景；",
        "filepath": "makeup.json"
      },
      "auto_shadow_highlight": {
        "description": "15.高光阴影 默认false",
        "enable": false
      },
      "raw_to_jpg": {
        "description": "白平衡计算那个控制开关，默认为true, 也就是不写的情况默认为true ,设置为false就不计算",
        "dynamicWBSetting": false,
        "isTheSceneASolidBackground": false,
        "rtExposureCompensationX": 180
      },
      "auto_levels": {
        "description": "20.log2自动色阶   eAutoLevelOperationType(DEFAULT_R_G_B_OPERATION,ALL_RGB_OPERATION) ;  eAutoLeveCutType(DEFAULT_BIN_CUT, SINGLE_CUT) ; auto_level_type 0 = （新）全图、一级（0.0005）、ALL  1 = （老流程）蒙版、二级（0.0005，0.01，0.01，0.0005）、RGB",
        "enable":false,
        "isTheSceneASolidBackground": false,
        "auto_level_type":0,
        "0": {
          "fLowCutL": 0.001,
          "fLowCutR": 0.001,
          "fHigCutL": 0.001,
          "fHigCutR": 0.001,
          "eAutoLevelOperationType": "ALL_RGB_OPERATION"
        },
        "1": {
          "fLowCutL": 0.0005,
          "fLowCutR": 0.001,
          "fHigCutL": 0.001,
          "fHigCutR": 0.0005,
          "eAutoLevelOperationType": "DEFAULT_R_G_B_OPERATION"
        }
      },
      "exposure": {
        "description": "曝光矫正",
        "enable": false,
        "stdSkinLum": 180,
        "useFaceRectMask": true
      },
      "contrast": {
        "description": "矫正对比度",
        "enable": false,
        "dark": 35,
        "highlights": 220
      },
      "correction_LUT": {
        "description": "70.矫正LUT",
        "enable": false,
        "filepath": "lut.png",
        "black_levels": 0.0,
        "blend_over_strength": 0.2,
        "blend_screen_strength": 0.25
      },
      "skin_correction": {
        "description": "肤色矫正 80",
        "enable": false,
        "iR": 173,
        "iG": 136,
        "iB": 118,
        "iLum": 160,
        "useFaceRectMask": false
      },
      "skin_adjust16HSV": {
        "description": "肤色矫正 90",
        "enable": false,
        "iH": 20,
        "useFaceRectMask": true
      }
    }
}
export default data;