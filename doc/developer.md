## 开发说明文档

### 基础UI开发框架

该项目使用react-native-ui-lib 作为UI开发框架. 参考文档如下:
[点击我查看文档](https://wix.github.io/react-native-ui-lib/docs/foundation/modifiers
)

#### 1.布局修饰

```
flex - apply flex:1 on a view
flex-[value] - When you want to control the flex value
flexS - FlexShrink
flexG - FlexGrow
left
top
right
bottom
row - change direction to row (default is column)
center
centerH - center content horizontally
centerV - center content vertically
spread - spread content (similar to space-between)
使用:
<View flex left row center/>
```

```
padding-[value] - will add padding to all corners (e.g. padding-30 will add 30 pt of padding)
paddingL-[value] - Left padding
paddingT-[value] - Top padding
paddingR-[value] - Right padding
paddingB-[value] - Bottom padding
paddingH-[value] - Horizontal padding
paddingV-[value] - Vertical padding
使用:
<View padding-20 paddingH-20 paddingL-20/>    
```

```
margin-[value]
marginL-[value] - Left margin
marginT-[value] - Top margin
marginR-[value] - Right margin
marginB-[value] - Bottom margin
marginH-[value] - Horizontal margin
marginV-[value] - Vertical margin
使用:
<View margin-20 marginH-20 marginL-20/> 
```

#### 2.文字样式

参考``resource/styles``模块

需要定义新的字体或者字重时请添加代码:

```
const fontMap = {
    `name`: {fontSize: `size`, fontWeight:`weight`'},
    ...
    }
```

使用:

```
<Text size10/>    
```

### 3.颜色

参考``resource/themes``模块

需要定义新的颜色时请添加代码:

```
const lightColors = {
    view1: `color`,
    text1: `color`
    ...
};
const darkColors = {
    view1: `color`,
    text1: `color`
    ...
}
```

使用:

```
<View backgroundColor={Colors.view1}/>
<View bg-view1/>
<Text text1/>            
```

### 4.文案

参考``resource/locales``模块

添加文案时,请在对应语言文件下添加文案,添加要求如下:

```
 "moduleName_functionName_information": "我是文案"
 模块名称 _ 功能名称 _ 文案描述 : 我是文案 
```
文案使用:
```
t("moduleName_functionName_information")  
eg:
<Text children={t("moduleName_functionName_information")}/>
<Text>{t("moduleName_functionName_information")}</Text>        
```
### 5.图片资源
参考``resource/images``模块

添加图片资源
```
const icons = {
    iconName`: require('./v1/iconName.png')   
    ...
}
```
使用图片资源
```
<Image assetName="iconName"/>
<Image source={Assets.icons.iconName}>
```

## 数据流

数据流使用Redux作为数据六管理框架,
```
    "react-redux": "^8.0.2",
    "redux": "^4.2.0",
    "redux-actions": "^2.6.5",
    "redux-logger": "^3.0.6",
    "redux-persist": "^6.0.0",
    "redux-thunk": "^2.4.1",
    "reselect": "^4.1.6",
```

用法请参考 todo 
