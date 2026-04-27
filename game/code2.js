gdjs.End_32SceneCode = {};
gdjs.End_32SceneCode.localVariables = [];
gdjs.End_32SceneCode.idToCallbackMap = new Map();
gdjs.End_32SceneCode.GDdisplayObjects1= [];
gdjs.End_32SceneCode.GDdisplayObjects2= [];
gdjs.End_32SceneCode.GDNewSpriteObjects1= [];
gdjs.End_32SceneCode.GDNewSpriteObjects2= [];
gdjs.End_32SceneCode.GDSummaryTextObjects1= [];
gdjs.End_32SceneCode.GDSummaryTextObjects2= [];
gdjs.End_32SceneCode.GDRestartObjects1= [];
gdjs.End_32SceneCode.GDRestartObjects2= [];
gdjs.End_32SceneCode.GDbgObjects1= [];
gdjs.End_32SceneCode.GDbgObjects2= [];
gdjs.End_32SceneCode.GDwallsObjects1= [];
gdjs.End_32SceneCode.GDwallsObjects2= [];
gdjs.End_32SceneCode.GDiconObjects1= [];
gdjs.End_32SceneCode.GDiconObjects2= [];


gdjs.End_32SceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SummaryText"), gdjs.End_32SceneCode.GDSummaryTextObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).setString("inputname");
}
{for(var i = 0, len = gdjs.End_32SceneCode.GDSummaryTextObjects1.length ;i < len;++i) {
    gdjs.End_32SceneCode.GDSummaryTextObjects1[i].getBehavior("Text").setText("Time: " + gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) / 1000) + " s" + gdjs.evtTools.string.newLine() + "Errors (wall bumps): " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Error1"))));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Restart"), gdjs.End_32SceneCode.GDRestartObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.End_32SceneCode.GDRestartObjects1.length;i<l;++i) {
    if ( gdjs.End_32SceneCode.GDRestartObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.End_32SceneCode.GDRestartObjects1[k] = gdjs.End_32SceneCode.GDRestartObjects1[i];
        ++k;
    }
}
gdjs.End_32SceneCode.GDRestartObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Welcome Scene", false);
}
}

}


};

gdjs.End_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.End_32SceneCode.GDdisplayObjects1.length = 0;
gdjs.End_32SceneCode.GDdisplayObjects2.length = 0;
gdjs.End_32SceneCode.GDNewSpriteObjects1.length = 0;
gdjs.End_32SceneCode.GDNewSpriteObjects2.length = 0;
gdjs.End_32SceneCode.GDSummaryTextObjects1.length = 0;
gdjs.End_32SceneCode.GDSummaryTextObjects2.length = 0;
gdjs.End_32SceneCode.GDRestartObjects1.length = 0;
gdjs.End_32SceneCode.GDRestartObjects2.length = 0;
gdjs.End_32SceneCode.GDbgObjects1.length = 0;
gdjs.End_32SceneCode.GDbgObjects2.length = 0;
gdjs.End_32SceneCode.GDwallsObjects1.length = 0;
gdjs.End_32SceneCode.GDwallsObjects2.length = 0;
gdjs.End_32SceneCode.GDiconObjects1.length = 0;
gdjs.End_32SceneCode.GDiconObjects2.length = 0;

gdjs.End_32SceneCode.eventsList0(runtimeScene);
gdjs.End_32SceneCode.GDdisplayObjects1.length = 0;
gdjs.End_32SceneCode.GDdisplayObjects2.length = 0;
gdjs.End_32SceneCode.GDNewSpriteObjects1.length = 0;
gdjs.End_32SceneCode.GDNewSpriteObjects2.length = 0;
gdjs.End_32SceneCode.GDSummaryTextObjects1.length = 0;
gdjs.End_32SceneCode.GDSummaryTextObjects2.length = 0;
gdjs.End_32SceneCode.GDRestartObjects1.length = 0;
gdjs.End_32SceneCode.GDRestartObjects2.length = 0;
gdjs.End_32SceneCode.GDbgObjects1.length = 0;
gdjs.End_32SceneCode.GDbgObjects2.length = 0;
gdjs.End_32SceneCode.GDwallsObjects1.length = 0;
gdjs.End_32SceneCode.GDwallsObjects2.length = 0;
gdjs.End_32SceneCode.GDiconObjects1.length = 0;
gdjs.End_32SceneCode.GDiconObjects2.length = 0;


return;

}

gdjs['End_32SceneCode'] = gdjs.End_32SceneCode;
