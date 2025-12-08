gdjs.Scene_321Code = {};
gdjs.Scene_321Code.localVariables = [];
gdjs.Scene_321Code.idToCallbackMap = new Map();
gdjs.Scene_321Code.GDhouseeObjects1= [];
gdjs.Scene_321Code.GDhouseeObjects2= [];
gdjs.Scene_321Code.GDPlayaObjects1= [];
gdjs.Scene_321Code.GDPlayaObjects2= [];
gdjs.Scene_321Code.GDstartsObjects1= [];
gdjs.Scene_321Code.GDstartsObjects2= [];
gdjs.Scene_321Code.GDhome_9595textObjects1= [];
gdjs.Scene_321Code.GDhome_9595textObjects2= [];
gdjs.Scene_321Code.GDModeLabelObjects1= [];
gdjs.Scene_321Code.GDModeLabelObjects2= [];
gdjs.Scene_321Code.GDbgObjects1= [];
gdjs.Scene_321Code.GDbgObjects2= [];
gdjs.Scene_321Code.GDwallsObjects1= [];
gdjs.Scene_321Code.GDwallsObjects2= [];
gdjs.Scene_321Code.GDiconObjects1= [];
gdjs.Scene_321Code.GDiconObjects2= [];


gdjs.Scene_321Code.mapOfGDgdjs_9546Scene_9595321Code_9546GDwallsObjects1Objects = Hashtable.newFrom({"walls": gdjs.Scene_321Code.GDwallsObjects1});
gdjs.Scene_321Code.mapOfGDgdjs_9546Scene_9595321Code_9546GDPlayaObjects1Objects = Hashtable.newFrom({"Playa": gdjs.Scene_321Code.GDPlayaObjects1});
gdjs.Scene_321Code.mapOfGDgdjs_9546Scene_9595321Code_9546GDwallsObjects1Objects = Hashtable.newFrom({"walls": gdjs.Scene_321Code.GDwallsObjects1});
gdjs.Scene_321Code.mapOfGDgdjs_9546Scene_9595321Code_9546GDPlayaObjects1Objects = Hashtable.newFrom({"Playa": gdjs.Scene_321Code.GDPlayaObjects1});
gdjs.Scene_321Code.mapOfGDgdjs_9546Scene_9595321Code_9546GDhouseeObjects1Objects = Hashtable.newFrom({"housee": gdjs.Scene_321Code.GDhouseeObjects1});
gdjs.Scene_321Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Playa"), gdjs.Scene_321Code.GDPlayaObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "GameTimer");
}
{for(var i = 0, len = gdjs.Scene_321Code.GDPlayaObjects1.length ;i < len;++i) {
    gdjs.Scene_321Code.GDPlayaObjects1[i].setPosition(30,20);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Playa"), gdjs.Scene_321Code.GDPlayaObjects1);
gdjs.copyArray(runtimeScene.getObjects("walls"), gdjs.Scene_321Code.GDwallsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Scene_321Code.mapOfGDgdjs_9546Scene_9595321Code_9546GDwallsObjects1Objects, gdjs.Scene_321Code.mapOfGDgdjs_9546Scene_9595321Code_9546GDPlayaObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Scene_321Code.GDPlayaObjects1 */
/* Reuse gdjs.Scene_321Code.GDwallsObjects1 */
{for(var i = 0, len = gdjs.Scene_321Code.GDPlayaObjects1.length ;i < len;++i) {
    gdjs.Scene_321Code.GDPlayaObjects1[i].separateFromObjectsList(gdjs.Scene_321Code.mapOfGDgdjs_9546Scene_9595321Code_9546GDwallsObjects1Objects, false);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(3).add(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsString() == "touch");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ModeLabel"), gdjs.Scene_321Code.GDModeLabelObjects1);
gdjs.copyArray(runtimeScene.getObjects("Playa"), gdjs.Scene_321Code.GDPlayaObjects1);
{for(var i = 0, len = gdjs.Scene_321Code.GDPlayaObjects1.length ;i < len;++i) {
    gdjs.Scene_321Code.GDPlayaObjects1[i].activateBehavior("Draggable", true);
}
}
{for(var i = 0, len = gdjs.Scene_321Code.GDModeLabelObjects1.length ;i < len;++i) {
    gdjs.Scene_321Code.GDModeLabelObjects1[i].getBehavior("Text").setText("Mode:Touch");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsString() == "tilt");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ModeLabel"), gdjs.Scene_321Code.GDModeLabelObjects1);
gdjs.copyArray(runtimeScene.getObjects("Playa"), gdjs.Scene_321Code.GDPlayaObjects1);
{for(var i = 0, len = gdjs.Scene_321Code.GDPlayaObjects1.length ;i < len;++i) {
    gdjs.Scene_321Code.GDPlayaObjects1[i].activateBehavior("Draggable", false);
}
}
{for(var i = 0, len = gdjs.Scene_321Code.GDModeLabelObjects1.length ;i < len;++i) {
    gdjs.Scene_321Code.GDModeLabelObjects1[i].getBehavior("Text").setText("Mode:Tilt");
}
}
{for(var i = 0, len = gdjs.Scene_321Code.GDPlayaObjects1.length ;i < len;++i) {
    gdjs.Scene_321Code.GDPlayaObjects1[i].addForce(-(gdjs.deviceSensors.motion.getAccelerationX()) * 200, gdjs.deviceSensors.motion.getAccelerationX() * 200, 0);
}
}
{gdjs.deviceSensors.orientation.activateOrientationSensor();
}
{gdjs.deviceSensors.orientation.activateOrientationSensor();
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsString() == "both");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ModeLabel"), gdjs.Scene_321Code.GDModeLabelObjects1);
gdjs.copyArray(runtimeScene.getObjects("Playa"), gdjs.Scene_321Code.GDPlayaObjects1);
{for(var i = 0, len = gdjs.Scene_321Code.GDPlayaObjects1.length ;i < len;++i) {
    gdjs.Scene_321Code.GDPlayaObjects1[i].activateBehavior("Draggable", true);
}
}
{for(var i = 0, len = gdjs.Scene_321Code.GDModeLabelObjects1.length ;i < len;++i) {
    gdjs.Scene_321Code.GDModeLabelObjects1[i].getBehavior("Text").setText("Mode:Both");
}
}
{for(var i = 0, len = gdjs.Scene_321Code.GDPlayaObjects1.length ;i < len;++i) {
    gdjs.Scene_321Code.GDPlayaObjects1[i].addForce(-(gdjs.deviceSensors.motion.getAccelerationX()) * 200, gdjs.deviceSensors.motion.getAccelerationX() * 200, 0);
}
}
{gdjs.deviceSensors.orientation.activateOrientationSensor();
}
{gdjs.deviceSensors.motion.activateMotionSensor();
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Playa"), gdjs.Scene_321Code.GDPlayaObjects1);
gdjs.copyArray(runtimeScene.getObjects("housee"), gdjs.Scene_321Code.GDhouseeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Scene_321Code.mapOfGDgdjs_9546Scene_9595321Code_9546GDPlayaObjects1Objects, gdjs.Scene_321Code.mapOfGDgdjs_9546Scene_9595321Code_9546GDhouseeObjects1Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("home_text"), gdjs.Scene_321Code.GDhome_9595textObjects1);
{for(var i = 0, len = gdjs.Scene_321Code.GDhome_9595textObjects1.length ;i < len;++i) {
    gdjs.Scene_321Code.GDhome_9595textObjects1[i].getBehavior("Text").setText("We're Home!!");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene));
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "End Scene", false);
}
}

}


};

gdjs.Scene_321Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Scene_321Code.GDhouseeObjects1.length = 0;
gdjs.Scene_321Code.GDhouseeObjects2.length = 0;
gdjs.Scene_321Code.GDPlayaObjects1.length = 0;
gdjs.Scene_321Code.GDPlayaObjects2.length = 0;
gdjs.Scene_321Code.GDstartsObjects1.length = 0;
gdjs.Scene_321Code.GDstartsObjects2.length = 0;
gdjs.Scene_321Code.GDhome_9595textObjects1.length = 0;
gdjs.Scene_321Code.GDhome_9595textObjects2.length = 0;
gdjs.Scene_321Code.GDModeLabelObjects1.length = 0;
gdjs.Scene_321Code.GDModeLabelObjects2.length = 0;
gdjs.Scene_321Code.GDbgObjects1.length = 0;
gdjs.Scene_321Code.GDbgObjects2.length = 0;
gdjs.Scene_321Code.GDwallsObjects1.length = 0;
gdjs.Scene_321Code.GDwallsObjects2.length = 0;
gdjs.Scene_321Code.GDiconObjects1.length = 0;
gdjs.Scene_321Code.GDiconObjects2.length = 0;

gdjs.Scene_321Code.eventsList0(runtimeScene);
gdjs.Scene_321Code.GDhouseeObjects1.length = 0;
gdjs.Scene_321Code.GDhouseeObjects2.length = 0;
gdjs.Scene_321Code.GDPlayaObjects1.length = 0;
gdjs.Scene_321Code.GDPlayaObjects2.length = 0;
gdjs.Scene_321Code.GDstartsObjects1.length = 0;
gdjs.Scene_321Code.GDstartsObjects2.length = 0;
gdjs.Scene_321Code.GDhome_9595textObjects1.length = 0;
gdjs.Scene_321Code.GDhome_9595textObjects2.length = 0;
gdjs.Scene_321Code.GDModeLabelObjects1.length = 0;
gdjs.Scene_321Code.GDModeLabelObjects2.length = 0;
gdjs.Scene_321Code.GDbgObjects1.length = 0;
gdjs.Scene_321Code.GDbgObjects2.length = 0;
gdjs.Scene_321Code.GDwallsObjects1.length = 0;
gdjs.Scene_321Code.GDwallsObjects2.length = 0;
gdjs.Scene_321Code.GDiconObjects1.length = 0;
gdjs.Scene_321Code.GDiconObjects2.length = 0;


return;

}

gdjs['Scene_321Code'] = gdjs.Scene_321Code;
