gdjs.Welcome_32SceneCode = {};
gdjs.Welcome_32SceneCode.localVariables = [];
gdjs.Welcome_32SceneCode.idToCallbackMap = new Map();
gdjs.Welcome_32SceneCode.GDTitle_9595textObjects1= [];
gdjs.Welcome_32SceneCode.GDTitle_9595textObjects2= [];
gdjs.Welcome_32SceneCode.GDinputnameObjects1= [];
gdjs.Welcome_32SceneCode.GDinputnameObjects2= [];
gdjs.Welcome_32SceneCode.GDName_9595labelObjects1= [];
gdjs.Welcome_32SceneCode.GDName_9595labelObjects2= [];
gdjs.Welcome_32SceneCode.GDButtonObjects1= [];
gdjs.Welcome_32SceneCode.GDButtonObjects2= [];
gdjs.Welcome_32SceneCode.GDTouchButtonObjects1= [];
gdjs.Welcome_32SceneCode.GDTouchButtonObjects2= [];
gdjs.Welcome_32SceneCode.GDTiltButtonObjects1= [];
gdjs.Welcome_32SceneCode.GDTiltButtonObjects2= [];
gdjs.Welcome_32SceneCode.GDBothButtonObjects1= [];
gdjs.Welcome_32SceneCode.GDBothButtonObjects2= [];
gdjs.Welcome_32SceneCode.GDbgObjects1= [];
gdjs.Welcome_32SceneCode.GDbgObjects2= [];
gdjs.Welcome_32SceneCode.GDwallsObjects1= [];
gdjs.Welcome_32SceneCode.GDwallsObjects2= [];
gdjs.Welcome_32SceneCode.GDiconObjects1= [];
gdjs.Welcome_32SceneCode.GDiconObjects2= [];


gdjs.Welcome_32SceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("TouchButton"), gdjs.Welcome_32SceneCode.GDTouchButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Welcome_32SceneCode.GDTouchButtonObjects1.length;i<l;++i) {
    if ( gdjs.Welcome_32SceneCode.GDTouchButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Welcome_32SceneCode.GDTouchButtonObjects1[k] = gdjs.Welcome_32SceneCode.GDTouchButtonObjects1[i];
        ++k;
    }
}
gdjs.Welcome_32SceneCode.GDTouchButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene 1", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("TiltButton"), gdjs.Welcome_32SceneCode.GDTiltButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Welcome_32SceneCode.GDTiltButtonObjects1.length;i<l;++i) {
    if ( gdjs.Welcome_32SceneCode.GDTiltButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Welcome_32SceneCode.GDTiltButtonObjects1[k] = gdjs.Welcome_32SceneCode.GDTiltButtonObjects1[i];
        ++k;
    }
}
gdjs.Welcome_32SceneCode.GDTiltButtonObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setString("tilt");
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene 1", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BothButton"), gdjs.Welcome_32SceneCode.GDBothButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Welcome_32SceneCode.GDBothButtonObjects1.length;i<l;++i) {
    if ( gdjs.Welcome_32SceneCode.GDBothButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Welcome_32SceneCode.GDBothButtonObjects1[k] = gdjs.Welcome_32SceneCode.GDBothButtonObjects1[i];
        ++k;
    }
}
gdjs.Welcome_32SceneCode.GDBothButtonObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setString("both");
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene 1", false);
}
}

}


};

gdjs.Welcome_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Welcome_32SceneCode.GDTitle_9595textObjects1.length = 0;
gdjs.Welcome_32SceneCode.GDTitle_9595textObjects2.length = 0;
gdjs.Welcome_32SceneCode.GDinputnameObjects1.length = 0;
gdjs.Welcome_32SceneCode.GDinputnameObjects2.length = 0;
gdjs.Welcome_32SceneCode.GDName_9595labelObjects1.length = 0;
gdjs.Welcome_32SceneCode.GDName_9595labelObjects2.length = 0;
gdjs.Welcome_32SceneCode.GDButtonObjects1.length = 0;
gdjs.Welcome_32SceneCode.GDButtonObjects2.length = 0;
gdjs.Welcome_32SceneCode.GDTouchButtonObjects1.length = 0;
gdjs.Welcome_32SceneCode.GDTouchButtonObjects2.length = 0;
gdjs.Welcome_32SceneCode.GDTiltButtonObjects1.length = 0;
gdjs.Welcome_32SceneCode.GDTiltButtonObjects2.length = 0;
gdjs.Welcome_32SceneCode.GDBothButtonObjects1.length = 0;
gdjs.Welcome_32SceneCode.GDBothButtonObjects2.length = 0;
gdjs.Welcome_32SceneCode.GDbgObjects1.length = 0;
gdjs.Welcome_32SceneCode.GDbgObjects2.length = 0;
gdjs.Welcome_32SceneCode.GDwallsObjects1.length = 0;
gdjs.Welcome_32SceneCode.GDwallsObjects2.length = 0;
gdjs.Welcome_32SceneCode.GDiconObjects1.length = 0;
gdjs.Welcome_32SceneCode.GDiconObjects2.length = 0;

gdjs.Welcome_32SceneCode.eventsList0(runtimeScene);
gdjs.Welcome_32SceneCode.GDTitle_9595textObjects1.length = 0;
gdjs.Welcome_32SceneCode.GDTitle_9595textObjects2.length = 0;
gdjs.Welcome_32SceneCode.GDinputnameObjects1.length = 0;
gdjs.Welcome_32SceneCode.GDinputnameObjects2.length = 0;
gdjs.Welcome_32SceneCode.GDName_9595labelObjects1.length = 0;
gdjs.Welcome_32SceneCode.GDName_9595labelObjects2.length = 0;
gdjs.Welcome_32SceneCode.GDButtonObjects1.length = 0;
gdjs.Welcome_32SceneCode.GDButtonObjects2.length = 0;
gdjs.Welcome_32SceneCode.GDTouchButtonObjects1.length = 0;
gdjs.Welcome_32SceneCode.GDTouchButtonObjects2.length = 0;
gdjs.Welcome_32SceneCode.GDTiltButtonObjects1.length = 0;
gdjs.Welcome_32SceneCode.GDTiltButtonObjects2.length = 0;
gdjs.Welcome_32SceneCode.GDBothButtonObjects1.length = 0;
gdjs.Welcome_32SceneCode.GDBothButtonObjects2.length = 0;
gdjs.Welcome_32SceneCode.GDbgObjects1.length = 0;
gdjs.Welcome_32SceneCode.GDbgObjects2.length = 0;
gdjs.Welcome_32SceneCode.GDwallsObjects1.length = 0;
gdjs.Welcome_32SceneCode.GDwallsObjects2.length = 0;
gdjs.Welcome_32SceneCode.GDiconObjects1.length = 0;
gdjs.Welcome_32SceneCode.GDiconObjects2.length = 0;


return;

}

gdjs['Welcome_32SceneCode'] = gdjs.Welcome_32SceneCode;
